import x2odPrettierConfig from './index.json' with { type: 'json' };

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	...x2odPrettierConfig,
	overrides: [...x2odPrettierConfig.overrides]
};

export default config;
