import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    terser(),
    postcss({
      extract: "tailwind.css",
      // extract: true,
      minimize: true,
      sourceMap: true,
      plugins: [tailwindcss(), autoprefixer()],
    }),
    json(),
  ],
  external: ["react", "react-dom"],
};
