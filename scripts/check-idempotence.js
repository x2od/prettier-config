#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const ROOT = path.join(__dirname, '..');
const TEMPLATES = path.join(ROOT, 'templates');

function walk(dir) {
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const full = path.join(dir, entry.name);
		return entry.isDirectory() ? walk(full) : [full];
	});
}

async function checkFile(file) {
	const info = await prettier.getFileInfo(file, { resolveConfig: true });
	if (info.ignored) return `${path.relative(ROOT, file)}: ignored by .prettierignore`;
	if (!info.inferredParser) return `${path.relative(ROOT, file)}: no parser inferred`;

	const options = (await prettier.resolveConfig(file)) ?? {};
	const source = fs.readFileSync(file, 'utf8');
	const once = await prettier.format(source, { ...options, filepath: file });
	const twice = await prettier.format(once, { ...options, filepath: file });
	if (once !== twice) return `${path.relative(ROOT, file)}: output changes on a second pass`;
	return null;
}

(async () => {
	const files = walk(TEMPLATES);
	const failures = [];
	for (const file of files) {
		try {
			const problem = await checkFile(file);
			if (problem) failures.push(problem);
		} catch (error) {
			failures.push(`${path.relative(ROOT, file)}: ${error.message.split('\n')[0]}`);
		}
	}

	if (failures.length) {
		console.error(`check-idempotence: ${failures.length} of ${files.length} files failed`);
		for (const failure of failures) console.error(`  ✗ ${failure}`);
		process.exitCode = 1;
		return;
	}
	console.log(`check-idempotence: all ${files.length} template files are stable`);
})();
