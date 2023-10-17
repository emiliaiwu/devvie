import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className='max-w-full w-screen h-full overflow-x-hidden box-border'>
			<Outlet />
		</div>
	);
};

export default Root;
