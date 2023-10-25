import { Outlet } from "react-router-dom";
import { Header, MobileMenu, SidebarLeft } from "../components";
import { useScrollToTop } from "../../hooks";


const AppLayout = () => {
	useScrollToTop();

	return (
		<div className='h-full mx-auto relative app-layout '>
			<div className='lg:hidden flex flex-col relative w-full h-full'>
				<Header />
				<MobileMenu />
				<main className='transition-width duration-200 ease min-h-full bg-black'>
					<Outlet />
				</main>
			</div>

			<div className='hidden lg:flex flex-col relative h-full'>
				<Header />
				<SidebarLeft />
				
				<main className='transition-width duration-200 ease min-h-full bg-black '>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AppLayout;
