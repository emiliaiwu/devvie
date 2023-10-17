import { NavLink } from "react-router-dom";
import { settingsList } from "../../data/db";
import { useScrollToTop } from "../../../hooks";

import { useContext } from "react";
import { UserPreferencesContext } from "../../context";

const Settings = () => {
	useScrollToTop();

	const { userPreferences } = useContext(UserPreferencesContext);

	return (
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
											<span className=' text-base whitespace-nowrap'>
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
	);
};

export default Settings;
