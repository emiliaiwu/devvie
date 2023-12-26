import { useContext } from "react";
import { noFiles } from "../../assets";
import { UserPreferencesContext } from "../context";

const NoData = ({title, paragraph}) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div className='w-full h-full flex justify-center items-center flex-col'>
			<div className='flex justify-center items-center'>
				<img src={noFiles} className='w-full aspect-auto lg:w-[500px]' />
			</div>
			<div className='flex flex-col -mt-10'>
				<h1
					style={{ color: userPreferences.color }}
					className='text-4xl pb-4 text-center font-semibold'
				>
					{title}
				</h1>
				<p
					style={{ color: userPreferences.shade.text.secondaryText }}
					className='text-base text-center whitespace-normal'
				>
					{paragraph}
				</p>
			</div>
		</div>
	);
};

export default NoData;
