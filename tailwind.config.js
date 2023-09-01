/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ["DM Sans", "sans-serif"],
				Inter: ["Kanit", "sans-serif"],
			},
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				landingPrimary: "#B6FF9C",
				landingGrey: "#1A1A1A",
				landingGreyText: "#b6b6b6",
				authButtonColor: "rgb(11,138,25)",
			},
		},
	},
	plugins: [],
};

