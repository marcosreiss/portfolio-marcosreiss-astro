import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://hmarcosvinireiss.vercel.app",

  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
