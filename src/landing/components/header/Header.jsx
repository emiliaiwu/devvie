import Logo from "../Logo";
import { styles } from "../../../style/reusableStyles";
import Button from "../Button";
import MobileMenu from "./MobileMenu";

import NavLinks from "./NavLinks";

const Header = () => {
	const { container, flexCenter, flexBetween } = styles;

	return (
		<header className={` ${flexCenter} fixed w-full bg-white z-[1000] top-0 left-0`}>
			<div
				className={`${container} px-4 sm:px-6 h-[60px] md:h-[80px] flex items-center w-full relative`}
			>
				<div className='flex justify-between items-center w-full '>
					<Logo />
					<nav className='hidden lg:flex'>
						<ul className='flex gap-6'>
							<NavLinks />
						</ul>
					</nav>
					<div className={`${flexBetween} gap-4 hidden md:flex`}>
						<Button
							url={"signin"}
							text={"Log in"}
							className={" text-white bg-landingGrey"}
						/>
						<Button
							url={"signup"}
							text={"Get Started"}
							className={" text-black bg-landingPrimary"}
						/>
					</div>

					
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;
