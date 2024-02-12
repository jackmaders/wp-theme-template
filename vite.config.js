import FastGlob from "fast-glob";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "main",
    },
  },
});
