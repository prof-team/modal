const path = require('path')

module.exports = {
    roots: [path.resolve(__dirname, './src')],
    verbose: true,
    testEnvironment: 'jsdom',
    // testEnvironment: 'jest-environment-jsdom-sixteen',
    displayName: 'tests',
    testMatch: ['**//__tests__/**/*.js', '**/?(*.)+(spec|test).[jt]s?(x)'],
    // testURL: 'http://localhost',
    setupFilesAfterEnv: [path.resolve(__dirname, './src/__tests__/setupTests.js')],
    coverageReporters: ["html", "text", "text-summary", "cobertura"],
}