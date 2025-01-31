import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://deniscazz.github.io/tesseract',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  base: "/tesseract/",
  build: {
    site: 'https://deniscazz.github.io/tesseract',
  },
  
})