import { useContext, useState } from "react";
import { UserPreferencesContext } from "../../context";
import { CheckCircle } from "../../data/icon";

const WorkExperienceForm = () => {
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
				<div className='flex md:flex-row flex-col gap-6'>
					<label className='w-1/2'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='text'
							name=''
							value={formData.organization}
							onChange={handleChange}
							placeholder='Company'
							required
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
						/>
					</label>

					<label className='w-1/2'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='text'
							name='location'
							value={formData.location}
							onChange={handleChange}
							placeholder='Location'
							required
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
						/>
					</label>
				</div>{" "}
				<div className='flex md:flex-row flex-col gap-6'>
					<label className='w-1/2 flex flex-col gap-2 text-base'>
						Start Date:
						<input
							style={{
								borderColor: userPreferences.shade.other,
								color: userPreferences.shade.text.secondaryText,
							}}
							type='date'
							name='startDate'
							value={formData.startDate}
							onChange={handleChange}
							required
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50 uppercase `}
						/>
					</label>

					<label className='w-1/2 flex flex-col gap-2 text-base'>
						End Date:
						<input
							style={{
								borderColor: userPreferences.shade.other,
								color: userPreferences.shade.text.secondaryText,
							}}
							type='date'
							name='endDate'
							value={formData.endDate}
							onChange={handleChange}
							disabled={formData.isPresent}
							className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50 uppercase `}
						/>
					</label>
				</div>
				<div className='flex r items-center gap-2'>
					<div
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm `}
					>
						Currently Employed?
					</div>
					<label className='cursor pointer flex justify-center items-center relative'>
						<input
							type='checkbox'
							className='w-5 h-5 bg-transparent opacity-0'
						/>
						{formData.isPresent ? (
							<CheckCircle className='w-5 h-5 absolute cursor-pointer' />
						) : (
							<div className='w-5 h-5 rounded-full border-2 absolute cursor-pointer'></div>
						)}
					</label>
				</div>
			</form>

			<div className='flex flex-col gap-6'>
				<div className='flex flex-col md:flex-row items-center gap-6'>
					<label className='w-full'>
						<input
							style={{ borderColor: userPreferences.shade.other }}
							type='text'
							name='firstName'
							value={responsibility}
							placeholder='Enter job responsibility'
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
						Add job responsibility
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

export default WorkExperienceForm;
