module.exports = {
    // other Jest options
    coverage: {
      collectCoverage: true,
      collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
      coverageDirectory: 'coverage',
      coverageReporters: ['html', 'text-summary'],
    },
  };
  