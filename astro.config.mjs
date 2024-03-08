import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap(), partytown()],
  site: 'https://kauderwelsch.vercel.app',
  output: "server",
  adapter: vercel(),
  prefetch: true
});