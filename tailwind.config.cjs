/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				Quicksand:['Quicksand','cursive'],
				PermanentMarker:['PermanentMarker','cursive']
			},
			
		},
	},
	plugins: [require("daisyui")],
}

// content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],