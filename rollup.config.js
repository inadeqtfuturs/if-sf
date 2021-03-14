/* eslint-disable import/no-extraneous-dependencies */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import analyze from 'rollup-plugin-analyzer';
import path from 'path';

export default [
  {
    input: [
      'src/index.js',
      'src/tokens/index.js',
      'src/components/index.js',
      'src/utils/index.js'
    ],
    output: [
      {
        dir: 'build',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        preserveModulesRoot: 'src/'
      },
      {
        dir: 'build',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        // entryFileNames: 'index.es.js',
        preserveModulesRoot: 'src/'
      }
    ],
    preserveModules: true,
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        presets: ['@babel/preset-env', '@babel/preset-react'],
        exclude: 'node_modules/**'
      }),
      commonjs(),
      terser({
        ecma: 2018,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true
        },
        output: { quote_style: 1 }
      }),
      alias({
        entries: [
          {
            find: '@theme',
            replacement: path.resolve(__dirname, 'src/theme')
          },
          {
            find: '@utils',
            replacement: path.resolve(__dirname, 'src/utils')
          }
        ]
      }),
      analyze()
    ]
  }
];
