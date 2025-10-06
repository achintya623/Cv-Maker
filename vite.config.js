import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL FIX FOR VERCEL:
  // Explicitly set the root directory to the current working directory.
  // This tells Rollup/Vite to resolve imports like './src/main.jsx' correctly
  // relative to the base of the project where index.html resides.
  root: "./",
  build: {
    // Ensure the output directory is 'dist' (Vite's default)
    outDir: "dist",
  },
});
