// jest.config.js
module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html', 'lcov'],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['./test-setup.ts']
};

// module.exports = {
//   testURL: 'http://localhost',
//   preset: 'jest-preset-angular',
//   setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
//   coveragePathIgnorePatterns: [
//     '/node_modules/',
//     '/src/jestGlobalMocks.ts',
//     '/src/setupJest.ts',
//     '/src/environments',
//   ],
//   transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
//   coverageThreshold: {
//     global: {
//       branches: 65,
//       functions: 80,
//       lines: 80,
//     },
//   },
//   modulePaths: ['<rootDir>'],
//   moduleNameMapper: {
//     '^lodash-es$': 'lodash',
//     '^@core/(.*)$': '<rootDir>/src/app/core/$1',
//     '^@layout/(.*)$': '<rootDir>/src/app/layout/$1',
//     '^@notifica/(.*)$': '<rootDir>/src/app/modules/notifica/$1',
//     '^@indexa/(.*)$': '<rootDir>/src/app/modules/indexa/$1',
//     '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
//     '^@assets/(.*)$': '<rootDir>/src/assets/$1',
//     '^@environment/(.*)$': '<rootDir>/src/environments/$1',
//   },
//   reporters: [ 'default', 'jest-junit' ]
// };
