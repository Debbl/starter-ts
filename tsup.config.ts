import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  outExtension: (ctx) => {
    return {
      js: ctx.format === "esm" ? ".mjs" : ".cjs",
      dts: ".d.ts",
    };
  },
  sourcemap: true,
  dts: true,
  clean: true,
});
