module.exports = {
  setupFiles: ['<rootDir>/__tests__/enzyme.config.js'],
  moduleFileExtensions: ['js', 'jsx'],
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)+(spec).js?(x)'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  verbose: true,
  moduleNameMapper: {
    '\\.(css|sass|scss)$': '<rootDir>/__tests__/__mocks__/stylesMock.js'
  }
};
