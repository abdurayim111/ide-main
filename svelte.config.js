import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { meltPreprocess } from '@melt-ui/svelte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [meltPreprocess(), vitePreprocess()],
    kit: {
        adapter: adapter()
    }
};

export default config;