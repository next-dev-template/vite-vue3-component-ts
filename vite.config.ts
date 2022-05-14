import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import { getName } from 'pkg-get';

const name = getName(pkg.name);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
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
