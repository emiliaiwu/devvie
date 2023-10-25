import { useContext } from "react";
import { UserPreferencesContext } from "../../context";
import { BsArrowRight } from "react-icons/bs";
import { HoverAccentColor } from "../../components";
const ProjectCategory = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-full self-start flex flex-col justify-between gap-4 p-6 shadow-sm`}
		>
			<div className='flex justify-between items-center'>
				<h1
					style={{ color: userPreferences.shade.text.primaryText }}
					className='text-base font-medium'
				>
					Category
				</h1>

				<span style={{ color: userPreferences.color }} className='text-xs cursor-pointer hover:opacity-80'>
					See all category
				</span>
			</div>
			<div className='flex justify-between gap-3'>
				{/* personal category */}
				<div
					style={{ backgroundColor: userPreferences.shade.other }}
					className={`${userPreferences.border} p-3 w-full flex flex-col justify-between gap-2`}
				>
					<div
						style={{ backgroundColor: userPreferences.shade.background }}
						className='flex justify-center items-center p-1 rounded-full self-start'
					>
						🔥
					</div>

					<div>
						<HoverAccentColor
							className={"flex justify-between mb-1 items-center cursor-pointer"}
						>
							<span className='text-sm'>Personal</span>
							<span>
								<BsArrowRight />
							</span>
						</HoverAccentColor>

						<div
							style={{ color: userPreferences.shade.text.secondaryText }}
							className='text-xs'
						>
							12 projects
						</div>
					</div>
				</div>
				<div
					style={{ backgroundColor: userPreferences.shade.other }}
					className={`${userPreferences.border} p-3 w-full flex flex-col justify-between gap-2`}
				>
					<div
						style={{ backgroundColor: userPreferences.shade.background }}
						className='flex justify-center items-center p-1 rounded-full self-start'
					>
						⚡
					</div>

					<div>
						<HoverAccentColor
							className={"flex justify-between mb-1 items-center cursor-pointer"}
						>
							<span className='text-sm'>Teams</span>
							<span>
								<BsArrowRight />
							</span>
						</HoverAccentColor>
						<div
							style={{ color: userPreferences.shade.text.secondaryText }}
							className='text-xs'
						>
							3 projects
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCategory;
