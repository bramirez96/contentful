// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.test\\.ts',
    roots: ['<rootDir>/src'],
}
