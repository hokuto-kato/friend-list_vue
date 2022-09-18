module.exports = {
	content: ['./src/**/*.{vue,js}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))'
			}
		}
	},
	plugins: []
}
