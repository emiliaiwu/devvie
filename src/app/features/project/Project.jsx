import ProjectCategory from "./ProjectCategory";
import ProjectStack from "./ProjectStack";
import ProjectStats from "./ProjectStats";
import { UserPreferencesContext } from "../../context";
import { useContext } from "react";
import { Board, Filter, Sort } from "../../components";

const ProjectBoard = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<div className='flex flex-col relative overflow-x-hidden '>
			{/* <div
				className={`flex max-w-full justify-between gap-4 mb-14 transition-[height] duration-500 ease`}
			>
				<ProjectStack />
				<ProjectStats />
				<ProjectCategory />
			</div> */}

			<div className='mb-4'>
				<div
					style={{ borderBottom: `1px solid ${userPreferences.shade.other}` }}
					className='flex flex-col shadow-sm'
				>
					<h1
						style={{
							color: userPreferences.shade.text.primaryText,
							fontFamily: userPreferences.font.fontFamily,
						}}
						className='text-4xl mb-8 capitalize'
					>
						My Projects
					</h1>
				</div>

				<div className='min-h-[100px] flex items-center px-4'>
					<div
						style={{
							color: userPreferences.shade.text.primaryText,
							fontFamily: userPreferences.font.fontFamily,
						}}
						className='flex-1 h-full'
					>
						The filters
					</div>
					<div style={{}} className='flex items-center gap-2'>
						<Filter />
						<Sort />
					</div>
				</div>
			</div>
			<Board />
		</div>
	);
};

export default ProjectBoard;
