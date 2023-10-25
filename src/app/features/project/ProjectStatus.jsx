import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useState, useRef } from "react";
import { projectStatus } from "../../data/projectData";
import { DropdownArrowIcon } from "../../data/icon";
import { useScrollToDropdown } from "../../../hooks";

const ProjectStatus = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const dropdownRef = useRef(null);
	const [selectedStatus, setSelectedStatus] = useState(projectStatus[1]);
	const [isStatusOpen, setIsStatusOpen] = useState();
	useScrollToDropdown(isStatusOpen, dropdownRef);

	const handleClick = (item) => {
		setSelectedStatus(item);
		setIsStatusOpen(false);
	};

	return (
		<div className='w-full relative'>
			<div className='text-base px-1 mb-3'>Project Status</div>
			<div
				style={{
					backgroundColor: userPreferences.shade.card,
					color: userPreferences.shade.text.secondaryText,
				}}
				className={`${userPreferences.border} flex justify-between px-4 py-3 items-center `}
			>
				<div className='flex items-center gap-1'>
					<span style={{ color: `${selectedStatus.color}` }}>
						{<selectedStatus.shape className='w-[13px] h-[13px] mr-1' />}
					</span>
					<span
						style={{ color: `${selectedStatus.color}` }}
						className='text-base capitalize'
					>
						{selectedStatus.status}
					</span>
				</div>
				<span
					onClick={() => setIsStatusOpen(!isStatusOpen)}
					className='cursor-pointer'
				>
					<DropdownArrowIcon
						className={`${
							isStatusOpen ? "rotate-180" : ""
						} w-6 h-6 transition-all duration-200 ease`}
					/>
				</span>
			</div>
			{isStatusOpen && (
				<div
					ref={dropdownRef}
					onMouseLeave={() => setIsStatusOpen(false)}
					style={{
						backgroundColor: userPreferences.shade.card,
						color: userPreferences.shade.text.primaryText,
					}}
					className={`${userPreferences.border} mt-6 py-2 pr-2 absolute top-20 w-full`}
				>
					<ul className='overflow-y-scroll scroll h-60'>
						{projectStatus.map((item, index) => (
							<li
								style={{ borderColor: userPreferences.shade.other }}
								key={index}
								className={`${
									projectStatus.length - 1 === index
										? "border-none"
										: "border-b"
								} flex items-center gap-2 p-3 pl-7 hover:bg-black hover:bg-opacity-20 cursor-pointer`}
							>
								<span style={{ color: `${item.color}` }}>
									{<item.shape className='w-[13px] h-[13px] mr-1' />}
								</span>
								<span
									style={{ color: `${item.color}` }}
									className='text-base capitalize'
								>
									{item.status}
								</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProjectStatus;
