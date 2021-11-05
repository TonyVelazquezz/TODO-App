module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			background: '#3C4271',
			dark_background: '#292D4F',
			primary_color: '#353856',
			secondary_color: '#646BA0',
			text_color: '#CFCFCF',
			text_color_blue: '#37A7FF',
			red_color: '#F55050',
			green_color: '#5FFD5C',
		},
		extend: {
			zIndex: {
				'-10': '-10',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
