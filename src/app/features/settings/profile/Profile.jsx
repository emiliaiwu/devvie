import { UserPreferencesContext } from "../../../context";
import { useContext } from "react";

const Profile = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<section
			style={{ backgroundColor: userPreferences.shade.card }}
			className={`p-8 lg:flex-1 lg:ml-8 sm:p-10 lg:rounded-tl-3xl lg:shadow-lg h-full`}
		>
			<div
				style={{
					borderBottom: `1px solid ${userPreferences.shade.other}`,
				}}
				className='mb-8 px-2 hidden lg:block'
			>
				<h2
					style={{
						fontFamily: userPreferences.font.fontFamily,
						color: userPreferences.shade.text.primaryText,
					}}
					className='text-xl pb-4 font-medium'
				>
					Edit Profile
				</h2>
			</div>
		</section>
	);
};

export default Profile;
