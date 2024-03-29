module.exports = {
	...require('@x2od/prettier-config'),
	useTabs: true,
	tabWidth: 2,
	printWidth: 80,
	$schema: 'https://json.schemastore.org/prettierrc',
	overrides: [{ files: '*.{yaml,yml}', useTabs: false }]
};
