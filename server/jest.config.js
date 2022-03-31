/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  // The test environment that will be used for testing
  testEnvironment: "node",
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The glob patterns Jest uses to detect test files
  testMatch: ["<rootDir>/__tests__/**/*.test.ts?(x)"],
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["src/**"],
  // The directory where Jest should output its coverage files
  coverageDirectory: "__tests__/coverage",
  globalTeardown: "<rootDir>/test-teardown-globals.js",
};
