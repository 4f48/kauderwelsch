import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap()],
  site: 'https://kauderwelsch.vercel.app',
  output: "server",
  adapter: vercel()
});