import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $assets: path.resolve("src/assets"),
      $components: path.resolve("src/components"),
      $constants: path.resolve("src/constants"),
      $client: path.resolve("src/pages/client"),
      $admin: path.resolve("src/pages/admin"),
      $router: path.resolve("src/router"),
      $services: path.resolve("src/services"),
      $store: path.resolve("src/store"),
      $types: path.resolve("src/types"),
      $utils: path.resolve("src/utils"),
    },
  },
});
