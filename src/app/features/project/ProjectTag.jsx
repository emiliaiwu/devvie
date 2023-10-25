import {
	AddIcon,
	CancelCircleIcon,
	EditCircleIcon,
	TagIcon,
} from "../../data/icon";
import { ProjectContext, UserPreferencesContext } from "../../context";
import { useContext, useState, useRef, useEffect } from "react";
import { projectTags } from "../../data/projectData";
import { HoverAccentColor, Tag } from "../../components";
import ManageTags from "./ManageTags";
import { useScrollToDropdown } from "../../../hooks";

const ProjectTag = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [isTagOpen, setIsTagOpen] = useState(false);
	const [isManageTagOpen, setIsManageTagOpen] = useState(false);
	const maxTags = 2;
	const {
		setAllProjectTags,
		setSelectedProjectTags,
		allProjectTags,
		selectedProjectTags,
		generateID,
	} = useContext(ProjectContext);
	const dropdownRef = useRef(null);

	function handleSelectedTags(id, tag, color) {
		const exists = selectedProjectTags.some((item) => item.tag === tag);
		if (!exists && selectedProjectTags.length <= maxTags) {
			setSelectedProjectTags([...selectedProjectTags, { id, tag, color }]);
		}
	}

	useScrollToDropdown(isTagOpen, dropdownRef)

	// handle manage tags
	function handleManageTags() {
		setIsTagOpen(false);
		setIsManageTagOpen(true);
	}

	// remove tags
	function handleDeleteTags(tagToDelete) {
		const newProjectTags = selectedProjectTags.filter(
			(tag) => tag.id !== tagToDelete
		);
		setSelectedProjectTags(newProjectTags);
	}

	return (
		<div className="w-full">
			<div >
				<div className="text-base px-1 mb-3">
					Project Tags
					
				</div>

				<div
					style={{
						backgroundColor: userPreferences.shade.card,
						borderColor: userPreferences.shade.text.secondaryText,
						color: userPreferences.shade.text.primaryText,
					}}
					className={`${userPreferences.border} flex items-center justify-between px-4 py-2 `}
				>
					<div className='flex-1 min-h-[38px] flex items-center'>
						{selectedProjectTags.length > 0 ? (
							<div className='w-full h-full flex items-center'>
								<ul className='flex flex-wrap gap-3 items-center'>
									{selectedProjectTags.map((tag) => (
										<li key={tag.id}>
											<Tag color={tag.color}>
												<p>{tag.tag}</p>
												<span
													onClick={() => handleDeleteTags(tag.id)}
													className='ml-1 cursor-pointer'
												>
													<CancelCircleIcon className='w-4 h-4' />
												</span>
											</Tag>
										</li>
									))}
								</ul>
							</div>
						) : (
							<p
								style={{
									color: userPreferences.shade.text.secondaryText,
									}}
									className="text-base"
							>
								Add tags
							</p>
						)}
					</div>

					<div onClick={() => setIsTagOpen(true)} className='cursor-pointer'>
						<HoverAccentColor>
							<AddIcon className='w-6 h-6' />
						</HoverAccentColor>
					</div>
				</div>
			</div>

			{/* tags dropdown */}
			{isTagOpen && (
				<div
					ref={dropdownRef}
					onMouseLeave={() => setIsTagOpen(false)}
					style={{ backgroundColor: userPreferences.shade.card }}
					className={`${userPreferences.border}
					 w-full pt-3 mt-6`}
				>
					<div className='relative'>
						{selectedProjectTags.length > maxTags && (
							<div
								className={`${userPreferences.border} absolute inset-0 flex justify-center items-center `}
							>
								<h2 className='text-base'>Max Tags Reached</h2>
							</div>
						)}

						<div
							className={` ${
								selectedProjectTags.length > maxTags
									? "opacity-30 overflow-hidden"
									: "opacity-100 overflow-y-scroll"
							}  h-64  scroll ml-3 mr-2`}
						>
							<ul className='flex flex-col py-4 gap-1'>
								{allProjectTags.map((tag) => (
									<li
										key={tag.id}
										onClick={() =>
											handleSelectedTags(tag.id, tag.tag, tag.color)
										}
										className='text-white text-xs p-3 hover:bg-black mr-2 hover:bg-opacity-10 cursor-pointer'
									>
										<span
											style={{ backgroundColor: tag.color }}
											className='px-3 py-[5px] rounded-2xl '
										>
											{tag.tag}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div
						style={{
							color: userPreferences.shade.text.secondaryText,
							borderColor: userPreferences.shade.other,
						}}
						className='flex justify-center items-center p-4 border-t'
					>
						<div onClick={handleManageTags} className='cursor-pointer'>
							<HoverAccentColor
								className={
									"inline-flex items-center text-base justify-center gap-3"
								}
							>
								<EditCircleIcon className='w-5 h-5' /> <span>Manage Tags</span>
							</HoverAccentColor>
						</div>
					</div>
				</div>
			)}

			{isManageTagOpen && (
				<ManageTags
					setIsManageTagOpen={setIsManageTagOpen}
					generateID={generateID}
				/>
			)}
		</div>
	);
};

export default ProjectTag;
