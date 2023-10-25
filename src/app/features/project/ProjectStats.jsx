import { DeployedIcon, DoneIcon, LibraryIcon, TeamIcon } from "../../data/icon";
import { useContext } from "react";
import { UserPreferencesContext } from "../../context";

const ProjectStats = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	const data = [
		{ icon: LibraryIcon, num: 34, text: "Backlog", color: "#F01BF4" },
		{ icon: DoneIcon, num: 15, text: "Completed", color: "#47CB5B" },
		{ icon: TeamIcon, num: 3, text: "Collabs", color: "#F5B314" },
		{ icon: DeployedIcon, num: 10, text: "Deployed", color: "#3CDAF6" },
	];
	return (
		<div
			style={{
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-full flex flex-col justify-between p-6 shadow-sm gap-4`}
		>
			<div className='flex justify-between items-center'>
				<h1
					style={{ color: userPreferences.shade.text.primaryText }}
					className='text-base font-medium'
				>
					Project Stats
				</h1>

				<span
					style={{ color: userPreferences.color }}
					className='text-xs hover:opacity-80 cursor-pointer'
				>
					See full stats
				</span>
			</div>
			<div className='grid md:grid-cols-2 gap-3'>
				{data.map((item, index) => (
					<div
						key={index}
						style={{ backgroundColor: item.color }}
						className={`${userPreferences.border} p-3 flex flex-col text-black justify-center gap-1`}
					>
						<p className='text-[13px] mb-1 font-medium'>{item.text}</p>

						<div className='flex items-end gap-1'>
							<div className='text-3xl flex items-end font-semibold'>
								{item.num}
							</div>
							<span className='text-[10px] pb-1'>Projects</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectStats;
