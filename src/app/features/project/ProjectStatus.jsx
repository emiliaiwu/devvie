import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useState, useRef, createElement, useMemo } from "react";
import { projectStatus } from "../../data/projectData";
import { DropdownArrowIcon } from "../../data/icon";
import { HoverAccentColor } from "../../components";

const ProjectStatus = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { selectedStatus, setSelectedStatus, setSelectedColumnID, columns } =
		useContext(ProjectContext);
	const dropdownRef = useRef(null);
	const [isStatusOpen, setIsStatusOpen] = useState();
	const memoizedShapes = useMemo(() => {
		const shapesArray = projectStatus.map((statusItem) => statusItem.shape);
		return shapesArray;
	}, []);
	const handleClick = (item) => {
		setSelectedStatus({
			id: item.id,
			title: item.title,
			color: item.color,
		});
		setIsStatusOpen(false);
		setSelectedColumnID(item.id);
	};

	return (
		<div className='w-full relative z-10'>
			<div className='text-base px-1 mb-3'>Project Status</div>
			<div
				style={{
					backgroundColor: userPreferences.shade.card,
					color: userPreferences.shade.text.secondaryText,
				}}
				className={`${userPreferences.border} flex justify-between px-4 py-3 items-center  `}
			>
				<div className='flex items-center gap-1 px-1'>
					<span
						style={{ color: `${selectedStatus.color}` }}
						className='text-base capitalize'
					>
						{selectedStatus.title}
					</span>
				</div>
				<span
					onClick={() => setIsStatusOpen(!isStatusOpen)}
					className='cursor-pointer'
				>
					<HoverAccentColor>
						<DropdownArrowIcon
							className={`${
								isStatusOpen ? "rotate-180" : ""
							} w-6 h-6 transition-all duration-200 ease`}
						/>
					</HoverAccentColor>
				</span>
			</div>
			{isStatusOpen && (
				<div
					ref={dropdownRef}
					style={{
						backgroundColor: userPreferences.shade.card,
						color: userPreferences.shade.text.primaryText,
						borderColor: userPreferences.shade.other,
					}}
					className={`${userPreferences.border} top-24 w-[300px] absolute border pr-1 pt-4 pb-3`}
				>
					<ul className='overflow-y-scroll scroll h-60'>
						{columns.map((item, index) => (
							<li
								onClick={() => handleClick(item)}
								style={{ borderColor: userPreferences.shade.other }}
								key={item.id}
								className={`${
									projectStatus.length - 1 === index
										? "border-none"
										: "border-b"
								} flex items-center gap-2 p-3 pl-7 cursor-pointer`}
							>
								<span style={{ color: `${item.color}` }}>
									{createElement(memoizedShapes[index], {
										className: "w-[13px] h-[13px] mr-1",
									})}
								</span>
								<span
									style={{ color: `${item.color}` }}
									className='text-base capitalize'
								>
									{item.title}
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
