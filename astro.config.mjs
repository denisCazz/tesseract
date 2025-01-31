import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    site: 'https://deniscazz.github.io/tesseract',
  },
})