import { AppLayoutContext } from "../context";
import { useContext } from "react";

const HamburgerMenu = () => {
	const { setIsSidebarOpen, isSidebarOpen } = useContext(AppLayoutContext);

	return (
		<button
			onClick={() => setIsSidebarOpen((prev) => !prev)}
			className={`${isSidebarOpen ? "active" : ""} hamburger-menu`}
		>
			<div className='bar'></div>
			<div className='bar'></div>
			<div className='bar'></div>
		</button>
	);
};

export default HamburgerMenu;
