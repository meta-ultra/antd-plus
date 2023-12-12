module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    // Enable Prettier formatting rules
    "prettier/prettier": true,
    "selector-class-pattern": null,
  },
};
