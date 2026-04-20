# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for X-Squared on Demand.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

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

If you don't want to use `package.json`, you can use any of the supported
extensions to export a string:

```jsonc
// `.prettierrc.json` or `.prettierrc` or `.prettierrc.yaml` or `.prettierrc.yml` or `prettierrc.json`
"@x2od/prettier-config"
```

**OR**

Create a `prettier.config.js` or `.prettierrc.js` file and export an object.

To use the configuration as written:

```js
// `prettier.config.js` or `.prettierrc.js`
module.exports = '@x2od/prettier-config';
```

To *extend* the configuration to overwrite some properties from the shared configuration, import the file in a `prettier.config.mjs` file and export the modifications, e.g:
<!-- prettier-ignore -->
```js
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

### Extending Shared Configurations

This configuration is not intended to be changed, but if you have a setup where
modification is required, it is possible. Prettier does not offer an "extends"
mechanism as you might be familiar from tools such as ESLint.

To extend a configuration you will need to:

1.  Import/Require this sharable config from within your own configuration. This means you must be using a JavaScript version of a Prettier configuration file.
1.  Export the modified configuration

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for
configuration file support. This means you can configure prettier via:

- A `.prettierrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json`.
- A `prettier.config.js` or `.prettierrc.js` file that exports an object.
- A `"prettier"` key in your `package.json` file.

**Sharing configurations**
>
> Note: This method does **not** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications, e.g:
>
> ```js
> import x2odPrettierConfig from '@x2od/prettier-config';
>
> export default {
>  ...x2odPrettierConfig,
>  semi: false
> };
> ```
>
> _source: <https://github.com/prettier/prettier/blob/main/docs/configuration.md>_

**NOTE: THE ABOVE DOES NOT WORK! You will get an error that you cannot use import outside of a module. Please use the below instead.**

For example, if you need to change it so that semicolons are required:

```javascript
// `prettier.config.js` or `.prettierrc.js`
const x2odPrettierConfig = require('@x2od/prettier-config');

module.exports = {
  ...x2odPrettierConfig,
  semi: true
};
```

### Configuration Considerations

WHen extending, in the `js` configuration file, do not use an array for files. You must use a single string, but can put alternate values in curly braces:

```javascript
{
  files: '*.{yaml,yml}', // ['*.yaml','*.yml'] does not work
  options: {
    singleQuote: true
  }
}
```

To extend any section of the original file, refer to the original configuration and its attribute:

```javascript
module.exports = {
  //...require('@x2od/prettier-config'),
  ...x2odPrettierConfig,
  $schema: 'https://json.schemastore.org/prettierrc',
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
```