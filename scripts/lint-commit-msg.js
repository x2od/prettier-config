#!/usr/bin/env node
/**
 * lint-commit-msg.js
 *
 * Validates the commit message against the project's semantic commit
 * convention. Called by the Husky commit-msg hook with the path to the
 * commit message file.
 *
 * Convention:  <type>(<scope>)?<!>?: <description>
 * Valid types come from git-automation.config.json (commitTypes), defaulting
 * to: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert, deps
 *
 * A trailing `!` on the type/scope marks a breaking change and REQUIRES a
 * `BREAKING CHANGE: ` footer paragraph in the body (that text heads the
 * changelog). Release-please control markers (`BEGIN_…`/`END_…`) must be
 * balanced — an unmatched one silently mangles the changelog.
 *
 * Exits 1 (blocks the commit) if the format is wrong, a breaking change lacks
 * its footer, or a control marker is unbalanced.
 * Prints a warning but exits 0 for minor issues (short/generic description,
 * control markers present in a commit message).
 */

const fs = require('fs');
const { loadConfig } = require('./lib/automation-config');

const { commitTypes } = loadConfig();

const msgFile = process.argv[2];
if (!msgFile) {
	console.error('lint-commit-msg: no message file path provided');
	process.exit(0); // non-fatal
}

const msg = fs.readFileSync(msgFile, 'utf8').trim();

// Ignore merge commits, reverts, fixups, and WIP — these aren't authored prose.
if (/^(Merge|Revert|fixup!|squash!|WIP)/i.test(msg)) {
	process.exit(0);
}

const TYPE_LIST = commitTypes.join('|');

// Full format:  type(scope)!: description  — scope and the breaking-change `!`
// are both optional:  type: description  /  type(scope): description  /  type!: …
const VALID = new RegExp(`^(${TYPE_LIST})(\\([^)]+\\))?(!)?: .{4,}`, 'i');

const firstLine = msg.split('\n')[0];

if (!VALID.test(firstLine)) {
	const typesPretty = commitTypes.join(' · ');
	console.error(`
✗  Commit message doesn't follow the project convention

   Expected:  <type>(<scope>): <description>
   Example:   feat(auth): add JWT-based login
   Breaking:  feat(auth)!: drop legacy tokens   (needs a BREAKING CHANGE: footer)

   Valid types: ${typesPretty}

   Your message:
   ${firstLine}
`);
	process.exit(1);
}

// ── Breaking change (`!`) requires a BREAKING CHANGE: footer ───────────────────
// A `!` after the type/scope declares a breaking change; the convention requires
// exactly one `BREAKING CHANGE: ` paragraph in the body — that text is what heads
// the changelog. Block the commit if it's missing so the signal never gets lost.
const isBreaking = new RegExp(`^(${TYPE_LIST})(\\([^)]+\\))?!:`, 'i').test(firstLine);
const hasBreakingFooter = /^BREAKING CHANGE: .+/m.test(msg);
if (isBreaking && !hasBreakingFooter) {
	console.error(`
✗  Breaking change (\`!\`) is missing its BREAKING CHANGE: footer

   A \`!\` after the type/scope marks a breaking change, so the message must
   include exactly one paragraph in the body that starts with:

       BREAKING CHANGE: <what breaks, and what consumers must do>

   That paragraph is what surfaces at the top of the changelog. Add it, or drop
   the \`!\` if the change isn't actually breaking.

   Your subject:
   ${firstLine}
`);
	process.exit(1);
}

// ── Release-please control markers must be balanced ────────────────────────────
// Every BEGIN_<NAME> must have a matching END_<NAME> (and vice versa). Release-
// please parses these anywhere in the text, so an unmatched one silently drops or
// mangles a changelog entry. Match generically so any current or future marker
// pair is covered, not just the two documented ones.
const beginNames = [...msg.matchAll(/\bBEGIN_([A-Z][A-Z0-9_]*)\b/g)].map((m) => m[1]);
const endNames = [...msg.matchAll(/\bEND_([A-Z][A-Z0-9_]*)\b/g)].map((m) => m[1]);
const markerNames = new Set([...beginNames, ...endNames]);
const unbalanced = [];
for (const name of markerNames) {
	const opens = beginNames.filter((n) => n === name).length;
	const closes = endNames.filter((n) => n === name).length;
	if (opens !== closes) unbalanced.push(`   • ${name}: ${opens} BEGIN_ vs ${closes} END_`);
}
if (unbalanced.length) {
	console.error(`
✗  Unbalanced release-please control marker(s)

   Each BEGIN_<NAME> block must be closed by a matching END_<NAME>. Release-please
   reads these markers literally and will silently drop or mangle a changelog
   entry when one is left open:

${unbalanced.join('\n')}

   Close the block, or remove the marker if you didn't mean to use one.
`);
	process.exit(1);
}

// Soft warnings (don't block)

// Control markers are powerful and are parsed anywhere in the text — flag their
// presence in a commit message (they normally live in PR descriptions) so an
// accidental mention doesn't quietly steer release-please.
if (markerNames.size) {
	console.warn('⚠️  commit-msg: release-please control markers present (BEGIN_…/END_…) — make sure that use is intentional');
}

const description = firstLine.replace(/^[^:]+:\s*/, '');
if (description.length < 10) {
	console.warn('⚠️  commit-msg: description is very short — consider being more specific');
}
if (/^(update|fix|change|add|remove)$/i.test(description)) {
	console.warn('⚠️  commit-msg: description is too generic — say what was updated/fixed/changed');
}

process.exit(0);
