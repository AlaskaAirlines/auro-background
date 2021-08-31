import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

const getSharedPlugins = (isLegacy) => [
  resolve({
    // in case of multiple lit-element versions (e.g. importing another auro component)
    dedupe: ['lit-element', 'lit-html']
  }),
  commonjs(),
  // skipPreflightCheck flag needed or else build fails
  // see https://github.com/rollup/plugins/issues/381
  minifyHTML(),
  terser()
];

const modernConfig = {
  input: {
    ['auro-background__bundled']: './src/auro-background.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    // remove shady DOM polyfill for modern browsers
    // https://lit-element.polymer-project.org/guide/build#compile-out-the-shady-render-module
    alias({
      entries: [
        {
          find: 'lit-html/lib/shady-render.js',
          replacement: 'node_modules/lit-html/lit-html.js'
        }
      ]
    }),
    ...getSharedPlugins(false),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

export default [modernConfig];
