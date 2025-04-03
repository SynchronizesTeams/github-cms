import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    	allowedHosts: [
      		'b703-2404-e100-5-1d07-dd31-b44a-674d-3887.ngrok-free.app'
    	],
  	},
});
