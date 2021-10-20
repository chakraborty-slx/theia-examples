import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
    preset: 'ts-jest',
    testMatch: ['**.test.ts'],
    rootDir: '../',
    "moduleNameMapper": {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      },
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
        "^.+\\.css$": "jest-transform-css"
    }
});
