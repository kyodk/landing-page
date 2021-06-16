module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true
  },
  extends: [
    'airbnb-base',
    'airbnb-base/legacy',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  plugins: ['import', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    root: true
  },
  rules: {
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never'
      }
    ],
    'func-names': ['error', 'never']
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
};
