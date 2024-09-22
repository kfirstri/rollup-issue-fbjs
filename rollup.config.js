import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/test.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
  external: []
};