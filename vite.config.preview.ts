import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import { getName } from "pkg-get";

const name = getName(pkg.name);

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${name}/`,
  plugins: [vue()],
});
