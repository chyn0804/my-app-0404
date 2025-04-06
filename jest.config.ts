export default {
  preset: "ts-jest",
  testMatch: [
    "**/*.jest.test.[jt]s?(x)", // 예: *.jest.test.ts
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
