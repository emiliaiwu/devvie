import { useContext } from "react";
import { UserPreferencesContext } from "../context";
import { TbTriangleFilled } from "react-icons/tb";
import Card from "./Card";

const Column = ({ icon: IconComponent, statusName, color }) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{
				color: userPreferences.shade.text.primaryText,
				fontFamily: userPreferences.font.fontFamily,
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-[280px] lg:w-[350px] py-4 px-1 flex-shrink-0 overflow-hidden`}
		>
			<div className='flex items-center justify-between mb-5 px-3'>
				<div className='flex items-center gap-1'>
					<span style={{ color: `${color}` }}>
						<IconComponent className='w-[13px] h-[13px] mr-1' />
					</span>
					<span style={{ color: `${color}` }} className='text-base capitalize'>
						{statusName}
					</span>{" "}
				</div>

				{/* number */}
				<div
					className='text-[13px] rounded-full flex justify-center items-center w-6 h-6'
					style={{
						color: userPreferences.shade.text.secondaryText,
						backgroundColor: userPreferences.shade.other,
					}}
				>
					<span>12</span>
				</div>
			</div>
			<div className='flex flex-col gap-4 overflow-y-scroll h-screen scroll pl-4 pr-2 '>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Column;
