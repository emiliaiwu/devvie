import { Outlet } from "react-router-dom";
import {
	Header,
	MobileMenu,
	SidebarLeft,
} from "../components";
import { useScrollToTop } from "../../hooks";
import { useContext } from "react";
import { UserPreferencesContext } from "../context";

const AppLayout = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	useScrollToTop();

	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className=' mx-auto relative app-layout h-full'
		>
			<div className='lg:hidden flex flex-col relative w-full h-full'>
				<Header />
				<MobileMenu />
				<main className='transition-width duration-200 ease min-h-full bg-black'>
					<Outlet />
				</main>
			</div>

			<div className='hidden lg:flex flex-col relative h-full'>
				<Header/>
				<SidebarLeft />

				<main
					style={{ backgroundColor: userPreferences.shade.background }}
					className='transition-width duration-200 ease bg-black h-screen '
				>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AppLayout;
