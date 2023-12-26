import ProjectCard from "./ProjectCard";


const PortFolioProjects = ({userProfile, userPreferences}) => {
  return (
		<div className='flex flex-row flex-wrap gap-10 items-center'>
			{userProfile.projects.map((project, index) => (
				<ProjectCard
					key={project.title + index}
					project={project}
					background={userPreferences.shade.background}
				/>
			))}
		</div>
	);
}

export default PortFolioProjects