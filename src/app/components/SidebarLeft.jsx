import { devvieboard } from "../../assets";
import { menuLeftBottom, menuLeftTop, menuLeftMiddle } from "../data/db";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserPreferencesContext } from "../context";

const SidebarLeft = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	

	return (
		<nav
			style={{ backgroundColor: userPreferences.shade.background }}
			className='z-20 w-20 h-screen fixed px-3 py-2 top-0 lg:flex flex-col left-0 hidden shadow-md'
		>
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
				<ul className='flex flex-col items-center gap-1 px-2'>
					{menuLeftTop.map((menu, index) => (
						<li
							style={{ "--hover-color": userPreferences.color }}
							key={index}
							className={`h-10 font-DMSans flex items-center justify-center relative group w-full ${userPreferences.border} transition-all duration-200 ease`}
						>
							<NavLink
								to={menu.url}
								style={({ isActive }) => {
									return {
										backgroundColor: isActive
											? userPreferences.shade.other
											: "",
									};
								}}
								className={` flex group items-center justify-center h-full w-full rounded-xl
									
								`}
							>
								<div
									style={{ color: userPreferences.shade.text.primaryText }}
									className={`flex justify-center items-center h-full hover:opacity-50 w-full `}
								>
									{<menu.icon className='w-5 h-6' />}
								</div>

								{/* TOOLTIP */}
								<div
									style={{
										"--tooltip-color": userPreferences.shade.other,
										color: userPreferences.shade.text.primaryText,
									}}
									className='hidden group-hover:block absolute sidebar-tooltip 
										left-12 p-2 bg-blue-500 bg-[--tooltip-color] font-medium text-xs rounded'
								>
									{menu.title}
								</div>
							</NavLink>
						</li>
					))}
				</ul>
				<ul className='flex flex-col gap-1 px-2'>
					{menuLeftMiddle.map((menu, index) => (
						<li
							style={{ "--hover-color": userPreferences.color }}
							key={index}
							className={`h-10 font-DMSans flex items-center justify-center relative group w-full ${userPreferences.border} transition-all duration-200 ease`}
						>
							<NavLink
								to={menu.url}
								style={({ isActive }) => {
									return {
										backgroundColor: isActive
											? userPreferences.shade.other
											: "",
									};
								}}
								className={` flex group items-center justify-center h-full w-full rounded-xl
									
								`}
							>
								<div
									style={{ color: userPreferences.shade.text.primaryText }}
									className={`flex justify-center items-center h-full hover:opacity-50 w-full `}
								>
									{<menu.icon className='w-5 h-6' />}
								</div>

								{/* TOOLTIP */}
								<div
									style={{
										"--tooltip-color": userPreferences.shade.other,
										color: userPreferences.shade.text.primaryText,
									}}
									className='hidden group-hover:block absolute sidebar-tooltip 
										left-12 p-2 bg-blue-500 bg-[--tooltip-color] font-medium text-xs rounded'
								>
									{menu.title}
								</div>
							</NavLink>
						</li>
					))}
				</ul>
				<ul className='flex flex-col gap-1 px-2'>
					{menuLeftBottom.map((menu, index) => (
						<li
							style={{ "--hover-color": userPreferences.color }}
							key={index}
							className={`h-10 font-DMSans flex items-center justify-center relative group w-full ${userPreferences.border} transition-all duration-200 ease`}
						>
							<NavLink
								to={menu.url}
								style={({ isActive }) => {
									return {
										backgroundColor: isActive
											? userPreferences.shade.other
											: "",
									};
								}}
								className={` flex group items-center justify-center h-full w-full rounded-xl
									
								`}
							>
								<div
									style={{ color: userPreferences.shade.text.primaryText }}
									className={`flex justify-center items-center h-full hover:opacity-50 w-full `}
								>
									{<menu.icon className='w-5 h-6' />}
								</div>

								{/* TOOLTIP */}
								<div
									style={{
										"--tooltip-color": userPreferences.shade.other,
										color: userPreferences.shade.text.primaryText,
									}}
									className='hidden group-hover:block absolute sidebar-tooltip 
										left-12 p-2 bg-blue-500 bg-[--tooltip-color] font-medium text-xs rounded'
								>
									{menu.title}
								</div>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default SidebarLeft;
