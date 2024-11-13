import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    dedupe: ["react", "react-dom"],
    preserveSymlinks: true,
    mainFields: ["module", "main"],
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
})

  
  

