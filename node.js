'use strict';

const pedantRules = require('eslint-config-pedant/es2015').rules;
const codeRules = require('./lib/code/base-rules');
const nodeRules = require('./lib/code/node-rules');

module.exports = {
    parserOptions: { ecmaVersion: 6 },
    env: { node: true },
    plugins: ['node', 'promise', 'unicorn'],
    rules: Object.assign({}, pedantRules, codeRules, nodeRules)
};
