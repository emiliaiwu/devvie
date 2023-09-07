import { useContext } from "react";
import { MobileMenuContext } from "../../context";

const HamburgerMenu = () => {
	const { toggleMobileMenu, isMobileMenuOpen } = useContext(MobileMenuContext);

	return (
		<button
			className={`${isMobileMenuOpen ? "active" : ""} hamburger-menu`}
			onClick={toggleMobileMenu}
		>
			<div className='bar'></div>
			<div className='bar'></div>
			<div className='bar'></div>
		</button>
	);
};

export default HamburgerMenu;
