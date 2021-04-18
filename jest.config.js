module.exports = {
  preset: "ts-jest/presets/default",
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  setupFiles: ["<rootDir>/src/setupTests.js"],
  testPathIgnorePatterns: ["./node_modules/"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!/node_modules/*"]
};
