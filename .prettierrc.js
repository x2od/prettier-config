module.exports = {
	...require("@x2od/prettier-config"),
	useTabs: true,
	tabWidth: 2,
	$schema: 'https://json.schemastore.org/prettierrc',
	overrides: [
		{ 
			files: '*.{yaml,yml}', 
			options: { useTabs: true}
		}
	]
};