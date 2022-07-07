const RULES = {
  ON: "on",
  OFF: "off",
  WARNING: "warning",
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
  },
}
