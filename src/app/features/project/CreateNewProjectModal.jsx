import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useRef, useEffect } from "react";
import ProjectTag from "./ProjectTag";
import ProjectStatus from "./ProjectStatus";
import ProjectPriority from "./ProjectPriority";
import { ChooseDueDate, ChooseStartDate } from "../../components";
import ProjectTechStack from "./ProjectTechStack";
import { ClipLoader } from "react-spinners";

const CreateNewProjectModal = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const {
		isSubmitting,
		createNewProject,
		handleCancel,
		isCreateNewProjectModalOpen,
		isUpdating,
		handleUpdateProject,
		newProjectErrors,
		newProject,
		setNewProject,
	} = useContext(ProjectContext);

	const contentRef = useRef(null);
	const titleCharacterLimit = 28;
	const descriptionCharacterLimit = 500;

	// reset scroll to top when modal opens
	useEffect(() => {
		if (isCreateNewProjectModalOpen) {
			contentRef.current.scrollTop = 0;
		}
	}, [isCreateNewProjectModalOpen]);

	const handleInputChange = (fieldName, value) => {
		if (value.length > `${fieldName}CharacterLimit`) {
			return;
		}
		setNewProject((prevFormValues) => ({
			...prevFormValues,
			[fieldName]: value,
		}));
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
					<form className='w-full mb-4'>
						<div className='flex flex-col gap-2 mb-4'>
							<label className='block text-lg'> Title </label>
							<input
								style={{ backgroundColor: userPreferences.shade.card }}
								type='text'
								id='title'
								name='title'
								placeholder='Enter your project title'
								value={newProject.title}
								onChange={(e) => handleInputChange("title", e.target.value)}
								className={`${userPreferences.border} w-full px-4 py-3 focus:outline-none text-base mb-1`}
							/>
							<div className='flex justify-between items-center'>
								<p className='text-sm text-red-500 '>
									{newProjectErrors.title}
								</p>
								<p
									style={{ color: userPreferences.shade.text.secondaryText }}
									className='text-sm flex self-end'
								>
									{newProject.title.length}/{titleCharacterLimit}
								</p>
							</div>
						</div>

						<div className='flex flex-col gap-2 '>
							<label htmlFor='description'>Description</label>
							<div
								style={{ backgroundColor: userPreferences.shade.card }}
								className={`${userPreferences.border} py-2 overflow-hidden mb-1`}
							>
								<textarea
									style={{ backgroundColor: userPreferences.shade.card }}
									id='description'
									value={newProject.description}
									onChange={(e) =>
										handleInputChange("description", e.target.value)
									}
									placeholder='Enter your project description'
									rows={5}
									className={`px-5 py-3 focus:outline-none text-base scroll leading-10 w-full`}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<p className='text-sm text-red-500'>
									{newProjectErrors.description}
								</p>
								<p
									style={{ color: userPreferences.shade.text.secondaryText }}
									className='text-sm flex self-end'
								>
									{newProject.description.length}/{descriptionCharacterLimit}
								</p>
							</div>
						</div>
					</form>

					<div className='w-full flex flex-col gap-8 mb-10'>
						<div className='flex flex-col gap-3'>
							<ProjectStatus />
							<p className='text-sm text-red-500 '>{newProjectErrors.status}</p>
						</div>
						<div className='flex flex-col gap-2'>
							<ProjectTag />
							<p className='text-sm text-red-500'>{newProjectErrors.tag}</p>
						</div>

						<ProjectPriority />

						<div className='flex justify-between gap-3 '>
							<ChooseStartDate />
							<div className='w-full'>
								<ChooseDueDate />
								<p className='text-sm text-red-500 mt-1'>
									{newProjectErrors.date}
								</p>
							</div>
						</div>
						<div>
							<ProjectTechStack />
							<p className='text-sm text-red-500 mt-1'>
								{newProjectErrors.stack}
							</p>
						</div>
					</div>
					<div className='flex justify-between items-center mb-28'>
						<button
							onClick={handleCancel}
							style={{ backgroundColor: userPreferences.color }}
							className={`${userPreferences.border} h-11 px-7 text-sm text-black font-medium hover:opacity-60 transition-opacity duration-200 ease`}
						>
							Cancel
						</button>
						<button
							onClick={isUpdating ? handleUpdateProject : createNewProject}
							style={{ backgroundColor: userPreferences.color }}
							className={`${userPreferences.border} h-11 w-36 text-sm text-black font-medium hover:opacity-60 transition-opacity duration-200 ease flex justify-center items-center`}
						>
							{isSubmitting ? (
								<ClipLoader loading={true} color={"#FFFFFF"} size={32} />
							) : isUpdating ? (
								"Update project"
							) : (
								"Create project"
							)}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateNewProjectModal;
