module.exports = {
  projects: ['<rootDir>/'],
  testRegex: '\\.test\\.(ts|js)x?$',
  setupFilesAfterEnv: ['<rootDir>/__test__/setup-tests.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
