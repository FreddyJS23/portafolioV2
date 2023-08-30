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
	daisyui:{
		themes:[
			{myTheme:{
				"primary": "#22D1EE",
				"secondary": "#3D5AF1", 
				"accent": "#1fb2a6",
				"neutral": "#2a323c",
				"base-100": "#1d232a", 
				"info": "#3abff8", 
				"success": "#36d399", 
				"warning": "#fbbd23",	 
				"error": "#f87272",
	},
},
"dark","cupcake","night"
]
},
	plugins: [require("daisyui"),require('tailwindcss-animated')],
}

// content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],