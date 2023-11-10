import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useState } from "react";
import { AddCheckIcon, AddIcon, CheckedIcon, MinusIcon } from "../../data/icon";
import { HoverAccentColor } from "../../components";
import { allTechStack } from "../../data/projectData";

const ProjectTechStack = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { selectedProjectTechStack, setSelectedProjectTechStack } =
		useContext(ProjectContext);
	const [isTechStackOpen, setIsTechStackOpen] = useState(false);
	const sortedTechStack = allTechStack.slice().sort();

	const handleCheckboxChange = (tech) => {
		console.log(tech);
		if (selectedProjectTechStack.includes(tech)) {
			setSelectedProjectTechStack(
				selectedProjectTechStack.filter((i) => i !== tech)
			);
		} else {
			setSelectedProjectTechStack([...selectedProjectTechStack, tech]);
		}
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
						checked={selectedProjectTechStack.includes(tech)}
						value={tech}
						onChange={() => handleCheckboxChange(tech)}
						className='opacity-0'
					/>
					<span className='absolute'>
						{selectedProjectTechStack.includes(tech) ? (
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
				isTechStackOpen ? "h-[500px]" : "h-full"
			} w-full mx-auto`}
		>
			<div className=''>
				<h1 className='mb-4 px-1'>Project TechStack</h1>
				<div className='relative'>
					<div
						style={{
							backgroundColor: userPreferences.shade.card,
							color: userPreferences.shade.text.secondaryText,
						}}
						className={`${userPreferences.border} flex items-center justify-between px-4 gap-4 py-3`}
					>
						<div className='min-h-[2rem] text-base flex items-center w-full h-full gap-2 flex-wrap'>
							{selectedProjectTechStack.length === 0
								? "Choose the project's tech stack"
								: selectedProjectTechStack.map((tech) => (
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
								{isTechStackOpen ? (
									<span onClick={() => setIsTechStackOpen(false)}>
										<MinusIcon className='w-6 h-6' />
									</span>
								) : (
									<span onClick={() => setIsTechStackOpen(true)}>
										<AddIcon className='w-6 h-6' />
									</span>
								)}
							</HoverAccentColor>
						</div>
					</div>

					{isTechStackOpen && (
						<div className='absolute left-0 top-[135%]'>
							<div
								style={{
									backgroundColor: userPreferences.shade.card,
								}}
								className={`${userPreferences.border} w-[320px] py-5 pr-3`}
							>
								<ul className='h-[280px] overflow-y-scroll scroll'>
									{sortedTechStack.map((tech) => (
										<Tech key={tech} tech={tech} />
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectTechStack;
