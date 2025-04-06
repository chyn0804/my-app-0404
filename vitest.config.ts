// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: [
      "src/**/*.vitest.test.{ts,tsx}", // 원하는 위치의 확장자만
    ],
    exclude: ["**/node_modules/**", "**/dist/**"],
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      provider: "v8", // or 'istanbul'
      reporter: ["text", "html"],
      exclude: ["**/test-utils/**", "**/*.d.ts"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 예: @/components 등 사용 시 필요
    },
  },
});
