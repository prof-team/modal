const path = require('path')

console.log(__dirname);

module.exports = {
    roots: [path.resolve(__dirname, './src')],
    verbose: true,
    testEnvironment: 'jsdom',
    // testEnvironment: 'jest-environment-jsdom-sixteen',
    displayName: 'tests',
    testMatch: ['**//__tests__/**/*.js', '**/?(*.)+(spec|test).[jt]s?(x)'],
    // testURL: 'http://localhost',
    setupFilesAfterEnv: [path.resolve('src/__tests__/setupTests.js')],
    coverageReporters: ["html", "text", "text-summary", "cobertura"],
    coverageThreshold: {
        global: {
            lines: 80,
        },
    },
}