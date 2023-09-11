/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ["DM Sans", "sans-serif"],
				Kanit: ["Kanit", "sans-serif"],
				Syne: ["Syne", "sans-serif"],
			},
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				blue: "#0000FF",
				offwhite: "#dcdcdc",
				landingPrimary: "#B6FF9C",
				landingGrey: "#1A1A1A",
				landingGreyText: "#b6b6b6",
				authButtonColor: "rgb(11,138,25)",
			},
		},
		screens: {
			xs: "320px",
			ss: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1440px",
		},
	},
	plugins: [],
};

