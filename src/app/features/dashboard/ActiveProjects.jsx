import { useContext } from "react";
import { DashboardContext, UserPreferencesContext } from "../../context";

const ActiveProjects = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { activeProjectsWithPercentage } = useContext(DashboardContext);

	const Projects =
		activeProjectsWithPercentage.length > 4
			? activeProjectsWithPercentage.slice(0, 5)
			: activeProjectsWithPercentage;

	const colors = ["#ff9800", "#ff57d8", "#10b981", "#0ea5e9", "#ff5724"];

	return (
		<div
			style={{
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-full lg:w-[380px] h-[360px] flex flex-col justify-center items-center`}
		>
			<h1
				style={{
					borderColor: userPreferences.shade.other,
				}}
				className='text-xl border-b pb-3 px-6 pt-6 w-full text-left'
			>
				Active Projects
			</h1>

			{activeProjectsWithPercentage.length !== 0 ? (
				<div className='flex flex-col gap-4 px-6 flex-1 w-full pt-4'>
					{Projects.map((project, index) => (
						<div
							key={project.title}
							style={{
								fontFamily: userPreferences.font.fontFamily,
								color: userPreferences.shade.text.primaryText,
							}}
						>
							<div className='flex justify-between items-center mb-1'>
								<h1 className='text-base'>{project.title}</h1>{" "}
								<span
									style={{
										color: userPreferences.shade.text.secondaryText,
									}}
									className='text-sm'
								>
									{project.percentageChecked}%
								</span>
							</div>
							<div className='w-full'>
								<div
									style={{ backgroundColor: userPreferences.shade.other }}
									className='w-full h-[8px] rounded-full flex-1'
								>
									<div
										className='h-full transition-all ease-in-out duration-300 rounded-full'
										style={{
											backgroundColor: `${colors[index]}`,
											width: `${project.percentageChecked}%`,
										}}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className='flex flex-col gap-4 px-6 justify-center items-center flex-1 w-full'>
					<h1 className='text-3xl pb-4'>No Projects Yet</h1>
				</div>
			)}
		</div>
	);
};

export default ActiveProjects;
