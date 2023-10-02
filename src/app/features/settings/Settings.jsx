import { Link, Outlet } from "react-router-dom";
import { settingsList } from "../../data/db";
import { useScrollToTop } from "../../../hooks";
import { Header } from "../../components";
import { useContext } from "react";
import { UserPreferencesContext } from "../../context";

const Settings = () => {
	useScrollToTop();

	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<section className='w-full pl-20 h-full'>
			<div className='mx-auto h-full'>
				<div className='flex flex-col lg:flex-row justify-between'>
					{/* sidebar links */}
					<div style={{backgroundColor: userPreferences.shade.card}} className='flex flex-col border-opacity-40 pb-5 w-60 h-screen fixed left-[80px] right-0 bg-black'>
						<div  className='mb-6 h-[70px] px-7 flex pt-2'>
							<h1 className='text-2xl font-DMSans tracking-tight text-white flex items-center'>
								Settings
							</h1>
						</div>

						<div className='flex-1 px-7 scroll overflow-y-scroll '>
							<ul className='flex flex-col justify-between gap-8'>
								{Object.keys(settingsList).map((sectionName, index) => (
									<li key={index}>
										<h2 className='text-[#474747] uppercase text-xs font-semibold font-DMSans tracking-wider mb-4'>
											{sectionName}
										</h2>
										<ul>
											{settingsList[sectionName].map((menu) => (
												<li key={menu.title} className={`cursor-pointer mb-4`}>
													<Link
														to={menu.url}
														className={`text-offwhite ${
															menu.spacing && "text-red-400"
														} flex items-center gap-4`}
													>
														<span>{<menu.icon className='w-5 h-5' />}</span>
														<span className='text-sm font-DMSans'>
															{menu.title}
														</span>
													</Link>
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
						className='flex-1 flex flex-col gap-10 ml-60 relative w-full'
					>
						<div
							className='right-0 left-0 relative z-1'
						>
							<Header color={userPreferences.shade.background} />
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
