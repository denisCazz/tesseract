import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  base: "/tesseract/",
  build: {
    site: 'https://deniscazz.github.io/tesseract',
  },
})