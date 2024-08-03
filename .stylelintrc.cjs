const NAME_PATTERN =
  /^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?((_[a-z0-9]+(-[a-z0-9]+)*){1,2})?$/;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  rules: {
    'selector-class-pattern': [
      NAME_PATTERN,
      {
        message: (className) =>
          `Expected class selector "${className}" to be kebab-case and follow BEM-like pattern`,
      },
    ],
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'color-named': 'never',
    'color-function-notation': ['modern', { ignore: ['with-var-inside'] }],
    'import-notation': 'string',
  },
};
