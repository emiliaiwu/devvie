import { Outlet } from "react-router-dom";
import { Header, SidebarLeft } from "../components";
import { AppLayoutContext } from "../context";
import { useScrollToTop } from "../../hooks";

import { useContext } from "react";

const AppLayout = () => {
	useScrollToTop();
	const { isSidebarOpen} = useContext(AppLayoutContext);

	

	return (
		<div className='max-w-[100vw] min-h-screen h-screen flex flex-col overflow-x-hidden'>
			<Header />
			<SidebarLeft />
			<main className={`${isSidebarOpen ? "lg:pl-[250px]" : "lg:pl-20"} transition-width duration-200 ease  min-h-full bg-black `}>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
