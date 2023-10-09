import { createContext, useContext, useState, useEffect } from "react";
import { accentColors, borderRadiusOptions, fontOptions } from "./themeData";
import { lightShades, darkShades } from "./themeData";
import { UserPreferencesContext } from "../../context";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const {
		userPreferences,
		selectedDarkShade,
		selectedLightShade,
		selectedShade,
		setSelectedDarkShade,
		setSelectedLightShade,
		mode,
		setMode,
		fontNames,
		setNewUserPreferences,
		newUserPreferences,
		isHovered,
		setIsHovered,
		loading,
		setLoading,
		isUpdating,
		isUpdated,
		setIsUpdated,
		hoverColor
	} = useContext(UserPreferencesContext);

	const lightShade = {
		...lightShades.DayScript,
		name: "DayScript",
	};

	const darkShade = {
		...darkShades.DarkCoder,
		name: "DarkCoder",
	};


	

	// Hover
	const handleMouseEnter = (event) => {
		event.target.style.backgroundColor = newUserPreferences.shade.background;
	};

	const handleMouseLeave = (event) => {
		event.target.style.backgroundColor = "transparent";
	};

	// theme
	const [isLightMode, setIsLightMode] = useState(false);

	const shades = isLightMode ? lightShades : darkShades;

	const handleLightShade = (shadeName) => {
		setSelectedLightShade(shadeName);
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			shade: {
				...lightShades[shadeName],
				name: shadeName,
			},
		}));
		setIsUpdated(false);
	};

	const handleDarkShade = (shadeName) => {
		setSelectedDarkShade(shadeName);
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			shade: {
				...darkShades[shadeName],
				name: shadeName,
			},
		}));
		setIsUpdated(false);
	};

	const toggleMode = () => {
		setIsLightMode(!isLightMode);
		setMode(isLightMode ? "light" : "dark");
	};

	const handleLightMode = () => {
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			mode: "light",
			shade: lightShade,
		}));
		setIsUpdated(false);
	};

	const handleDarkMode = () => {
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			mode: "dark",
			shade: darkShade,
		}));
		setIsUpdated(false);
	};

	// border
	const handleBorderClick = (borderStyle) => {
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			border: borderStyle,
		}));
		setIsUpdated(false);
	};

	// color
	const handleColorChange = (color) => {
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			color: color,
		}));
		setIsUpdated(false);
	};

	// font
	const [isOpen, setIsOpen] = useState(false);

	// font dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setIsUpdated(false);
	};

	const handleFontClick = (font, index) => {
		setIsOpen(false);
		setNewUserPreferences((prevUserPreferences) => ({
			...prevUserPreferences,
			font: { fontFamily: font, fontName: fontNames[index] },
		}));
		setIsUpdated(false);
	};

	return (
		<ThemeContext.Provider
			value={{
				isOpen,
				setIsOpen,
				isLightMode,
				setIsLightMode,
				handleColorChange,
				accentColors,
				borderRadiusOptions,
				handleBorderClick,
				handleFontClick,
				toggleDropdown,
				fontOptions,
				fontNames,
				toggleMode,
				mode,
				selectedShade,
				shades,
				handleLightMode,
				handleDarkMode,
				selectedLightShade,
				selectedDarkShade,
				lightShades,
				darkShades,
				handleLightShade,
				handleDarkShade,
				userPreferences,
				newUserPreferences,
				isHovered,
				setIsHovered,
				handleMouseEnter,
				handleMouseLeave,
				loading,
				setLoading,
				isUpdating,
				isUpdated,
				setIsUpdated,
				hoverColor,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
