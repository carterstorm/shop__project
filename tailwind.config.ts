import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				brakeAndReverse: "brakeAndReverse 0.5s ease-in-out",
			},
			keyframes: {
				brakeAndReverse: {
					"0%": { transform: "translateY(-56px)" },
					"50%": { transform: "translateY(4px)" },
					"100%": { transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
// eslint-disable-next-line import/no-default-export
export default config;
