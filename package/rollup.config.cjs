const esbuild = require('rollup-plugin-esbuild').default;
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const url = require('@rollup/plugin-url');
const pkg = require('./package.json');

const commonjsOptions = {
  include: 'node_modules/**',
};

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    url({exclude: ['**/*.svg']}),
    // esbuild parses TypeScript itself, so it does not depend on the
    // TypeScript compiler API (which TypeScript 7 no longer exposes).
    // `tsc --noEmit` still runs as a separate type-check step in the build.
    esbuild({
      target: 'es2019',
      jsx: 'automatic',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx', '.jsx'],
    }),
    commonjs(commonjsOptions),
  ],
};
