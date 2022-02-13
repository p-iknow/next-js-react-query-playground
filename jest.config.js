module.exports = {
  projects: ['<rootDir>/'],
  testRegex: '\\.test\\.(ts|js)x?$',
  setupFilesAfterEnv: ['<rootDir>/__test__/setup-tests.ts'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@mocks/(.*)$': '<rootDir>/mocks/$1',
    '@pages/(.*)$': '<rootDir>/pages/$1',
    '@components': '<rootDir>/components',
    '@components/(.*)$': '<rootDir>/components/$1',
    '@hooks': '<rootDir>/hooks',
    '@hooks/(.*)$': '<rootDir>/hooks/$1',
  },
};
