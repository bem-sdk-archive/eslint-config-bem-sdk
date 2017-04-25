'use strict';

module.exports = {
    /* Strict Mode ========================================================================= */
    /* http://eslint.org/docs/rules/#strict-mode                                             */
    /* ===================================================================================== */
    'strict': 'error',

    /* Possible Errors ===================================================================== */
    /* http://eslint.org/docs/rules/#possible-errors                                         */
    /* ===================================================================================== */
    'no-console': 'error',
    'no-template-curly-in-string': 'error',
    'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false }],

    /* Variables =========================================================================== */
    /* http://eslint.org/docs/rules/#variables                                               */
    /* ===================================================================================== */
    'no-delete-var': 'error',
    'no-label-var': 'error',

    /* Best Practices ====================================================================== */
    /* http://eslint.org/docs/rules/#best-practices                                          */
    /* ===================================================================================== */
    'no-empty-function': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-new-wrappers': 'error',
    'no-magic-numbers': ['error', { 'ignoreArrayIndexes': true, 'enforceConst': true }],
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-sequences': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'error',
    'guard-for-in': 'error',

    /* Promises ============================================================================ */
    /* https://github.com/xjamundx/eslint-plugin-promise#rules
    /* ===================================================================================== */
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',

    /* Unicorn ============================================================================= */
    /* https://github.com/xjamundx/eslint-plugin-promise#rules
    /* ===================================================================================== */
    'unicorn/filename-case': ['error', {'case': 'kebabCase'}],
    'unicorn/explicit-length-check': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-array-instanceof': 'error'
};
