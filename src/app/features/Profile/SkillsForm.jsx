import { useContext } from "react";
import { UserPreferencesContext } from "../../context";

const SkillsForm = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div className="flex flex-col gap-6">
			<div className='flex flex-col md:flex-row items-center gap-6'>
				<label className='w-full'>
					<input
						style={{ borderColor: userPreferences.shade.other }}
						type='text'
						name='firstName'
						// value={formData.firstName}
						placeholder='Skill'
						// onChange={handleChange}
						className={`${userPreferences.border} text-base py-2 px-4 w-full bg-transparent border-[1.5px] outline-none `}
					/>
				</label>
				<button
					style={{
						backgroundColor: userPreferences.color,
						color: userPreferences.isLightMode ? "white" : "black",
					}}
					className={`${userPreferences.border} py-2 px-4 text-base md:w-1/2  w-full `}
					type='button'
				>
					Add skill
				</button>
			</div>
			<div
				style={{ borderColor: userPreferences.shade.other }}
				className={`${userPreferences.border} text-base py-3 px-4 w-full h-[120px] bg-transparent border-[1.5px]`}
			></div>
		</div>
	);
};

export default SkillsForm;
