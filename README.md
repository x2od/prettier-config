# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for X-Squared on Demand.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```bash
npm install --save-dev @x2od/prettier-config
```

## Usage

Reference it in `package.json` using the `prettier` property:

```jsonc
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

To extend the configuration:

<!-- prettier-ignore -->
```js
module.exports = {
	...require('@x2od/prettier-config'),
	endOfLine: 'lf', // to overwrite the property
};
```

### Extending Shared Configurations

This configuration is not intended to be changed, but if you have a setup where
modification is required, it is possible. Prettier does not offer an "extends"
mechanism as you might be familiar from tools such as ESLint.

To extend a configuration you will need to:

1.  Import/Require this sharable config from within your own configuration. This means you must be using a JavaScript version of a Prettier configuration file.
1.  Export the modified configuration

> Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for
> configuration file support. This means you can configure prettier via:
>
> - A `.prettierrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json`.
> - A `prettier.config.js` or `.prettierrc.js` file that exports an object.
> - A `"prettier"` key in your `package.json` file.
>
> ...
>
> **Sharing configurations**
>
> > Note: This method does **not** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications, e.g:
> >
> > ```js
> > import companyPrettierConfig from '@company/prettier-config';
> >
> > export default {
> > 	...companyPrettierConfig,
> > 	semi: false
> > };
> > ```
>
> _source: <https://github.com/prettier/prettier/blob/main/docs/configuration.md>_

NOTE: THIS DOES NOT WORK! You will get an error that you cannot use import outside of a module. Please use the below instead.

For example, if you need to change it so that semicolons are required:

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = {
	...require('@x2od/prettier-config'),
	semi: true
};
```
