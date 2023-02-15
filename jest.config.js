"use strict";



module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: "node",
  testRegex: `/__tests__/.*\\.spec\\.ts$`,
};
