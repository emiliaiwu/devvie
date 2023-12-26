import { useContext } from "react";
import { UserPreferencesContext, UserProfileContext } from "../../context";
import { CameraIcon, CheckCircle } from "../../data/icon";
import { Link } from "react-router-dom";

const Header = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { userProfile, setUserProfile, handleFileUpload } =
		useContext(UserProfileContext);

	const handleCheck = (key) => {
		setUserProfile((prevData) => ({
			...prevData,
			[key]: !prevData[key],
		}));
	};
	
	return (
		<div className='w-full h-full flex flex-col  items-center gap-6'>
			<div className='relative w-full'>
				{userProfile.coverPhoto === null ? (
					<div
						style={{
							backgroundColor: userPreferences.shade.background,
							borderColor: userPreferences.shade.other,
						}}
						className={`${userPreferences.border} w-full h-[200px] border-2 border-dashed`}
					></div>
				) : (
					<div className={`${userPreferences.border} overflow-hidden re`}>
						<img
							src={userProfile.coverPhoto}
							className='w-full h-[200px] object-cover'
						/>
					</div>
				)}

				<div className='absolute top-[70%] right-4'>
					<div
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-3 cursor-pointer hover:scale-110 transition-all duration-150 ease`}
					>
						<label
							htmlFor='coverPhotoInput'
							className='cursor pointer flex gap-1 text-sm justify-center items-center'
						>
							<CameraIcon className='w-5 h-5 cursor-pointer' />
							Upload Cover
						</label>
						<input
							id='coverPhotoInput'
							name='coverPhoto'
							onChange={(e) => handleFileUpload(e, "coverPhoto")}
							type='file'
							className='hidden'
							accept='image/*'
						/>
					</div>
				</div>
			</div>

			<div className='flex justify-center gap-7 items-end relative w-full'>
				<div className='-mt-24 relative'>
					<div className='rounded-full overflow-hidden '>
						<img
							src={userProfile?.userPhoto}
							className='w-[140px] h-[140px] object-contain'
						/>
					</div>
					<div
						style={{
							backgroundColor: userPreferences.color,
							borderColor: userPreferences.shade.background,
						}}
						className={`rounded-full p-2 cursor-pointer absolute right-0 top-[70%] border-[3px] hover:scale-110 transition-all duration-150 ease`}
					>
						<label
							htmlFor='userPhotoInput'
							className='cursor pointer flex gap-1 text-sm justify-center items-center'
						>
							<CameraIcon
								style={{
									color: userPreferences.isLightMode ? "white" : "black",
								}}
								className='w-5 h-5 cursor-pointer'
							/>
						</label>
						<input
							id='userPhotoInput'
							type='file'
							className='hidden'
							accept='image/*'
							name='userPhoto'
							onChange={(e) => handleFileUpload(e, "userPhoto")}
						/>
					</div>
				</div>

				<div className='absolute right-0 top-0 flex gap-6 pr-4'>
					<button
						onClick={() => handleCheck("isPublished")}
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm md:w-1/2  w-full hover:scale-110 transition-all duration-150 ease`}
						type='button'
					>
						{userProfile?.isPublished ? "Unpublish" : "Publish"}
					</button>

					<Link
						to={`/${userProfile?.username}`}
						target="_blank"
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm md:w-1/2  w-full hover:scale-110 transition-all duration-150 ease`}
						type='button'
					>
						Preview
					</Link>
				</div>
			</div>

			<div className='flex gap-8 justify-center items-center'>
				<div className='flex justify-center items-center gap-3'>
					<div
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm `}
					>
						Hire me
					</div>
					<label className='cursor pointer flex justify-center items-center relative'>
						<input
							type='checkbox'
							className='w-5 h-5 bg-transparent opacity-0'
							checked={userProfile.hireMe}
							onChange={() => handleCheck("hireMe")}
						/>
						{userProfile.hireMe ? (
							<CheckCircle className='w-8 h-8 absolute cursor-pointer' />
						) : (
							<div
								style={{ borderColor: userPreferences.shade.text.primaryText }}
								className='w-7 h-7 rounded-full border-2 absolute cursor-pointer'
							></div>
						)}
					</label>
				</div>

				<div className='flex justify-center items-center gap-3'>
					<div
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm `}
					>
						Remotely
					</div>
					<label className='cursor pointer flex justify-center items-center relative'>
						<input
							style={{ backgroundColor: userPreferences.color }}
							type='checkbox'
							className='w-5 h-5 bg-transparent opacity-0 '
							checked={userProfile.remotely}
							onChange={() => handleCheck("remotely")}
						/>
						{userProfile.remotely ? (
							<CheckCircle className='w-8 h-8 absolute cursor-pointer' />
						) : (
							<div
								style={{ borderColor: userPreferences.shade.text.primaryText }}
								className='w-7 h-7 rounded-full border-2 absolute cursor-pointer'
							></div>
						)}
					</label>
				</div>
				<div className='flex justify-center items-center gap-3'>
					<div
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm `}
					>
						Share
					</div>
					<label className='cursor pointer flex justify-center items-center relative'>
						<input
							style={{ backgroundColor: userPreferences.color }}
							type='checkbox'
							className='w-5 h-5 bg-transparent opacity-0 '
							checked={userProfile.share}
							onChange={() => handleCheck("share")}
						/>
						{userProfile.share ? (
							<CheckCircle className='w-8 h-8 absolute cursor-pointer' />
						) : (
							<div
								style={{ borderColor: userPreferences.shade.text.primaryText }}
								className='w-7 h-7 rounded-full border-2 absolute cursor-pointer'
							></div>
						)}
					</label>
				</div>
			</div>
		</div>
	);
};

export default Header;
