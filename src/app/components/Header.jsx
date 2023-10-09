import { img6 } from "../../assets";
import HamburgerMenu from "./HamburgerMenu";
import { useContext } from "react";
import { AppContext, UserPreferencesContext } from "../context";
import { ArrowRight } from "../data/icon";

const Header = () => {
	const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<header
			style={{ backgroundColor: userPreferences.shade.background }}
			className={`${
				isSidebarOpen ? "lg:left-[320px]" : "lg:left-20"
			} h-[70px] py-3 px-5 fixed top-0 right-0 left-0  z-50 md:h-[80px] md:py-5 transition-all duration-500 ease flex items-center`}
		>
			<div className='flex justify-between items-center w-full'>
				<div className='lg:hidden'>
					<HamburgerMenu />
				</div>

				<div className='hidden lg:block bg-white rounded-full'>
					<ArrowRight
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						style={{ color: userPreferences.color }}
						className={`${
							isSidebarOpen ? "rotate-[360]" : "rotate-180"
						} cursor-pointer w-8 h-8 absolute -left-4 top-6 transition-all duration-200 ease `}
					/>
				</div>

				<div className=''>
					<img src={img6} className='max-w-[40px] rounded-full' />
				</div>
			</div>
		</header>
	);
};

export default Header;
