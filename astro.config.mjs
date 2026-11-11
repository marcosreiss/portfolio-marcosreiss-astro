import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://marcosvinireiss.vercel.app",

  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: "static",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith("/admin"),
    }),
  ],
});
