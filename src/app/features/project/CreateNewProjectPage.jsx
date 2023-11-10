import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext } from "react";
import ProjectTag from "./ProjectTag";
import ChooseCategory from "./ChooseCategory";
import ProjectStatus from "./ProjectStatus";
import ProjectPriority from "./ProjectPriority";
import { ChooseDueDate, ChooseStartDate } from "../../components";
import ProjectTechStack from "./ProjectTechStack";
import ProjectTeam from "./ProjectTeam";


const CreateNewProjectPage = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const {
		newProjectTitle,
		setNewProjectTitle,
		newProjectDescription,
		setNewProjectDescription,
	} = useContext(ProjectContext);

	const titleCharacterLimit = 30;
	const descriptionCharacterLimit = 500;

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
		<section className='mx-auto min-h-screen h-full pt-5 pb-20'>
			<div
				style={{ fontFamily: userPreferences.font.fontFamily }}
				className='flex flex-col'
			>
				<h1
					style={{ color: userPreferences.shade.text.primaryText }}
					className='text-3xl mb-10'
				>
					Create New Project
				</h1>
				<div
					style={{ color: userPreferences.shade.text.primaryText }}
					className=' gap-6 justify-between'
				>
					<form className='w-2/3'>
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
								className={`${userPreferences.border} w-full px-4 py-3 focus:outline-none`}
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
								className={`${userPreferences.border} px-5 py-3 focus:outline-none`}
							/>
							<p
								style={{ color: userPreferences.shade.text.secondaryText }}
								className='text-sm flex self-end'
							>
								{newProjectDescription.length}/{descriptionCharacterLimit}
							</p>
						</div>
					</form>

					<div className='w-2/3 flex flex-col gap-10 min-h-screen mb-44'>
						<div className='flex gap-3 justify-between'>
							<ProjectStatus />
						
						</div>
						
						<div className='flex gap-3 justify-between'>
							<ProjectTag />
							<ProjectPriority />
						</div>
						<div className='flex justify-between gap-3 '>
							<ChooseStartDate /> <ChooseDueDate />
						</div>
						<ProjectTechStack/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateNewProjectPage;
