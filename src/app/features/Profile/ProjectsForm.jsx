import { useContext, useState } from "react";
import { UserPreferencesContext } from "../../context";

const ProjectsForm = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		link: "",
		sourcecode: "",
		techStack: [],
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div>
			<form
				style={{
					color: userPreferences.shade.text.secondaryText,
				}}
				className='w-full flex flex-col gap-6'
			>
				
					<label className='w-full'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='text'
							name='title'
							value={formData.title}
							placeholder='Title'
							onChange={handleChange}
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none `}
						/>
					</label>

					<label className='w-full'>
						<textarea
							style={{ borderColor: userPreferences.shade.other }}
							name='description'
							value={formData.description}
							placeholder='Description'
							onChange={handleChange}
                        className={`${userPreferences.border} text-base py-2 h-[80px] px-4 w-full bg-transparent border-[1.5px] outline-none `}
						/>
					</label>
				

				<div className='flex  w-full gap-6'>
					<label className='w-1/2'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='url'
							name='link'
							value={formData.link}
							placeholder='Project link'
							onChange={handleChange}
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none `}
						/>
					</label>

					<label className='w-1/2'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='url'
							name='sourcecode'
							value={formData.sourcecode}
							placeholder='Source code link'
							onChange={handleChange}
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none `}
						/>
					</label>
				</div>

				<button
					style={{
						backgroundColor: userPreferences.color,
						color: userPreferences.isLightMode ? "white" : "black",
					}}
					className={`${userPreferences.border} py-2 px-4 text-base  w-full `}
					type='button'
				>
					Add project
				</button>
			</form>
		</div>
	);
};

export default ProjectsForm;
