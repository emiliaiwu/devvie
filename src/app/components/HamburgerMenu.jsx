import { AppContext } from "../context";
import { useContext } from "react";

const HamburgerMenu = () => {
	const { setIsMenuOpen, isMenuOpen } = useContext(AppContext);

	return (
		<button
			onClick={() => setIsMenuOpen((prev) => !prev)}
			className={`${isMenuOpen ? "active" : ""} hamburger-menu`}
		>
			<div className='bar'></div>
			<div className='bar'></div>
			<div className='bar'></div>
		</button>
	);
};

export default HamburgerMenu;
