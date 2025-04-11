import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import yaml from '@rollup/plugin-yaml';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			configFile: './tailwind.config.js'
		}),
		sitemap({
			filter: (page) => !page.endsWith('telegram-bot/')
		}),
		robots({
			policy: [
				{
					userAgent: "Yandex",
					allow: ["/"],
					disallow: ["/?*"],
					cleanParam: "calltouch_tm"
				},
				{
					userAgent: ["*"],
					allow: ["/"],
					disallow: ["/?*"],
				},
			],
		}),
		alpinejs(),
		mdx(),
		icon(),
		react(),
	],
	vite: {
		plugins: [yaml()],
		css: {
			preprocessorOptions: {
			  	scss: {
					silenceDeprecations: ['legacy-js-api'],
				},
			},
		},
	},
	site: 'https://site.com',
	base: "/"
});
