import { useContext } from "react";
import { UserPreferencesContext } from "../../context";
import { ProgressBar } from "../../components";

const ProjectStack = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-full flex flex-col p-6 justify-between gap-4 shadow-sm items`}
		>
			<div className='flex justify-between items-center'>
				<h1
					style={{ color: userPreferences.shade.text.primaryText }}
					className='text-base font-medium'
				>
					Top Tech Stack
				</h1>

				<span
					style={{ color: userPreferences.color }}
					className='text-xs hover:opacity-80 cursor-pointer'
				>
					See tech stack
				</span>
			</div>
			<div className='flex flex-col gap-3'>
				<ProgressBar progress='80' techstack={"React"} color='#F01BF4' />
				<ProgressBar progress='90' techstack={"TypeScript"} color='#47CB5B' />
				<ProgressBar progress='50' techstack={"JavaScript"} color='#F5B314' />
				<ProgressBar progress='70' techstack={"Python"} color='#3CDAF6' />
			</div>
		</div>
	);
};

export default ProjectStack;
