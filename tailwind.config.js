/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: { max: '640px' },
				md: { max: '768px' },
				lgsm: { max: '860px' },
				lg: { max: '1024px' },
				xl: { max: '1280px' },
				xl2: { max: '1440px' },
				mon: { max: '1830px' },
			},
		},
	},
	plugins: [],
}
