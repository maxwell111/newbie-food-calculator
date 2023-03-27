import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import stylelint from "vite-plugin-stylelint";
import eslintPlugin from "vite-plugin-eslint";

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
  base: "/newbie-food-calculator/",
  server: {
    port: 8000,
  },
});
