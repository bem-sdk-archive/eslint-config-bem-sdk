eslint-config-bem-sdk
=====================

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [BEM SDK](https://github.com/bem-sdk/) packages.

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]

[npm]:          https://www.npmjs.org/package/eslint-config-bem-sdk
[npm-img]:      https://img.shields.io/npm/v/eslint-config-bem-sdk.svg

[travis]:       https://travis-ci.org/blond/eslint-config-bem-sdk
[test-img]:     https://img.shields.io/travis/blond/eslint-config-bem-sdk.svg?label=tests

Install
-------

You'll first need to install ESLint:

```
$ npm install eslint --save-dev
```

**Note**: You may install ESLint globally using the `-g` flag.

Next, install `eslint-config-bem-sdk`:

```
$ npm install eslint-config-bem-sdk --save-dev
```

**Note**: If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-bem-sdk` globally.

A globally-installed instance of ESLint can only use globally-installed ESLint plugins. A locally-installed ESLint can make use of both locally- and globally- installed ESLint plugins.

Usage
-----

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Add this to your `.eslintrc.json` file:

```json
{
  "extends": "bem-sdk"
}
```

**Note**: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your `.eslintrc.json` file.

Environment
-----------

Now BEM SDK modules are used in assembly systems and `bem-tools` plugins. Therefore, the modules support `Node.js` only.

So the rules are suitable for `ECMAScript 6` or higher and designed for code that is executed in `Node.js@4+`.

License
-------

Code and documentation © 2017 YANDEX LLC. Code released under the Mozilla Public License 2.0.
