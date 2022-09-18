import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
	console.log('** mode **', mode)
	return {
		base: './',
		root: 'src',
		server: {
			open: true,
			host: true
		},
		css: {
			devSourcemap: true
		},
		build: {
			outDir: '../docs',
			emptyOutDir: true,
			sourcemap: mode === 'develop',
			minify: mode === 'production' ? 'terser' : false,
			rollupOptions: {
				output: {
					chunkFileNames: 'js/app.[hash].js',
					entryFileNames: 'js/app.[hash].js',
					assetFileNames: ({ name }) => {
						if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
							return 'img/[name].[hash][extname]'
						}
						if (/\.css$/.test(name ?? '')) {
							return 'css/app.[hash][extname]'
						}
						return 'assets/[name].[hash][extname]'
					}
				}
			}
		},
		plugins: [vue()]
	}
})
