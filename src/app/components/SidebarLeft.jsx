import { devvieboard } from "../../assets";
import { menuLeftBottom, menuLeftTop, menuLeftMiddle } from "../data/db";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserPreferencesContext } from "../context";

const SidebarLeft = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<nav style={{backgroundColor: userPreferences.shade.background}} className='w-20 h-screen fixed px-3 py-2 top-0 lg:flex flex-col left-0 hidden'>
			<header className='flex items-center relative h-16 py-5'>
				<div className='flex justify-center items-center min-w-[55px] '>
					<img
						src={devvieboard}
						alt='logo'
						className='object-contain transition-none max-w-[30px]'
					/>
				</div>
			</header>

			<div className='flex-1 flex flex-col justify-between mt-4 gap-7 pb-4'>
				<ul className='flex flex-col gap-1'>
					{menuLeftTop.map((menu, index) => (
						<li
							key={index}
							className='h-10 font-DMSans flex items-center justify-center relative group'
						>
							<Link to={menu.url} className='flex items-center h-full w-full'>
								<div className=' text-white flex justify-center items-center h-full min-w-[55px]'>
									{<menu.icon className='w-6 h-6' />}
								</div>

								{/* TOOLTIP */}
								<div
									className='hidden group-hover:block absolute sidebar-tooltip 
										left-12 p-2 bg-blue-500 text-white text-xs rounded'
								>
									{menu.title}
								</div>
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex flex-col gap-1'>
					{menuLeftMiddle.map((menu, index) => (
						<li
							key={index}
							className='h-10 font-DMSans flex items-center  justify-center relative group'
						>
							<Link to={menu.url} className='flex items-center h-full w-full'>
								<div className=' text-white flex justify-center items-center h-full min-w-[55px]'>
									{<menu.icon className='w-6 h-6' />}
								</div>

								{/* TOOLTIP */}

								<div
									className='hidden group-hover:block absolute sidebar-tooltip 
										left-12 p-2 bg-blue-500 text-white text-xs rounded'
								>
									{menu.title}
								</div>
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex flex-col gap-1'>
					{menuLeftBottom.map((menu, index) => (
						<li
							key={index}
							className='h-10 font-DMSans flex items-center justify-center  relative group'
						>
							<Link to={menu.url} className='flex items-center h-full w-full'>
								<div className=' text-white flex justify-center items-center h-full min-w-[55px]'>
									{<menu.icon className='w-6 h-6' />}
								</div>

								{/* TOOLTIP */}
								<div
									className='hidden group-hover:block absolute sidebar-tooltip 
										left-12 p-2 bg-blue-500 text-white text-xs rounded'
								>
									{menu.title}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default SidebarLeft;
