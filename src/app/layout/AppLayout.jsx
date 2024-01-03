import { Outlet } from "react-router-dom";
import {
	DeleteAccount,
	Header,
	Logout,
	MobileMenu,
	SidebarLeft,
} from "../components";
import { useScrollToTop } from "../../hooks";
import { useContext } from "react";
import {
	ToastContext,
	UserPreferencesContext,
	UserProfileContext,
} from "../context";
import Toast from "../features/toast/Toast";

const AppLayout = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { toasting } = useContext(ToastContext);
	const {
		wantToLogout,
		setWantToLogout,
		wantToDeleteAccount,
		setWantToDeleteAccount,
	} = useContext(UserProfileContext);
	useScrollToTop();

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
				<div className='fixed inset-0 z-[1000]'>
					<Toast />
				</div>
			)}

			<div className='lg:hidden flex flex-col relative w-full h-full'>
				<Header />
				<MobileMenu />
				<main
					style={{ backgroundColor: userPreferences.shade.background }}
					className='transition-width duration-200 ease min-h-full '
				>
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
					className='transition-width duration-200 ease h-screen '
				>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AppLayout;
