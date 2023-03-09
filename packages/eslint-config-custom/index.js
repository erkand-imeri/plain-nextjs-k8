module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:json/recommended",
    "prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: "false",
    babelOptions: {
      configFile: "./.babelrc",
    },
  },
  plugins: ["@babel", "vue"],
};
