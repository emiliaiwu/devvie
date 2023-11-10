import { useContext, useState } from "react";
import {  UserPreferencesContext } from "../context";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {  DueDateIcon, StartDateIcon } from "../data/icon";
import Tag from "./Tag";
import PriorityTag from "./PriorityTag";
import HoverAccentColor from "./HoverAccentColor";
import ProjectCardModal from "../features/project/ProjectCardModal";

const Card = ({ project }) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [isProjectCardModalOpen, setIsProjectCardModalOpen] = useState(false);
	const stack = project.stack;

	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className={`${userPreferences.border} w-full relative py-5 `}
		>
			{isProjectCardModalOpen && (
				<div className='absolute right-5 top-12'>
					<ProjectCardModal
						project={project}
						setIsOpen={setIsProjectCardModalOpen}
					/>
				</div>
			)}

			<div className='flex flex-col gap-5'>
				<div className='flex items-center justify-between px-6'>
					<div className='w-full inline-flex'>
						<PriorityTag tag={project.priority} />
					</div>
					<div
						onClick={() => setIsProjectCardModalOpen((pre) => !pre)}
						className='flex items-center gap-2 cursor-pointer'
					>
						<HoverAccentColor>
							<BiDotsVerticalRounded className='w-6 h-6' />
						</HoverAccentColor>
					</div>
				</div>

				<div className='px-6'>
					<div className='flex gap-2 items-center flex-wrap'>
						{project.tag.map((tag) => (
							<Tag key={tag.id} color={tag.color}>
								{tag.tag}
							</Tag>
						))}
					</div>
				</div>

				<div className='px-6 flex flex-col gap-4 w-full'>
					<div>
						<h1
							className='text-lg mb-2 capitalize w-full '
							style={{
								whiteSpace: "normal",
							}}
						>
							{project.title}
						</h1>

						<p
							style={{ color: userPreferences.shade.text.secondaryText }}
							className={`overflow-ellipsis whitespace-normal text-sm leading-6 line-clamp-3`}
						>
							{project.description}
						</p>
					</div>

					<div className='flex justify-between items-center w-full'>
						<div
							style={{
								color: userPreferences.shade.text.primaryText,
								backgroundColor: userPreferences.shade.card,
							}}
							className='flex items-center gap-1 p-2 rounded-md'
						>
							<StartDateIcon className='w-4 h-4 text-blue-600' />
							<span className=' text-xs'>{project.startDate}</span>
						</div>
						<div
							style={{
								color: userPreferences.shade.text.primaryText,
								backgroundColor: userPreferences.shade.card,
							}}
							className='flex items-center gap-1 p-2 rounded-md'
						>
							<DueDateIcon className='w-4 h-4 text-red-600' />
							<span className=' text-xs'>{project.dueDate}</span>
						</div>
					</div>
				</div>

				{/* FOOTER */}
				<div
					style={{
						borderTop: `1px solid ${userPreferences.shade.other}`,
					}}
					className='pt-5 px-6 flex justify-between items-center w-full'
				>
					<div
						style={{ color: userPreferences.shade.text.primaryText }}
						className='flex items-center gap-3 text-sm w-full'
					>
						Tech :
						<div
							style={{ color: userPreferences.shade.text.secondaryText }}
							className='flex items-center gap-2 justify-between w-full'
						>
							{stack.slice(0, 3).map((tech, index) => (
								<div key={index} className='text-[13px] justify-between'>
									{tech}
								</div>
							))}


							{stack.length > 3 && (
								<div
									style={{
										color: userPreferences.shade.text.primaryText,
									}}
									className=' text-xs flex items-center'
								>
									+{stack.length - 3}
								</div>
							)}
						</div>
					</div>
					{/* <div className='ml-2'>
						<TeamImg />
					</div>

					<div
						style={{ color: userPreferences.shade.text.secondaryText }}
						className='flex items-center gap-4 text-sm'
					>
						<div className='flex items-center gap-1'>
							<MsgIcon /> 11
						</div>
						<div className='flex items-center gap-1'>
							<FileIcon /> 5
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Card;
