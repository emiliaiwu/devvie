import { useContext } from "react";
import { UserPreferencesContext } from "../../context";

const WorkExperience = ({ userProfile }) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div className=''>
			{userProfile.workExperience.map((work) => (
				<div key={work.id} className='flex flex-col gap-3'>
					<div className='flex flex-col gap-1'>
						<h1 className='text-xl font-semibold'>{work.jobTitle}</h1>
						<p className='text-sm flex flex-row gap-2'>
							<span>{work.company}</span>&middot;
							<span>{work.employmentType}</span>
						</p>
						<p
							style={{
								color: userPreferences.shade.text.secondaryText,
							}}
							className='text-sm flex flex-row gap-2'
						>
							<span>{work.startDate}</span> {"-"}
							<span>{work.isPresent ? "Present" : work.endDate}</span>
						</p>
					</div>
					<ul className='list-disc pl-4'>
						{work.responsibilities.map((task, index) => (
							<li key={index} className='whitespace-normal text-sm'>
								{task}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default WorkExperience;
