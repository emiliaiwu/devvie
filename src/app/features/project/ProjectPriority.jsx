import { priorityTags } from "../../data/projectData";
import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useState, } from "react";
import { DropdownArrowIcon } from "../../data/icon";
import { PriorityTag } from "../../components";

const ProjectPriority = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [isPriorityOpen, setIsPriorityOpen] = useState(false);
	const {selectedPriority, setSelectedPriority} = useContext(ProjectContext)

	const handleSelect = (tag) => {
		setIsPriorityOpen(false);
		setSelectedPriority(tag);
	};

	return (
		<div className='w-full relative z-[6]'>
			<div className='mb-3 px-1'>
				<h1 className='text-base'>Priority</h1>
			</div>
			<div className='w-full flex gap-5 flex-col'>
				<div
					style={{
						backgroundColor: userPreferences.shade.card,
						color: userPreferences.shade.text.secondaryText,
					}}
					className={`${userPreferences.border} flex justify-between px-4 py-3 items-center `}
				>
					<PriorityTag tag={selectedPriority} />
					<span
						onClick={() => setIsPriorityOpen(!isPriorityOpen)}
						className='cursor-pointer'
					>
						<DropdownArrowIcon
							className={`${
								isPriorityOpen ? "rotate-180" : ""
							} w-6 h-6 transition-all duration-200 ease`}
						/>
					</span>
				</div>
				{isPriorityOpen && (
					<div
						style={{
							backgroundColor: userPreferences.shade.card,
							borderColor: userPreferences.shade.other,
						}}
						className={`${userPreferences.border} absolute w-full md:w-[300px] top-28 px-3 py-4 border `}
					>
						<ul
							className={`w-full overflow-y-scroll scroll h-52 flex flex-col gap-4 p-2 `}
						>
							{priorityTags.map((tag, index) => (
								<li
									onClick={() => handleSelect(tag)}
									key={index}
									className='capitalize p- flex items-center cursor-pointer hover:opacity-70'
								>
									<PriorityTag tag={tag} />
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectPriority;
