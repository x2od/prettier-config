/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
	...require('@x2od/prettier-config'),
	$schema: 'https://json.schemastore.org/prettierrc',
	overrides: [
		{
			files: 'index.json',
			options: {
				singleQuote: false,
				printWidth: 80
			}
		},
		{
			files: '.prettierrc.js',
			options: {
				singleQuote: true
			}
		}
	]
};
