import Logo from "../Logo";
import { styles } from "../../../style/reusableStyles";
import Button from "../Button";
import MobileMenu from "./MobileMenu";

import NavLinks from "./NavLinks";

const Header = () => {
	const { container, flexCenter, flexBetween } = styles;

	return (
		<header className={`bg-black ${flexCenter} z-20 relative`}>
			<div className={`${container} px-6 py-6 bg-black`}>
				<div className='flex justify-between items-center bg-black '>
					<Logo />
					<nav className='hidden lg:flex'>
						<ul className='flex gap-6'>
							<NavLinks />
						</ul>
					</nav>
					<div className={`${flexBetween} gap-4 hidden lg:flex`}>
						<Button
							url={"login"}
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
					{/* <Button
						url={"login"}
						text={"Log in"}
						className={
							" text-white bg-landingGrey absolute sm:hidden bottom-2 right-2 z-[-2]"
						}
					/> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
