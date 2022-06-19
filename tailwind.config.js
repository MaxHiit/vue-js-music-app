module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'gray-dark': '#21272c',
			'gray-darklate': '#24292d',
			white: '#f5f5f5',
			salmon: '#ff6676',
			coral: '#ff7b5d'
		},
		extend: {
			boxShadow: {
				outerShadow: '-8px -8px 30px #393E44, 8px 8px 30px #101316, -1px -1px 60px rgba(#21272c, 0.1)',
				innerShadow:
					'inset -6px -6px 12px rgba(#161616, 0.5), 6px 6px 12px #24292d, inset -1px -1px 60px rgba(#24292d, 0.1)'
			},
			colors: {
				'start-gradient': 'hsl(210deg 11% 14%)',
				'middle-gradient': 'hsl(210deg 11% 14%)',
				'final-gradient': 'hsl(210deg 11% 14%)'
			}
		}
	},
	plugins: []
};
