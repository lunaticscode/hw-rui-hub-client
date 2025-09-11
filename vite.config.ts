import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8085",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@entities": resolve(__dirname, "src/entities"),
      "@features": resolve(__dirname, "src/features"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "@shared": resolve(__dirname, "src/shared"),
      "@pages": resolve(__dirname, "src/pages"),
      "@styles": resolve(__dirname, "src/styles"),
      "@snapshots": resolve(__dirname, "src/snapshots"),
    },
  },
});
