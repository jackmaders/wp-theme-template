import FastGlob from "fast-glob";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    publicDir: "theme",
    build: {
      outDir: process.env.VITE_OUTPUT_DIR ?? "dist",
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        formats: ["es"],
      },
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name].js",
          entryFileNames: "assets/js/[name].js",

          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
              return "assets/images/[name][extname]";
            }

            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[name][extname]";
            }

            return "assets/[name][extname]";
          },
        },
      },
    },
    plugins: [
      {
        name: "watch-external", // https://stackoverflow.com/questions/63373804/rollup-watch-include-directory/63548394#63548394
        async buildStart() {
          const files = await FastGlob(["theme/**/*"]);
          for (let file of files) {
            this.addWatchFile(file);
          }
        },
      },
    ],
  });
};
