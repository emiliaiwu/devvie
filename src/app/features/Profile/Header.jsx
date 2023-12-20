import { myBanner } from "../../../assets";
import { useContext } from "react";
import { UserPreferencesContext, UserProfileContext } from "../../context";
import { CameraIcon, CheckCircle } from "../../data/icon";
import UserContext from "../../context/UserContext";

const Header = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { cover, checked, setChecked } = useContext(UserProfileContext);
	const { userPhoto } = useContext(UserContext);

	return (
		<div className='w-full h-full flex flex-col  items-center gap-6'>
			<div className='relative w-full'>
				{cover === null ? (
					<div
						style={{
							backgroundColor: userPreferences.shade.card,
						}}
						className={`${userPreferences.border} w-full h-[180px]`}
					></div>
				) : (
					<div className={`${userPreferences.border} overflow-hidden re`}>
						<img src={myBanner} className='w-full h-[180px] object-cover' />
					</div>
				)}

				<div className='absolute top-[70%] right-4'>
					<div
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-3 cursor-pointer`}
					>
						<label
							htmlFor='fileInput'
							className='cursor pointer flex gap-1 text-sm justify-center items-center'
						>
							<CameraIcon className='w-5 h-5 cursor-pointer' />
							Upload Cover
						</label>
						<input
							id='fileInput'
							type='file'
							className='hidden'
							accept='image/*'
						/>
					</div>
				</div>
			</div>

			<div className='flex justify-center gap-7 items-end relative w-full'>
				<div className='-mt-28 relative'>
					<div
						style={{
							borderColor: userPreferences.shade.background,
						}}
						className='rounded-full overflow-hidden border-[3px] '
					>
						<img
							src={userPhoto}
							className='w-[140px] h-[140px] object-contain'
						/>
					</div>
					<div
						style={{
							backgroundColor: userPreferences.color,
							borderColor: userPreferences.shade.background,
						}}
						className={`rounded-full p-2 cursor-pointer absolute right-0 top-[70%] border-[3px]`}
					>
						<label
							htmlFor='fileInput'
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
							id='fileInput'
							type='file'
							className='hidden'
							accept='image/*'
						/>
					</div>
				</div>

				<div className='absolute right-0 top-0 flex gap-3'>
					<button
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm md:w-1/2  w-full `}
						type='button'
					>
						Publish
					</button>

					<button
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm md:w-1/2  w-full `}
						type='button'
					>
						Preview
					</button>
				</div>
			</div>

			<div className='flex gap-6 justify-center items-center'>
				<div className='flex justify-center items-center gap-2'>
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
						/>
						{checked.hireMe ? (
							<CheckCircle className='w-5 h-5 absolute cursor-pointer' />
						) : (
							<div className='w-5 h-5 rounded-full border-2 absolute cursor-pointer'></div>
						)}
					</label>
				</div>

				<div className='flex justify-center items-center gap-2'>
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
						/>
						{checked.remotely ? (
							<CheckCircle className='w-5 h-5 absolute cursor-pointer' />
						) : (
							<div className='w-5 h-5 rounded-full border-2 absolute cursor-pointer'></div>
						)}
					</label>
				</div>
				<div className='flex justify-center items-center gap-2'>
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
						/>
						{checked.remotely ? (
							<CheckCircle className='w-5 h-5 absolute cursor-pointer' />
						) : (
							<div className='w-5 h-5 rounded-full border-2 absolute cursor-pointer'></div>
						)}
					</label>
				</div>
			</div>
		</div>
	);
};

export default Header;
