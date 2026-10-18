import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import pkg from './package.json';

const commonjsOptions = {
  include: 'node_modules/**',
};

export default {
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
  external: [/@babel\/runtime/],
  plugins: [
    external(),
    url({exclude: ['**/*.svg']}),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
      presets: [
        ['@babel/preset-react', {runtime: 'automatic'}],
        '@babel/preset-typescript',
      ],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx', '.jsx'],
    }),
    commonjs(commonjsOptions),
  ],
};
