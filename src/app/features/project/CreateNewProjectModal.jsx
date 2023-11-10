import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useRef, useEffect, useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectStatus from "./ProjectStatus";
import ProjectPriority from "./ProjectPriority";
import { ChooseDueDate, ChooseStartDate } from "../../components";
import ProjectTechStack from "./ProjectTechStack";
import { useScrollToTop } from "../../../hooks";

const CreateNewProjectModal = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const {
		newProjectTitle,
		setNewProjectTitle,
		newProjectDescription,
		setNewProjectDescription,
		createNewProject,
		handleCancel,
		isCreateNewProjectModalOpen,
		isUpdating,
		handleUpdateProject
	} = useContext(ProjectContext);
	

	const contentRef = useRef(null);
	const titleCharacterLimit = 28;
	const descriptionCharacterLimit = 500;

	

	useEffect(() => {
		if (isCreateNewProjectModalOpen) {
			contentRef.current.scrollTop = 0;
		}
	}, [isCreateNewProjectModalOpen]);


	const handleTitleChange = (e) => {
		const { value } = e.target;
		if (value.length > titleCharacterLimit) {
			return;
		}
		setNewProjectTitle(value);
	};

	const handleDescriptionChange = (e) => {
		const { value } = e.target;
		if (value.length > descriptionCharacterLimit) {
			return;
		}
		setNewProjectDescription(value);
	};

	return (
		<section
			style={{
				backgroundColor: userPreferences.shade.background,
			}}
			className={`mx-auto min-h-screen h-full lg:h-screen px-2 w-full lg:w-[600px] `}
		>
			<div
				style={{ fontFamily: userPreferences.font.fontFamily }}
				className='flex flex-col py-8'
			>
				<h1
					style={{ color: userPreferences.shade.text.primaryText }}
					className='text-3xl p-5'
				>
					Create New Project
				</h1>
				<div
					style={{ color: userPreferences.shade.text.primaryText }}
					ref={contentRef}
					className=' gap-6 justify-between overflow-y-scroll scroll h-screen p-5'
				>
					<form className='w-full'>
						<div className='flex flex-col gap-2 mb-4'>
							<label className='block text-lg'> Title </label>
							<input
								style={{ backgroundColor: userPreferences.shade.card }}
								type='text'
								id='title'
								name='title'
								placeholder='Enter your project title'
								value={newProjectTitle}
								onChange={handleTitleChange}
								className={`${userPreferences.border} w-full px-4 py-3 focus:outline-none text-sm`}
							/>
							<p
								style={{ color: userPreferences.shade.text.secondaryText }}
								className='text-sm flex self-end'
							>
								{newProjectTitle.length}/{titleCharacterLimit}
							</p>
						</div>

						<div className='flex flex-col gap-2'>
							<label htmlFor='description'>Description</label>
							<textarea
								style={{ backgroundColor: userPreferences.shade.card }}
								id='description'
								value={newProjectDescription}
								onChange={handleDescriptionChange}
								placeholder='Enter your project description'
								rows={5}
								className={`${userPreferences.border} px-5 py-3 focus:outline-none text-sm scroll leading-7`}
							/>
							<p
								style={{ color: userPreferences.shade.text.secondaryText }}
								className='text-sm flex self-end'
							>
								{newProjectDescription.length}/{descriptionCharacterLimit}
							</p>
						</div>
					</form>

					<div className='w-full flex flex-col gap-8 mb-28'>
						<div className='flex gap-3 justify-between'>
							<ProjectStatus />
						</div>

						<ProjectTag />
						<ProjectPriority />

						<div className='flex justify-between gap-3 '>
							<ChooseStartDate /> <ChooseDueDate />
						</div>
						<div>
							<ProjectTechStack />
						</div>
					</div>
					<div className='flex justify-between items-center mb-40'>
						<button
							onClick={handleCancel}
							style={{ backgroundColor: userPreferences.color }}
							className={`${userPreferences.border} h-10 px-7 text-sm text-black font-medium hover:opacity-60 transition-opacity duration-200 ease`}
						>
							Cancel
						</button>
						<button
							onClick={
								isUpdating
									? handleUpdateProject
									: createNewProject
							}
							style={{ backgroundColor: userPreferences.color }}
							className={`${userPreferences.border} h-10 px-7 text-sm text-black font-medium hover:opacity-60 transition-opacity duration-200 ease`}
						>
							{isUpdating ? "Update project" : "Create project"}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateNewProjectModal;
