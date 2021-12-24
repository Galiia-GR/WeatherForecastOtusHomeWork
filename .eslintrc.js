module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-restricted-globals": "off",
    "no-undef": "off",
    "one-var": [2, { uninitialized: "always" }],
    "no-shadow": ["error", { allow: ["items", "el"] }],
    "no-use-before-define": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-console": "off",
    "no-alert": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
  },
  plugins: ["jest"],
};
