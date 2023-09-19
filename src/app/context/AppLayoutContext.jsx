import { createContext, useState, useEffect } from "react";

const AppLayoutContext = createContext();

export const AppLayoutProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Function to check if the viewport width is 1024px or above
	// function isViewportWideEnough() {
	// 	return window.innerWidth >= 1024;
	// }

	// // Toggle the sidebar state based on viewport width
	// useEffect(() => {
	// 	setIsSidebarOpen(isViewportWideEnough());
	// 	window.addEventListener("resize", () => {
	// 		setIsSidebarOpen(isViewportWideEnough());
	// 	});
	// 	// Clean up the event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener("resize", () => {
	// 			setIsSidebarOpen(isViewportWideEnough());
	// 		});
	// 	};
	// }, []);

	return (
		<AppLayoutContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
			{children}
		</AppLayoutContext.Provider>
	);
};

export default AppLayoutContext;
