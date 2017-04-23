'use strict';

const nodePreset = require('./node');
const baseTestRules = require('./lib/test/base-rules');
const baseStyleRules = require('./lib/test/style-rules');

module.exports = {
    parserOptions: { ecmaVersion: 6 },
    env: { node: true },
    plugins: ['ava', 'node', 'promise', 'unicorn'],
    rules: Object.assign({}, nodePreset.rules, baseTestRules, baseStyleRules)
};
