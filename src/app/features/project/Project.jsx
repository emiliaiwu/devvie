import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AppContext, UserPreferencesContext } from "../../context";
import {
	mainProjects,
	finishedProjects,
	allProjects,
} from "../../data/projectData";
import ProjectBoard from "./ProjectBoard";

const Project = () => {
	const { isSidebarOpen } = useContext(AppContext);
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<section
			style={{ backgroundColor: userPreferences.shade.background }}
			className='w-screen md:pl-20 min-h-screen mt-[70px] md:mt-0'
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
						<div className='h-[70px] px-7 flex pt-3'>
							<h1
								style={{
									color: userPreferences.shade.text.primaryText,
									fontFamily: userPreferences.font.fontFamily,
								}}
								className='text-2xl tracking-tight flex items-center font-medium'
							>
								Projects
							</h1>
						</div>

						<div className='flex-1 pl-8 scroll md:overflow-y-scroll pt-5 flex flex-col justify-between'>
							<div className='mb-8'>
								<h2
									style={{
										color: userPreferences.shade.text.primaryText,
										fontFamily: userPreferences.font.fontFamily,
									}}
									className='uppercase text-xs md:text-xs font-semibold tracking-wider mb-4'
								>
									Main Projects
								</h2>

								<ul
									style={{
										fontFamily: userPreferences.font.fontFamily,
									}}
									className='flex flex-col gap-3'
								>
									{mainProjects.map((main, index) => (
										<li
											key={index}
											className={`cursor-pointer flex px-3 hover:bg-${userPreferences.color} hover-color`}
										>
											<NavLink
												style={({ isActive }) => ({
													fontFamily: userPreferences.font.fontFamily,
													"--hover-color": userPreferences.color,
													color: isActive
														? userPreferences.color
														: userPreferences.shade.text.secondaryText,
												})}
												to={main.url}
												className={`flex items-center text-[13px]`}
											>
												<span
													className={`flex hover:text-[--hover-color] items-center gap-4`}
												>
													{main.projectName}
												</span>
											</NavLink>
										</li>
									))}
								</ul>
							</div>

							{/* ALL PROJECTS */}
							<div className='mb-8'>
								<h2
									style={{
										color: userPreferences.shade.text.primaryText,
										fontFamily: userPreferences.font.fontFamily,
									}}
									className='uppercase text-xs md:text-xs font-semibold tracking-wider mb-4'
								>
									All Projects
								</h2>

								<ul
									style={{
										fontFamily: userPreferences.font.fontFamily,
									}}
									className='flex flex-col gap-4'
								>
									{allProjects.map((all, index) => (
										<li
											key={index}
											className={`cursor-pointer flex  px-3 hover-color`}
										>
											<NavLink
												style={({ isActive }) => ({
													fontFamily: userPreferences.font.fontFamily,
													"--hover-color": userPreferences.color,
													color: isActive
														? userPreferences.color
														: userPreferences.shade.text.secondaryText,
												})}
												className={`flex items-center text-[13px]`}
												to={all.url}
											>
												<span
													className={`flex hover:text-[--hover-color] items-center gap-4`}
												>
													{all.projectName}
												</span>
											</NavLink>
										</li>
									))}
								</ul>
							</div>

							{/* Finished PROJECTS */}
							<div className='mb-8'>
								<h2
									style={{
										color: userPreferences.shade.text.primaryText,
										fontFamily: userPreferences.font.fontFamily,
									}}
									className='uppercase text-xs md:text-xs font-semibold tracking-wider mb-4'
								>
									Completed Projects
								</h2>

								<ul
									style={{
										fontFamily: userPreferences.font.fontFamily,
									}}
									className='flex flex-col gap-4'
								>
									{finishedProjects.map((finished, index) => (
										<li
											key={index}
											className={`cursor-pointer flex px-3 hover-color`}
										>
											<NavLink
												style={({ isActive }) => ({
													fontFamily: userPreferences.font.fontFamily,
													"--hover-color": userPreferences.color,
													color: isActive
														? userPreferences.color
														: userPreferences.shade.text.secondaryText,
												})}
												className={`flex items-center text-[13px]`}
												to={finished.url}
											>
												<span
													className={`flex hover:text-[--hover-color] items-center gap-4`}
												>
													{finished.projectName}
												</span>
											</NavLink>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundColor: userPreferences.shade.background }}
						className={`${
							isSidebarOpen ? "md:ml-60 " : "md:ml-0"
						} flex-1 max-w-full transition-width duration-500 ease ml-0 pt-24 px-8`}
					>
						<ProjectBoard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
