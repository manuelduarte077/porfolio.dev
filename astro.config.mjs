import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/config";

import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configPath: "./tailwind.config.js",
    }),
    sitemap(),
    robotsTxt(),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: SITE_URL,
});
