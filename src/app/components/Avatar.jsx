import { useContext } from "react";

import { UserPreferencesContext, UserProfileContext } from "../context";

const Avatar = () => {
	const { userProfile } = useContext(UserProfileContext);
	const { userPreferences } = useContext(UserPreferencesContext);

	function getInitials(displayName) {
		const words = displayName.split(" ");
		const initials = words
			.map((word) => word[0])
			.join("")
			.toUpperCase();

		return initials;
	}

	const userPhoto = userProfile?.userPhoto;
	const displayName = userProfile?.firstName + " " + userProfile?.lastName;

	const initials = getInitials(displayName);
	const isPhotoAvailable = userPhoto && userPhoto.trim() !== "";

	return (
		<div className='flex items-center gap-2'>
			{isPhotoAvailable ? (
				<div className=' w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover-border transition-all duration-200 ease cursor-pointer'>
					<img
						src={userPhoto}
						alt={displayName}
						className='w-full h-full rounded-full'
					/>
				</div>
			) : (
				<div
					style={{
						fontFamily: userPreferences.font.fontFamily,
						color: userPreferences.shade.text.primaryText,
						backgroundColor: userPreferences.color,
					}}
					className='w-10 h-10 rounded-full cursor-pointer flex justify-center items-center '
				>
					<span className='text-base font-semibold'>{initials}</span>
				</div>
			)}

			<h2
				style={{
					fontFamily: userPreferences.font.fontFamily,
					color: userPreferences.shade.text.primaryText,
				}}
				className='text-xs hidden md:inline-block font-semibold'
			>
				{displayName}
			</h2>
		</div>
	);
};

export default Avatar;
