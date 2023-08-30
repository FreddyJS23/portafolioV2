/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			fontFamily:{
				Quicksand:['Quicksand','cursive'],
				PermanentMarker:['PermanentMarker','cursive']
			},
		colors:{
			'text-primary':'#93DEFF',
			'text-secondary':'#3D5AF1'
			
		}
		},
	},
	plugins: [require("daisyui"),require('tailwindcss-animated')],
}

// content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],