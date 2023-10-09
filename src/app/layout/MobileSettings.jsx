import { Outlet } from "react-router-dom";
import { useScrollToTop } from "../../hooks";
import { useContext } from "react";
import { UserPreferencesContext} from "../context";
import { BreadCrumb } from "../components";

const MobileSettings = () => {
	useScrollToTop();
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<section
			style={{ backgroundColor: userPreferences.shade.card }}
			className='w-full min-h-screen pt-[80px]'
		>
			<div
				style={{ backgroundColor: userPreferences.shade.card }}
				className='mx-auto h-full'
			>
				<div
					style={{
						borderBottom: `1px solid ${userPreferences.shade.other}`,
					}}
					className='px-7 flex py-6 borber-b'
				>
					<h1 className='text-2xl tracking-tight flex items-center font-medium'>
						<BreadCrumb />
					</h1>
				</div>

				<Outlet />
			</div>
		</section>
	);
};

export default MobileSettings;
