import {
	ProjectContext,
	UserPreferencesContext,
	UserProfileContext,
} from "../../context";
import { useContext } from "react";
import { AddCheckIcon, AddIcon, CheckedIcon, MinusIcon } from "../../data/icon";
import { HoverAccentColor } from "../../components";

const ProjectTechStack = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const {
		isNewProjectOpen,
		handleModalOpen,
		handleModalClose,
		setNewProject,
		newProject,
	} = useContext(ProjectContext);

	const { userProfile } = useContext(UserProfileContext);

	const sortedTechStack = userProfile?.techStack.slice().sort();

	const handleCheckboxChange = (tech) => {
		const updatedStack = newProject.stack.includes(tech)
			? newProject.stack.filter((i) => i !== tech)
			: [...newProject.stack, tech];

		setNewProject((prev) => ({
			...prev,
			stack: updatedStack,
		}));
	};

	// Tech Component
	function Tech({ tech }) {
		return (
			<li
				key={tech}
				className='text-sm pl-7 py-3 relative flex items-center hover:bg-black hover:bg-opacity-10 mb-1'
			>
				<label className='flex items-center gap-4 cursor-pointer'>
					<input
						type='checkbox'
						checked={newProject.stack.includes(tech)}
						value={tech}
						onChange={() => handleCheckboxChange(tech)}
						className='opacity-0'
					/>
					<span className='absolute'>
						{newProject.stack.includes(tech) ? (
							<CheckedIcon className='w-5 h-5' />
						) : (
							<AddCheckIcon className='w-5 h-5' />
						)}
					</span>
					{tech}
				</label>
			</li>
		);
	}

	return (
		<div
			style={{
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
			}}
			className={`${
				isNewProjectOpen.stack ? "h-[430px]" : "h-full"
			} w-full mx-auto`}
		>
			<div className=''>
				<h1 className='my-2 px-1'>Project TechStack</h1>
				<div className='relative'>
					<div
						style={{
							backgroundColor: userPreferences.shade.card,
							color: userPreferences.shade.text.secondaryText,
						}}
						className={`${userPreferences.border} flex items-center justify-between px-4 gap-4 py-3`}
					>
						<div className='min-h-[2rem] text-sm md:text-base flex items-center w-full h-full gap-2 flex-wrap'>
							{newProject.stack.length === 0
								? "Choose the project's tech "
								: newProject.stack.map((tech) => (
										<span
											key={tech}
											style={{
												color: userPreferences.shade.text.primaryText,
												borderColor: userPreferences.shade.text.primaryText,
											}}
											className={`${userPreferences.border} border px-3 py-1 text-xs`}
										>
											{tech}
										</span>
								  ))}
						</div>
						<div className='cursor-pointer'>
							<HoverAccentColor>
								{isNewProjectOpen.stack ? (
									<span onClick={handleModalClose}>
										<MinusIcon className='w-6 h-6' />
									</span>
								) : (
									<span onClick={() => handleModalOpen("stack")}>
										<AddIcon className='w-6 h-6' />
									</span>
								)}
							</HoverAccentColor>
						</div>
					</div>

					{isNewProjectOpen.stack && (
						<div className='absolute left-0 top-[135%]'>
							<div
								style={{
									backgroundColor: userPreferences.shade.card,
								}}
								className={`${userPreferences.border}  w-[280px] ss:w-[300px] md:w-[320px] py-5 pr-3`}
							>
								{sortedTechStack.length === 0 ? (
									<p style={{color: userPreferences.color}} className="whitespace-normal text-base h-full flex justify-center items-center p-4 md:p-8 ml-6 w-full">To include your tech stack, please visit your profile page.</p>
								) : (
									<ul className='h-[280px] overflow-y-scroll scroll'>
										{sortedTechStack.map((tech) => (
											<Tech key={tech} tech={tech} />
										))}
									</ul>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectTechStack;
