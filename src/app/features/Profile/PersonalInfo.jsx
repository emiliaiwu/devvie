import { useContext } from "react";
import { UserPreferencesContext, UserProfileContext } from "../../context";
import EmploymentType from "./EmploymentType";
const PersonalInfo = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { userProfile, setUserProfile } =
		useContext(UserProfileContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserProfile((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	console.log(userProfile)

	return (
		<form
			style={{
				color: userPreferences.shade.text.secondaryText,
			}}
			className='w-full flex flex-col gap-6'
		>
			<div className='flex  w-full gap-4'>
				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='firstName'
						value={userProfile.firstName}
						placeholder='First Name'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none`}
					/>
				</label>

				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='lastName'
						value={userProfile.lastName}
						placeholder='Last Name'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none`}
					/>
				</label>

				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='username'
						value={userProfile.username}
						placeholder='Portfolio link slug'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none`}
					/>
				</label>
			</div>

			<div className='flex  w-full gap-4'>
				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='jobTitle'
						value={userProfile.jobTitle}
						placeholder='Job title'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none`}
					/>
				</label>
				<div className="w-1/2">
					<EmploymentType employmentType={userProfile?.employmentType} setFormData={setUserProfile}/>
				</div>

				<label className='w-1/2'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='location'
						value={userProfile.location}
						placeholder='Location'
						onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none`}
					/>
				</label>
			</div>

			<label className='w-full'>
				<textarea
					style={{ borderColor: userPreferences.shade.other }}
					name='aboutYou'
					value={userProfile.aboutYou}
					placeholder='About You / Bio'
					onChange={handleChange}
					className={`${userPreferences.border} text-base py-3 px-4 w-full h-[120px] bg-transparent border-[1.5px] scroll outline-none whitespace-normal`}
				/>
			</label>
		</form>
	);
};

export default PersonalInfo;
