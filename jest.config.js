module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv:["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(less)": 'identity-obj-proxy'
  }
};