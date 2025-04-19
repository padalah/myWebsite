// This is a simplified configuration for GitHub Pages deployment
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This file is used only for GitHub Pages deployment
export default defineConfig({
  // Essential for GitHub Pages hosting at /myWebsite/
  base: '/myWebsite/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});