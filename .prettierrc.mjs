// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	singleQuote: true,
	jsxSingleQuote: false,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
