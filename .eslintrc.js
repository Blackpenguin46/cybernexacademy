module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "no-unused-vars": "warn",
    "import/no-anonymous-default-export": "off"
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
}; 