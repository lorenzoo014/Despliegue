module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.tests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  