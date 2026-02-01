import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // 支持 React 风格的 JSX
  ],
});
