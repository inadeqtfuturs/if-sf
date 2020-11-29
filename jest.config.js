module.export = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  rootDir: './',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@theme(.*)$': '<rootDir>/src/theme',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1'
  }
};
