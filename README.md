# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for [X-Squared on Demand](https://www.x2od.com).

## Installation

```bash
npm install --save-dev @x2od/prettier-config
```

## Basic Usage

Prettier supports multiple ways to reference this config in a project. Choose one:

**Via `package.json`:**

```json
{
	"prettier": "@x2od/prettier-config"
}
```

**Via `.prettierrc` (JSON or YAML):**

```json
"@x2od/prettier-config"
```

**Via `prettier.config.js` or `.prettierrc.js`:**

```js
module.exports = '@x2od/prettier-config';
```

**Via `prettier.config.mjs`, or `.prettierrc.mjs`:**

```js
import x2odPrettierConfig from '@x2od/prettier-config';
export default x2odPrettierConfig;
```

## Default Configuration

This config includes sensible defaults optimized for Salesforce development and general web projects:

**Base settings:**

- **printWidth**: 180
- **tabWidth**: 2
- **useTabs**: true
- **singleQuote**: true
- **trailingComma**: "none"
- **bracketSpacing**: true
- **bracketSameLine**: true
- **endOfLine**: "lf"

**File-specific overrides** are included for:

- `.{cmp,page,component}` — Salesforce Lightning components
- `.{cls,trigger}` — Apex classes and triggers
- `.{apex,soql}` — Apex anonymous and SOQL
- `*.xml` — XML with custom attribute grouping
- `.{yml,yaml}` — YAML files
- `*.json` — JSON files (printWidth: 80)
- `.prettierrc*` — Prettier config files (printWidth: 80)
- `.html` — HTML files with custom attribute grouping

**Plugins:**

- `prettier-plugin-apex` — Apex language support
- `@prettier/plugin-xml` — XML formatting
- `prettier-plugin-organize-attributes` — HTML attribute organization

## Extending Shared Configurations

While this configuration is designed to be used as-is, you can extend it if your project requires custom overrides. Prettier does not offer an "extends" mechanism like ESLint.

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for
configuration file support. This means you can configure prettier via:

- A `.prettierrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json`.
- A `prettier.config.js`, `.prettierrc.js`,`prettier.config.mjs`, or `.prettierrc.mjs` file that exports an object.
- A `"prettier"` key in your `package.json` file.

To extend the configuration, import/require it in a JavaScript config file and export your modifications:

**With CommonJS (`.js`):**

```javascript
// prettier.config.js or .prettierrc.js
const x2odPrettierConfig = require('@x2od/prettier-config');

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
	...x2odPrettierConfig,
	printWidth: 100,
	overrides: [
		...x2odPrettierConfig.overrides,
		{
			files: '*.sh',
			options: {
				parser: 'sh',
				useTabs: false
			}
		}
	],
	plugins: [...x2odPrettierConfig.plugins, 'prettier-plugin-sh']
};
```

You can also inline the `require()` call:

```javascript
// prettier.config.js
/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
	...require('@x2od/prettier-config'),
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
```

**With ES modules (`.mjs`):**

```javascript
// .prettierrc.mjs or prettier.config.mjs ESM
import x2odPrettierConfig from '@x2od/prettier-config' with { type: 'json' };
// The json type specification is because this package has a JSON configuration file.
// If your package exports javascript, you will not need this.

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	...x2odPrettierConfig,
	$schema: 'https://json.schemastore.org/prettierrc',
	printWidth: 180,
	overrides: [
		...x2odPrettierConfig.overrides,
		{
			files: '*.sh',
			options: {
				parser: 'sh'
			}
		}
	],
	plugins: [...x2odPrettierConfig.plugins, 'prettier-plugin-sh']
};

export default config;
```

Note that additional plugins must be added as devDependencies in the project.

## Configuration Considerations

When adding overrides, use a single string pattern for `files` (not arrays). Use curly braces for alternation:

```json
{
	"files": "*.{yaml,yml}",
	"options": {
		"singleQuote": true
	}
}
```

When extending sections like `overrides` and `plugins`, be sure to spread the original config's values (`...x2odPrettierConfig.overrides` and `...x2odPrettierConfig.plugins`) to preserve them. If adding plugins, install them as local devDependencies.
