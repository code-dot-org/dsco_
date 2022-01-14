module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    curly: 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-duplicate-imports': 'error',
    'no-implicit-globals': 'error',
    'no-magic-numbers': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': ['error', {enforceForJSX: true}],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'sort-imports': 'error',
    'sort-keys': 'error',
    'spaced-comment': ['error', 'always', {block: {balanced: true}}],
    strict: 'error',
    yoda: 'error',
  },
};
