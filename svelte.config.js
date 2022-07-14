import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		}),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
