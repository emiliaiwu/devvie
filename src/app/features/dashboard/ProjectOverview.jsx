import { useContext } from "react";
import {
	DashboardContext,
	UserPreferencesContext,
} from "../../context";
import { BoltIcon, CheckCircle, LibraryIcon, ProjectIcon, WebIcon } from "../../data/icon";
import ProjectCard from "./ProjectCard";

const ProjectOverview = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { totalProjects, projectsInColumns } = useContext(DashboardContext);

	return (
		<div className="flex flex-col">
			<h1
				className='text-2xl'
				style={{ color: userPreferences.shade.text.primaryText }}
			>
				Project Overview
			</h1>
			<div className='flex flex-col lg:flex-row justify-between items-center gap-6 mt-3'>
				{/* <ProjectCard
					backgroundColor='#dc0cd3'
					icon={<ProjectIcon className='w-8 h-8' />}
					title='Total Projects'
					count={totalProjects}
					description='Total Projects'
				/> */}
				<ProjectCard
					backgroundColor='rgb(11, 218, 81)'
					icon={<CheckCircle className='w-8 h-8' />}
					title='Completed'
					count={projectsInColumns[5]?.count}
					description='Completed'
				/>
				<ProjectCard
					backgroundColor='rgb(255, 191, 0)'
					icon={<BoltIcon className='w-8 h-8' />}
					title='In Progress'
					count={projectsInColumns[2]?.count}
					description='In Progress'
				/>
				<ProjectCard
					backgroundColor='#007FFF'
					icon={<LibraryIcon className='w-8 h-8' />}
					title='Completed'
					count={projectsInColumns[1]?.count}
					description='Not started'
				/>
				<ProjectCard
					backgroundColor='#8f2ffc'
					icon={<WebIcon className='w-8 h-8' />}
					title='Deployed'
					count={projectsInColumns[7]?.count}
					description='Deployed'
				/>
			</div>
		</div>
	);
};

export default ProjectOverview;
