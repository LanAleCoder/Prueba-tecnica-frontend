import { defineConfig, passthroughImageService } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  output: "server",
  adapter: vercel(),
});
