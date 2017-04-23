'use strict';

const codePreset = require('./node');
const stylePreset = require('./style');

module.exports = {
    parserOptions: { ecmaVersion: 6 },
    env: { node: true },
    plugins: ['node', 'promise', 'unicorn'],
    rules: Object.assign({}, codePreset.rules, stylePreset.rules)
};
