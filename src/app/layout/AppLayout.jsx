import { Outlet } from "react-router-dom";
import {
	DeleteAccount,
	Header,
	Logout,
	MobileMenu,
	SidebarLeft,
} from "../components";
import { useScrollToTop } from "../../hooks";
import { useContext, useState } from "react";
import { ToastContext, UserPreferencesContext } from "../context";
import Toast from "../features/toast/Toast";

const AppLayout = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { toasting } = useContext(ToastContext);
	useScrollToTop();

	const [wantToLogout, setWantToLogout] = useState(false);
	const [wantToDeleteAccount, setWantToDeleteAccount] = useState(false);
	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className=' mx-auto relative app-layout h-full'
		>
			{wantToLogout && (
				<Logout setWantToLogout={setWantToLogout} wantToLogout={wantToLogout} />
			)}

			{wantToDeleteAccount && (
				<DeleteAccount
					wantToDeleteAccount={wantToDeleteAccount}
					setWantToDeleteAccount={setWantToDeleteAccount}
				/>
			)}

			{toasting && (
				<div className="fixed inset-0 z-[1000]">
					<Toast />
				</div>
			)}

			<div className='lg:hidden flex flex-col relative w-full h-full'>
				<Header />
				<MobileMenu />
				<main className='transition-width duration-200 ease min-h-full bg-black'>
					<Outlet />
				</main>
			</div>

			<div className='hidden lg:flex flex-col relative h-full'>
				<Header />
				<SidebarLeft
					setWantToLogout={setWantToLogout}
					setWantToDeleteAccount={setWantToDeleteAccount}
				/>

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
