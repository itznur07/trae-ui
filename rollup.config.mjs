import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: false,
      plugins: [terser()],
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: false,
      plugins: [terser()],
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
      minimize: true,
      sourceMap: true,
      inject: true,
      plugins: [
        // typescript({ tsconfig: "./tsconfig.json" }),
        tailwindcss,
        autoprefixer,
      ],
    }),
    json(),
  ],
  external: ["react", "react-dom"],
};
