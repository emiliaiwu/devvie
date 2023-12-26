


const PortfolioProjectExperience = ({ userPreferences, userProfile }) => {
	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className={`${userPreferences.border} p-10`}
		>
			<h1 className='text-xl flex flex-row gap-1 items-center'>
				<span style={{ color: userPreferences.color }}>{"//"}</span>Project
				Experience
			</h1>
			<div className='flex flex-col'>
				{userProfile.projectExperience.map((project, index) => (
					<div
						key={project.title}
						style={{ borderColor: userPreferences.shade.other }}
						className={`flex flex-col ${
							index === userProfile.projectExperience.length - 1
								? ""
								: "border-b"
						} py-6 `}
					>
						<h1 className='text-xl font-semibold'>{project.title}</h1>
						<div className='flex flex-row gap-2 my-2'>
							{project.techStack?.map((tech) => (
								<span
									style={{ color: userPreferences.color }}
									key={tech}
									className='text-xs italic'
								>
									{tech}
								</span>
							))}
						</div>
						<ul className='list-disc pl-4'>
							{project.responsibilities.map((task, index) => (
								<li
									style={{ color: userPreferences.shade.text.secondaryText }}
									key={index}
									className='whitespace-normal text-sm py-1'
								>
									{task}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioProjectExperience;
