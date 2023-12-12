import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useState } from "react";
import { Board, Filter } from "../../components";
import ProjectFilter from "./ProjectFilter";
import { AddProjectIcon } from "../../data/icon";

const ProjectBoard = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const { handleClearFilters, setIsCreateNewProjectModalOpen, allProjects } =
		useContext(ProjectContext);

	const handleFilter = () => {
		handleClearFilters();
		setIsFilterOpen(!isFilterOpen);
	};


	return (
		<div
			style={{
				backgroundColor: userPreferences.shade.background,
				color: userPreferences.shade.text.primaryText,
				fontFamily: userPreferences.font.fontFamily,
			}}
			className='flex flex-col relative overflow-x-hidden gap-8 py-4'
		>
			<div className='mb-4 z-[40]'>
				<div className='flex items-end mb-4 gap-2'>
					<h1 className='text-4xl capitalize'>Projects Board</h1>
					<span
						style={{
							color: userPreferences.color,
						}}
						className='text-base mb-1'
					>
						({allProjects.length})
					</span>
				</div>

				<div className='flex justify-between items-center'>
					<div
						onClick={() => setIsCreateNewProjectModalOpen(true)}
						style={{
							backgroundColor: userPreferences.color,
							color: `${userPreferences.isLightMode ? "white" : "black"}`,
						}}
						className={`${userPreferences.border} flex items-center gap-2 py-2 px-4 cursor-pointer`}
					>
						<AddProjectIcon className='w-4 h-4' />
						<span className='text-sm'>New project</span>
					</div>
					<Filter isFilterOpen={isFilterOpen} handleFilter={handleFilter} />
				</div>

				{isFilterOpen && (
					<div className='min-h-[60px] mt-6'>
						<ProjectFilter />
					</div>
				)}
			</div>

			<Board />
		</div>
	);
};

export default ProjectBoard;
