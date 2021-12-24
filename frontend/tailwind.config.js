const { urlObjectKeys } = require('next/dist/shared/lib/utils')

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '2rem',
				},
			},
			colors: {
				'dark-blue': '#12232E',
				'lighter-blue': '#007CC7',
				'lightest-blue': '#4DA8DA',
				'shadow-of-dark': '#203647',
				'shadow-of-light': '#EEFBFB',
			},
			backgroundImage: {
				'hero-image': "url('/images/hero_image.jpg')",
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
