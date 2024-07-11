const NAME_PATTERN = /^[a-z0-9]+(_[a-z0-9]+)*$/;

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
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
