import { Link, Outlet } from "react-router-dom";
import { settingsList } from "../../data/db";
import { useScrollToTop } from "../../../hooks";

const Settings = () => {
	useScrollToTop();
	return (
		<section className='w-full h-full  lg:py-7 lg:px-6  bg-[#14151A] rounded-xl'>
			<div className='container mx-auto h-full'>
				<h1 className='text-2xl font-DMSans tracking-tight mb-3 text-white'>
					Account Settings
				</h1>
				<div className=' bg-[#060408] rounded-2xl h-full py-10 flex flex-col lg:flex-row'>
					<div className='px-8 border-red-50 border-r w-1/4 h-full border-opacity-10'>
						<ul>
							{settingsList.map((menu) => (
								<li
									key={menu.title}
									className={`cursor-pointer mb-6 ${
										menu.spacing &&
										"mt-10 border-t border-gray-500 border-opacity-30 pt-4"
									}`}
								>
									<Link
										to={menu.url}
										className={`text-white ${
											menu.spacing && "text-red-400"
										} flex items-center gap-5`}
									>
										<span>{<menu.icon className='w-5 h-5' />}</span>
										<span className='text-sm font-DMSans'>{menu.title}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='px-10'>
						<Outlet />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Settings;
