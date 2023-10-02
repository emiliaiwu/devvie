import { Outlet } from "react-router-dom";
import { AppLayoutProvider } from "./app/context";

const Root = () => {
	return (
		<AppLayoutProvider>
			<div className='max-w-[100vw] min-h-screen lg:max-h-screen h-screen'>
				<Outlet />
			</div>
		</AppLayoutProvider>
	);
};

export default Root;
