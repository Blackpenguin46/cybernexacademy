module.exports = {
  extends: ["next", "next/core-web-vitals"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
  }
}; 