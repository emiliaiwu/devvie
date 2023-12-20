import { useContext, useState } from "react";
import { UserPreferencesContext } from "../../context";
const PersonalInfo = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		jobTitle: "",
		location: "",
		aboutYou: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<form
			style={{
				color: userPreferences.shade.text.secondaryText,
			}}
			className='w-full flex flex-col gap-6'
		>
			<div className='flex  w-full gap-6'>
				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='firstName'
						value={formData.firstName}
						placeholder='First Name'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
					/>
				</label>

				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='lastName'
						value={formData.lastName}
						placeholder='Last Name'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
					/>
				</label>
			</div>

			<div className='flex  w-full gap-6'>
				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='jobTitle'
						value={formData.jobTitle}
						placeholder='Job title'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
					/>
				</label>

				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='location'
						value={formData.location}
						placeholder='Location'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
					/>
				</label>
			</div>

			<label className='w-full'>
				<textarea
					style={{ borderColor: userPreferences.shade.other }}
					name='aboutYou'
					value={formData.aboutYou}
					placeholder='About You / Bio'
					onChange={handleChange}
					className={`${userPreferences.border} text-base py-3 px-4 w-full h-[120px] bg-transparent border-[1.5px] outline-none placeholder:opacity-50`}
				/>
			</label>
		</form>
	);
};

export default PersonalInfo;
