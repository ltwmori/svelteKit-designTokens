import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				// allow the tokens file to be served
				'./style-dictionary/tokens/**/*.json'
			]
		}
	}
});
