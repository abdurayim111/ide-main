import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp'; // <-- Правильный импорт

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // <-- Правильный порядок и обертка sequence
    preprocess: sequence([
        vitePreprocess(),
        preprocessMeltUI()
    ]),
    kit: {
        adapter: adapter()
    }
};

export default config;
