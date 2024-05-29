import { ESLint } from "eslint";

const config = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
        node: true
      }
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"]
    }
  }
];

export default config;