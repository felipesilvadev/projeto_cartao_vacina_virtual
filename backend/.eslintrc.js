module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'import-helpers'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],

    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',

    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
            '/^react/',
            'module',
            ['parent', 'sibling', 'index'],
        ],
        'alphabetize': { 'order': 'asc', 'ignoreCase': true },
      },
  ],
  },
};
