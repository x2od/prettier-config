'use strict';
/**
 * automation-config.js
 *
 * Shared config loader for the git-automation scripts. Reads an optional
 * `git-automation.config.json` from the repo root and fills in sensible
 * defaults so every project can run with zero or minimal configuration.
 *
 * The one value worth auto-detecting is the repo URL — we derive it from
 * `git remote get-url origin` so a fresh project needs no config at all to
 * get clickable commit/PR links in its changelog.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Walk up from CWD to find the repo root (the dir containing `.git`). Scripts
// are normally run from the root, but hooks/CI may invoke from elsewhere.
function findRepoRoot(start) {
	let dir = start;
	while (dir !== path.dirname(dir)) {
		if (fs.existsSync(path.join(dir, '.git'))) return dir;
		dir = path.dirname(dir);
	}
	return start;
}

const ROOT = findRepoRoot(process.cwd());

const DEFAULTS = {
	// null → auto-detect from the git remote at load time.
	repoUrl: null,
	changelog: {
		output: 'CHANGELOG.md',
		// Optional path (relative to root) to a markdown file appended verbatim
		// as a permanent footer — e.g. pre-reset history. null = no footer.
		historyFooterFile: null
	},
	// Allowed semantic commit types (commit-lint) and their changelog emoji.
	commitTypes: ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert', 'deps'],
	// Commits by these authors are treated as automated noise and skipped.
	botAuthors: ['github-actions[bot]', 'github-actions']
};

function loadRaw() {
	const p = path.join(ROOT, 'git-automation.config.json');
	if (!fs.existsSync(p)) return {};
	try {
		return JSON.parse(fs.readFileSync(p, 'utf8'));
	} catch (e) {
		console.warn(`⚠️  git-automation.config.json is invalid JSON — using defaults (${e.message})`);
		return {};
	}
}

function detectRepoUrl() {
	try {
		const remote = execSync('git remote get-url origin', {
			cwd: ROOT,
			encoding: 'utf8',
			stdio: ['pipe', 'pipe', 'pipe'] // capture stderr so "no remote" stays quiet
		}).trim();
		// SSH form:   git@github.com:user/repo.git
		const ssh = remote.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
		if (ssh) return `https://${ssh[1]}/${ssh[2]}`;
		// HTTPS form: https://[token@]github.com/user/repo.git
		const https = remote.match(/^https?:\/\/(?:[^@]+@)?(.+?)(?:\.git)?$/);
		if (https) return `https://${https[1]}`;
		return null;
	} catch {
		return null; // no remote, or git unavailable — links degrade gracefully
	}
}

function loadConfig() {
	const raw = loadRaw();
	const cfg = {
		...DEFAULTS,
		...raw,
		changelog: { ...DEFAULTS.changelog, ...(raw.changelog || {}) }
	};
	if (!cfg.repoUrl) cfg.repoUrl = detectRepoUrl();
	return cfg;
}

module.exports = { ROOT, loadConfig, detectRepoUrl };
