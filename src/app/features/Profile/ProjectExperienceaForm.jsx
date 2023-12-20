import { useContext, useState } from "react";
import { UserPreferencesContext } from "../../context";
import { CheckCircle } from "../../data/icon";

const ProjectExperienceForm = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [responsibility, setResponsibility] = useState("");
	const [formData, setFormData] = useState({
		organization: "",
		location: "",
		startDate: "",
		endDate: "",
		isPresent: false,
		responsibilities: [],
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleAddResponsibility = () => {
		setFormData((prevData) => ({
			...prevData,
			responsibilities: [...prevData.responsibilities, responsibility],
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can handle form submission logic here
		console.log("Form data submitted:", formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='flex flex-col gap-6 mb-6'>
				<label className='w-full'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name=''
						value={formData.organization}
						onChange={handleChange}
						placeholder='Project title'
						required
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
					/>
				</label>

				<label className='w-full'>
					<textarea
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='description'
						value={formData.location}
						onChange={handleChange}
						placeholder='Description'
						required
						className={`${userPreferences.border} text-base py-2 px-4 w-full h-[80px]  bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
					/>
				</label>
			</form>

			<div className='flex flex-col gap-6'>
				<div className='flex flex-col md:flex-row items-center gap-6'>
					<label className='w-full'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='text'
							name='firstName'
							value={responsibility}
							placeholder='Enter project responsibility'
							onChange={(e) => setResponsibility(e.target.value)}
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none `}
						/>
					</label>
					<button
						onClick={handleAddResponsibility}
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-base md:w-1/2  w-full `}
						type='button'
					>
						Add project responsibility
					</button>
				</div>
				<div
					style={{ borderColor: userPreferences.shade.other }}
					className={`${userPreferences.border} text-base py-3 px-4 w-full h-[120px] bg-transparent border-[1.5px]`}
				></div>
			</div>
		</div>
	);
};

export default ProjectExperienceForm;
