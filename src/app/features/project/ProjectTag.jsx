import {
	AddIcon,
	CancelCircleIcon,
	EditCircleIcon,
	MinusIcon,
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

	useScrollToDropdown(isTagOpen, dropdownRef);

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
		<div className='w-full relative z-[8]'>
			<div>
				<div className='text-base px-1 mb-3'>Project Tags</div>

				<div
					style={{
						backgroundColor: userPreferences.shade.card,
						borderColor: userPreferences.shade.text.secondaryText,
						color: userPreferences.shade.text.primaryText,
					}}
					className={`${userPreferences.border} flex items-center justify-between px-4 py-3 `}
				>
					<div className='flex-1 flex items-center h-8'>
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
								className='text-base'
							>
								Add tags
							</p>
						)}
					</div>

					<div className='cursor-pointer'>
						<HoverAccentColor>
							{isTagOpen ? (
								<span onClick={() => setIsTagOpen(false)}>
									<MinusIcon className='w-6 h-6' />
								</span>
							) : (
								<span onClick={() => setIsTagOpen(true)}>
									<AddIcon className='w-6 h-6' />
								</span>
							)}
						</HoverAccentColor>
					</div>
				</div>
			</div>

			{/* tags dropdown */}
			{isTagOpen && (
				<div
					onMouseLeave={() => setIsTagOpen(false)}
					ref={dropdownRef}
					style={{
						backgroundColor: userPreferences.shade.card,
						borderColor: userPreferences.shade.other,
					}}
					className={`${userPreferences.border}
					 w-[320px] pt-6 top-28 left-0 absolute border`}
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
							<ul className='flex flex-col gap-1'>
								{allProjectTags.map((tag) => (
									<li
										key={tag.id}
										onClick={() =>
											handleSelectedTags(tag.id, tag.tag, tag.color)
										}
										className='text-white text-xs p-3  mr-2  cursor-pointer'
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
