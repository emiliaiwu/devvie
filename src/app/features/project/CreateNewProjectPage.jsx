import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext } from "react";
import ProjectTag from "./ProjectTag";
import ChooseCategory from "./ChooseCategory";
import ProjectStatus from "./ProjectStatus";

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
		<section className='mx-auto min-h-screen py-5'>
			<div style={{ fontFamily: userPreferences.font.fontFamily }}>
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
								className={`${userPreferences.border} w-full p-3 focus:outline-none`}
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
								className={`${userPreferences.border} p-3 focus:outline-none`}
							/>
							<p
								style={{ color: userPreferences.shade.text.secondaryText }}
								className='text-sm flex self-end'
							>
								{newProjectDescription.length}/{descriptionCharacterLimit}
							</p>
						</div>
					</form>

					<div className='w-2/3 flex flex-col gap-10'>
						<div className='flex gap-5 justify-between'>
							<ProjectStatus />
							<ChooseCategory />
						</div>
						<div className='flex gap-5 justify-between'>
							<ProjectTag />
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateNewProjectPage;
