import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.md"], // include Markdown files in the build
  plugins: [react()],
})
