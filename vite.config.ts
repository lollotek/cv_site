import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
			},
		}),
	],
});
