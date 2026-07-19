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
			files: 'package.json',
			options: {
				printWidth: 100
			}
		},
		{
			files: '*prettier*js',
			options: {
				singleQuote: true
			}
		}
	]
};

export default config;
