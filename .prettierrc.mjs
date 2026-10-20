import x2odPrettierConfig from './index.json' with { type: 'json' };

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	...x2odPrettierConfig,
	$schema: 'https://json.schemastore.org/prettierrc',
	overrides: [
		...x2odPrettierConfig.overrides,

		{
			files: '*.json*',
			options: {
				printWidth: 80,
				quoteProps: 'consistent',
				singleQuote: false,
				useTabs: false
			}
		},
		{
			files: '*.json',
			options: {
				parser: 'json',
				quoteProps: 'consistent',
				singleQuote: false
			}
		},
		{
			files: '*.json5',
			options: {
				parser: 'jsonc',
				quoteProps: 'consistent',
				singleQuote: false
			}
		},
		{
			files: 'package.json',
			options: {
				printWidth: 100
			}
		},
		{
			files: '*.{js,mjs}',
			options: {
				singleQuote: true
			}
		}
	]
};

export default config;
