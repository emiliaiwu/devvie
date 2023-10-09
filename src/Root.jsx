import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className='w-full h-full'>
			<Outlet />
		</div>
	);
};

export default Root;
