import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/*.test.ts"],
    testTimeout: 120000,
    retry: 2,
    sequence: {
      concurrent: false,
    },
  },
});
