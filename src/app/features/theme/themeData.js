const generateTheme = (theme) => {
	const lightShades = {
		shade1: {
			background: "#ffffff",
			text: "#000000",
		},
		shade2: {
			background: "#f2f2f2",
			text: "#333333",
		},
		shade3: {
			background: "#e5e5e5",
			text: "#444444",
		},
	};

	const darkShades = {
		black: {
			background: "#060408",
			card: "#14151A",
			text: "#ffffff",
			other: "#28282E",
		},
		dark: {
			background: "#242424",
			card: "#313131",
			text: "#ffffff",
			other: "#707070",
		},
		darker: {
			background: "#0C0D10",
			card: "#252731",
			text: "#ffffff",
			other: "#3A3D44",
		},
		darkBlue: {
			background: "10141F",
			card: "#161B32",
			text: "#ffffff",
			other: "#2D334A",
		},
	};

	const shades = theme.mode === "light" ? lightShades : darkShades;

	return {
		...shades[theme.shade],
		primary: theme.accentColor,
	};
};

// accent color:
export const accentColors = [
	#FF5733,
	#33FF57,
	"#4058F2",
	"#EABE10",
	"#EA1093",
	"#3910EA",
	"#3F8FF7",
	"#004AFB",
	"#EA1975",
	"#38FFD4",
	"#EA9E10",
	"#02B0FE",
	"#FE54FE",
	"#45E2D2",
	"#0808FF",
	"#FFA5FF",
	"#FF00FE",
	"#F6DAB0",
];
