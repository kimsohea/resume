import { fileURLToPath, URL } from "url"; // 추가된 부분

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  ase: "/resume/",
  plugins: [vue()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".vue", ".scss", ".css"],
  },
});
