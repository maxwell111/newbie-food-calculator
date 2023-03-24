import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    stylelint({
      fix: true,
      cache: false,
    }),
  ],
  server: {
    port: 8000,
  },
});
