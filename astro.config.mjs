import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://olegiscrazy.github.io',
    integrations: [tailwind()],
    server: {
        port: 3000,
    },
    // astro preferences disable devToolbar
});