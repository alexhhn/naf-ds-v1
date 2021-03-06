const path = require("path");

module.exports = {
  stories: ["../src/packages/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs",

    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};
