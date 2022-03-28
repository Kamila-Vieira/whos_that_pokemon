const { resolve } = require("path");
const root = resolve(__dirname, "./");
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: "program-tests",
    testMatch: ["<rootDir>/_test_/**/*.test.ts"],
  },
};
