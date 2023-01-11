// prettier-ignore
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			screens: {
				usm: '400px',
			},
			spacing: {
				'80px': '80px',
				'100': '100px',
				'200': '200px',
				'300': '300px',
				'400': '400px',
				'500': '500px',
				'530': '530px',
				'600': '600px',
				'620': '620px',
				'700': '700px',
				'800': '800px'
			},
		},
	},
	plugins: [],
};
