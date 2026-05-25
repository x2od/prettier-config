# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for [X-Squared on Demand](https://www.x2od.com).

## Installation

To install this package, run the following command in the terminal in the root directory of your application.

```bash
npm install --save-dev @x2od/prettier-config
```

## Usage

Reference it in `package.json` using the `prettier` property:

```json
{
	"name": "my-projects-name",
	"prettier": "@x2od/prettier-config",
	"devDependencies": {
		"@x2od/prettier-config": "latest"
	}
}
```

**OR**

If you don't want to use `package.json`, you can use any of the supported config file
extensions to export a string:

```jsonc
// `.prettierrc.json` or `.prettierrc` or `.prettierrc.yaml` or `.prettierrc.yml` or `.prettierrc.json`
"@x2od/prettier-config"
```

**OR**

Create a `prettier.config.js` or `.prettierrc.js` file and export an object.

To use the configuration as written:

```js
// `prettier.config.js` or `.prettierrc.js`
module.exports = '@x2od/prettier-config';
```

To _extend_ and override properties from the shared configuration, import the file in a `prettier.config.mjs` file and export the modifications, e.g:

<!-- prettier-ignore -->
```javascript
// prettier.config.mjs
import x2odPrettierConfig from "@x2od/prettier-config";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...x2odPrettierConfig,
  semi: false,
};

export default config;
```

**CommonJS note:** ES module syntax requires a `.mjs` file. For `.js` files, use `require()` instead:

```js
// `prettier.config.js` or `.prettierrc.js`
const x2odPrettierConfig = require('@x2od/prettier-config');

module.exports = {
	...x2odPrettierConfig,
	semi: true
};
```

### Extending Shared Configurations

While this configuration is designed to be used as-is, you can extend it if your
project requires custom overrides. Prettier does not offer an "extends" mechanism
as you might be familiar from tools such as ESLint.

To extend a configuration you will need to:

1.  Import/Require this sharable config from within your own configuration. This means you must be using a JavaScript version of a Prettier configuration file.
1.  Export the modified configuration

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for
configuration file support. This means you can configure prettier via:

- A `.prettierrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json`.
- A `prettier.config.js`, `.prettierrc.js`,`prettier.config.mjs`, or `.prettierrc.mjs` file that exports an object.
- A `"prettier"` key in your `package.json` file.

For example, if you need to add overrides for `.js`:

```javascript
// `prettier.config.js` or `.prettierrc.js`
const x2odPrettierConfig = require('@x2od/prettier-config');

module.exports = {
	...x2odPrettierConfig,
	semi: true
};
```

### Configuration Considerations

When extending, in the `js` configuration file, do not use an array for files. Prettier's override syntax requires a single string pattern (not arrays). Use curly braces for alternation:

```json
{
	"files": "*.{yaml,yml}", // ['*.yaml','*.yml'] does not work
	"options": {
		"singleQuote": true
	}
}
```

To extend any section of the original file, refer to the original configuration and its attribute. This includes adding plugins. Be sure to include those additional plugins as local devDependencies.

```javascript
// prettier.config.js CommonJS
/* eslint-disable no-undef */
const x2odPrettierConfig = require('@x2od/prettier-config');

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
	...x2odPrettierConfig,
	tabWidth: 2,
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

or to put the require line in the exports block. Note that arrays do not need to be extended if `require` is in teh exports block.

```javascript
/**
 * @see https://prettier.io/docs/configuration
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
```

We can do the same for `.mjs` files

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
