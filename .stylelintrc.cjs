const NAME_PATTERN =
  /^[a-z]+([A-Z][a-z]+)*(__[a-z]+([A-Z][a-z]+)*)?(_[a-z]+([A-Z][a-z]+)*(_[a-z]+)?)?$/;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  rules: {
    'selector-class-pattern': [
      NAME_PATTERN,
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be snake_case`,
      },
    ],
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'color-named': 'never',
    'color-function-notation': ['modern', { ignore: ['with-var-inside'] }],
  },
};
