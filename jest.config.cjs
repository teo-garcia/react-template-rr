module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/app'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/app/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e'],
}
