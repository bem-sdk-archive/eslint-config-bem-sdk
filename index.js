'use strict';

const nodePreset = require('./node');
const stylePreset = require('./style');

module.exports = {
    parserOptions: { ecmaVersion: 6 },
    env: { node: true },
    plugins: nodePreset.plugins,
    rules: Object.assign({}, nodePreset.rules, stylePreset.rules)
};
