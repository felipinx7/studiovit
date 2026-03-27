import type { Config } from 'jest'

const config: Config = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|webp|svg)$': '<rootDir>/test/mocks/fileMock.js',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
}

export default config
