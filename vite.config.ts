import { defineConfig } from 'vite';
import pkg from './package.json';
import { getName } from 'pkg-get';
import base from './vite.config.base';

const name = getName(pkg.name);

// https://vitejs.dev/config/
export default defineConfig({
  ...base,
  build: {
    outDir: './lib',
    lib: {
      entry: 'src/index.ts',
      name,
      formats: [ 'umd', 'es' ],
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
