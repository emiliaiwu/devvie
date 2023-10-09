import {  Outlet } from "react-router-dom";
import { useScrollToTop } from "../../hooks"
import { Header } from "../components";
import { useContext } from "react";
import { UserPreferencesContext, AppContext } from "../context";
import { settingsList } from "../data/db";
import { NavLink } from "react-router-dom";

const Settings = () => {
	useScrollToTop();
	const { isSidebarOpen } = useContext(AppContext);
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<section
			style={{ backgroundColor: userPreferences.shade.background }}
			className='w-full md:pl-20 min-h-screen mt-[70px] md:mt-0'
		>
			<div
				style={{ backgroundColor: userPreferences.shade.background }}
				className='mx-auto h-full'
			>
				<div
					style={{ backgroundColor: userPreferences.shade.background }}
					className='flex flex-col lg:flex-row justify-between h-full'
				>
					{/* sidebar links */}
					<div
						style={{ backgroundColor: userPreferences.shade.card }}
						className={`${
							isSidebarOpen ? "md:w-60 md:opacity-100" : "md:w-0 md:opacity-0"
						} flex flex-col border-opacity-40 pb-5 min-h-screen md:h-screen md:fixed md:left-[80px] md:right-0 bg-black transition-width duration-500 ease shadow-md`}
					>
						<div className=' h-[70px] px-7 flex pt-2'>
							<h1
								style={{
									color: userPreferences.shade.text.primaryText,
									fontFamily: userPreferences.font.fontFamily,
								}}
								className='text-2xl tracking-tight flex items-center font-medium'
							>
								Settings
							</h1>
						</div>

						<div className='flex-1 pl-8 scroll md:overflow-y-scroll md:pt-8 pt-5 '>
							<ul className='flex flex-col justify-between gap-6'>
								{Object.keys(settingsList).map((sectionName, index) => (
									<li key={index}>
										<h2
											style={{
												color: userPreferences.shade.text.secondaryText,
												fontFamily: userPreferences.font.fontFamily,
											}}
											className='uppercase text-sm md:text-xs font-semibold tracking-wider mb-2'
										>
											{sectionName}
										</h2>
										<ul>
											{settingsList[sectionName].map((menu) => (
												<li
													key={menu.title}
													className={`cursor-pointer mb-2 h-8 flex flex-row px-3 hover:bg-${userPreferences.color} hover-color`}
												>
													<NavLink
														style={({ isActive }) => ({
															fontFamily: userPreferences.font.fontFamily,
															"--hover-color": userPreferences.color,
															color: isActive
																? userPreferences.color
																: userPreferences.shade.text.primaryText,
														})}
														to={menu.url}
														className={`flex items-center`}
													>
														<div
															className={`flex hover:text-[--hover-color] items-center gap-4`}
														>
															<span>{<menu.icon className='w-5 h-5' />}</span>
															<span className=' text-sm whitespace-nowrap'>
																{menu.title}
															</span>
														</div>
													</NavLink>
												</li>
											))}
										</ul>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div
						style={{ backgroundColor: userPreferences.shade.background }}
						className={`${
							isSidebarOpen ? "md:ml-60 " : "md:ml-0"
						} flex-1 hidden md:flex flex-col gap-10 relative w-full transition-width duration-500 ease ml-0`}
					>
						<div className='right-0 left-0 relative z-1 hidden lg:flex'>
							<Header />
						</div>
						<div className='mt-20'>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Settings;