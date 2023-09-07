import { useContext } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Button from "../Button";
import { MobileMenuContext } from "../../context";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
	const { isMobileMenuOpen } = useContext(MobileMenuContext);

	return (
		<div className='lg:hidden'>
			<HamburgerMenu />
			<nav
				className={`absolute w-full left-0 bg-landingGrey pt-36 px-6 flex flex-col justify-between pb-4 transition-all duration-500 ease z-[-1]   ${
					isMobileMenuOpen ? "h-screen top-0" : "h-0 top-[-1000px]"
				}`}
			>
				<ul className='flex flex-col gap-8 p-1'>
					<NavLinks className={"text-2xl inline"} />
				</ul>

				<Button
					url={"signup"}
					text={"Get Started For Free"}
					className={" text-black bg-landingPrimary block"}
				/>
			</nav>
		</div>
	);
};

export default MobileMenu;
