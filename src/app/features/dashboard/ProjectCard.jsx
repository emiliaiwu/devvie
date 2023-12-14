import { useContext } from "react";
import {
	UserPreferencesContext,
} from "../../context";

const ProjectCard = ({ backgroundColor, icon, title, count, description }) => {
    const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{ backgroundColor: userPreferences.shade.card }}
			className={`${userPreferences.border} h-28 w-full flex items-center px-6 gap-6`}
		>
			<div
				style={{ backgroundColor: backgroundColor }}
				className={`${userPreferences.border} p-2 h-16 w-16 flex justify-center items-center`}
			>
				{icon}
			</div>
			<div>
				<h2 className='text-3xl font-semibold'>{count}</h2>
				<p className='text-base'>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
