module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
  }
};
