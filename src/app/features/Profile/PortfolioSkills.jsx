const PortfolioSkills = ({ userPreferences, userProfile }) => {
	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className={`${userPreferences.border} p-10`}
		>
			<h1 className='text-xl mb-5 flex flex-row gap-1 items-center'>
				<span style={{ color: userPreferences.color }}>{"//"}</span>My Skills
			</h1>
			<p
				style={{
					color: userPreferences.shade.text.primaryText,
				}}
				className='whitespace-normal leading-8 flex flex-wrap items-center gap-4 w-1/2'
			>
				{userProfile?.techStack.map((skill) => (
					<div
						key={skill}
						style={{
							borderColor: userPreferences.shade.other,
							color: userPreferences.color,
						}}
						className={`${userPreferences.border} px-5 py-2 text-sm border`}
					>
						{skill}
					</div>
				))}
			</p>
		</div>
	);
};

export default PortfolioSkills;
