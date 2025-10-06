import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL FIX: Setting the base forces Rollup to correctly handle absolute paths in the build output.
  base: "./",
  root: "./",
  build: {
    outDir: "dist",
  },
});
