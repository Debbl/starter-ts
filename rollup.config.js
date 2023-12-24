import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
  {
    input: "./src/index.ts",
    plugins: [esbuild()],
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
      },
      {
        file: "dist/index.mjs",
        format: "esm",
      },
    ],
  },
  {
    input: "./src/index.ts",
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
    },
  },
]);
