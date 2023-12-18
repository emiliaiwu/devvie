import { useContext } from "react";
import {
	DashboardContext,
	UserPreferencesContext,
} from "../../context";
import { libraryImg } from "../../../assets";

const Banner = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { firstName } = useContext(DashboardContext);

	return (
		<div
			className={`${userPreferences.border}  h-full relative overflow-hidden`}
		>
			<div
				style={{ backgroundColor: userPreferences.color }}
				className={`${userPreferences.border} h-[190px] mt-12 flex justify-between items-center px-6 lg:px-20 relative `}
			>
				<div
					style={{ color: userPreferences.isLightMode ? "white" : "black" }}
					className='flex flex-col justify-center items-start'
				>
					<h1 className='lg:text-5xl mb-2 font-semibold text-2xl'>
						Hello! {firstName}
					</h1>
					<p className='text-base lg:text-lg max-w-[250px]  lg:max-w-full whitespace-normal'>
						Welcome to your Developer library
					</p>
				</div>

				<div className='overflow-hidden hidden lg:flex '>
					<img
						src={libraryImg}
						className='h-[250px] w-auto absolute right-0 bottom-0'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
