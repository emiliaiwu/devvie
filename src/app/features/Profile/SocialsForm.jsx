import { useContext, useState } from "react";
import { UserPreferencesContext } from "../../context";
import {
	Call,
	Facebook,
	Github,
	Gmail,
	Instagram,
	Linkedin,
} from "../../data/icon";

const SocialsForm = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [socialLinks, setSocialLinks] = useState({
		instagram: "",
		github: "",
		linkedIn: "",
		facebook: "",
		email: "",
		phoneNumber: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSocialLinks((prevLinks) => ({
			...prevLinks,
			[name]: value,
		}));
	};

	return (
		<div>
			<form className='grid lg:grid-cols-3 gap-6'>
				<label
					style={{
						borderColor: userPreferences.shade.other,
						color: userPreferences.shade.text.secondaryText,
					}}
					htmlFor='instagram'
					className={`${userPreferences.border} text-base py-2 px-4 w-full border-[1.5px] flex items-center gap-3 `}
				>
					<Instagram className='w-7 h-7' />

					<input
						type='url'
						id='instagram'
						name='instagram'
						placeholder='Enter your Instagram link'
						value={socialLinks.instagram}
						onChange={handleChange}
						className='bg-transparent  outline-none w-full'
					/>
				</label>

				<label
					style={{
						borderColor: userPreferences.shade.other,
						color: userPreferences.shade.text.secondaryText,
					}}
					htmlFor='github'
					className={`${userPreferences.border} text-base py-2 px-4 w-full border-[1.5px] flex items-center gap-3 `}
				>
					<Github className='w-6 h-6' />

					<input
						type='url'
						id='github'
						name='github'
						placeholder='Enter your github link'
						value={socialLinks.github}
						onChange={handleChange}
						className='bg-transparent  outline-none w-full'
					/>
				</label>

				<label
					style={{
						borderColor: userPreferences.shade.other,
						color: userPreferences.shade.text.secondaryText,
					}}
					htmlFor='facebook'
					className={`${userPreferences.border} text-base py-2 px-4 w-full border-[1.5px] flex items-center gap-3 `}
				>
					<Facebook className='w-6 h-6' />

					<input
						type='url'
						id='facebook'
						name='facebook'
						placeholder='Enter your facebook link'
						value={socialLinks.facebook}
						onChange={handleChange}
						className='bg-transparent  outline-none w-full'
					/>
				</label>
				<label
					style={{
						borderColor: userPreferences.shade.other,
						color: userPreferences.shade.text.secondaryText,
					}}
					htmlFor='linkedIn'
					className={`${userPreferences.border} text-base py-2 px-4 w-full border-[1.5px] flex items-center gap-3 `}
				>
					<Linkedin className='w-6 h-6' />

					<input
						type='url'
						id='linkedIn'
						name='linkedIn'
						placeholder='Enter your linkedIn link'
						value={socialLinks.linkedIn}
						onChange={handleChange}
						className='bg-transparent  outline-none w-full'
					/>
				</label>

				<label
					style={{
						borderColor: userPreferences.shade.other,
						color: userPreferences.shade.text.secondaryText,
					}}
					htmlFor='gmail'
					className={`${userPreferences.border} text-base py-2 px-4 w-full border-[1.5px] flex items-center gap-3 `}
				>
					<Gmail className='w-6 h-6' />

					<input
						type='email'
						id='gmail'
						name='gmail'
						placeholder='Enter your gmail '
						value={socialLinks.gmail}
						onChange={handleChange}
						className='bg-transparent  outline-none w-full'
					/>
				</label>

				<label
					style={{
						borderColor: userPreferences.shade.other,
						color: userPreferences.shade.text.secondaryText,
					}}
					htmlFor='phoneNumber'
					className={`${userPreferences.border} text-base py-2 px-4 w-full border-[1.5px] flex items-center gap-3 `}
				>
					<Call className='w-6 h-6' />

					<input
						type='tel'
						id='phoneNumber'
						name='phoneNumber'
						placeholder='Enter your phone number '
						value={socialLinks.phoneNumber}
						onChange={handleChange}
						className='bg-transparent  outline-none w-full'
					/>
				</label>
			</form>
		</div>
	);
};

export default SocialsForm;
