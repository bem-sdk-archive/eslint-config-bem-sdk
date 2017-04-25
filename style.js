'use strict';

const styleRules = require('./lib/code/style-rules');

module.exports = {
    parserOptions: { ecmaVersion: 6 },
    env: { node: true },
    rules: styleRules
};
