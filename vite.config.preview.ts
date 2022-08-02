import { defineConfig } from 'vite';
import pkg from './package.json';
import { getName } from 'pkg-get';
import base from './vite.config.base';

const name = getName(pkg.name);

// https://vitejs.dev/config/
export default defineConfig({
  ...base,
  base: `/${name}/`,
});
