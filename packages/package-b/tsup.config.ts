/* import EXTERNAL modules */
import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    dts: true,
    entry: ["src/index.ts", "src/**/index.ts"],
    format: ["cjs", "esm"],
    outDir: "build",
    splitting: true,
    treeshake: true,
    ...options
}));
