# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for X-Squared on Demand.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```bash
npm install --save-dev @x2od/prettier-config
```

## Usage

Add a key in your **package.json** file.

```jsonc
"prettier": "@x2od/prettier-config"
```

**OR**

Create a **.prettierrc** , **.prettierrc.yaml** , **.prettierrc.yml** or **.prettierrc.json** file and export a string.

```jsonc
"@x2od/prettier-config"
```

**OR**

Create a **prettier.config.js** or **.prettierrc.js** file and export an object.

```js
module.exports = {
	...require('@x2od/prettier-config'),
	// endOfLine: 'lf', // to overwrite the property
};
```
