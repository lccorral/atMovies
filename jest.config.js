
module.exports = {
  testURL: 'http://localhost',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test-setup.ts',
    '/src/environments'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  }
};
