import ProjectCategory from "./ProjectCategory";
import ProjectStack from "./ProjectStack";
import ProjectStats from "./ProjectStats";
import { UserPreferencesContext } from "../../context";
import { useContext } from "react";
import ProjectNav from "./ProjectNav";
import { Filter, Sort } from "../../components";

const ProjectBoard = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<div className='flex flex-col'>
			<div className='flex justify-between gap-4 mb-14'>
				<ProjectStats />
				<ProjectStack />
				<ProjectCategory />
			</div>
			<div>
				<div className='flex flex-col shadow-lg'>
					<h1
						style={{
							color: userPreferences.shade.text.primaryText,
							fontFamily: userPreferences.font.fontFamily,
						}}
						className='text-4xl mb-8'
					>
						My Portfolio Projects
					</h1>
					<ProjectNav />
				</div>
				<div
					
					className='min-h-screen'
				>
					<div className='min-h-[100px] flex items-center px-4 '>
						<div
							style={{
								color: userPreferences.shade.text.primaryText,
								fontFamily: userPreferences.font.fontFamily,
							}}
							className='flex-1 h-full'
						>
							The filters
						</div>
						<div className='flex items-center gap-2'>
							<Filter />
							<Sort />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectBoard;
