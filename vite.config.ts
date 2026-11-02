import { defineConfig } from "vitest/config";
import path from "path";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  // GitHub Pages serves a project site from a subpath, which the deploy
  // workflow passes in as BASE_PATH. Unset (dev, custom domain) means root.
  base: process.env.BASE_PATH || "/",
  plugins: [Vue()],
  resolve: {
    alias: {
      src: path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
