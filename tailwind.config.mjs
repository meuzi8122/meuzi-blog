/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
		/* 静的コンポーネントスタイルを適用（TailwindCss標準） */
		function ({ addComponents }) {
			addComponents({
			  ".container": {
				maxWidth: "90%",
				"@screen sm": {
				  maxWidth: "600px",
				},
				"@screen md": {
				  maxWidth: "700px",
				},
				"@screen lg": {
				  maxWidth: "900px",
				},
				"@screen xl": {
				  maxWidth: "1200px",
				},
			  },
			});
		  },
	],
	daisyui: {
	  themes: ["sunset"],
	},
}
