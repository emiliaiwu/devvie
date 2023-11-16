import { useContext, useState } from "react";
import { UserPreferencesContext } from "../context";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { DueDateIcon, StartDateIcon, TechStackIcon } from "../data/icon";
import Tag from "./Tag";
import PriorityTag from "./PriorityTag";
import HoverAccentColor from "./HoverAccentColor";
import ProjectCardModal from "../features/project/ProjectCardModal";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({ project }) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [isProjectCardModalOpen, setIsProjectCardModalOpen] = useState(false);
	const stack = project.stack;

	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: project.id,
		data: project,
	});

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	if (isDragging) {
		return (
			<div ref={setNodeRef} style={style} className=' h-[300px] w-[320px] px-1'>
				<div
					style={{
						backgroundColor: userPreferences.shade.background,
						borderColor: userPreferences.color,
					}}
					className={`${userPreferences.border}  relative py-5 w-full h-full opacity-30  border-2 border-dashed `}
				></div>
			</div>
		);
	}
	return (
		<div ref={setNodeRef} style={style} className='mx-auto'>
			<div
				style={{ backgroundColor: userPreferences.shade.background }}
				className={`${userPreferences.border} w-[320px] relative py-5 `}
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
					<div className='flex items-center justify-between px-5'>
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

					<diV className='flex flex-col gap-5' {...attributes} {...listeners}>
						<div className='px-5'>
							<div className='flex gap-2 items-center flex-wrap'>
								{project.tag.map((tag) => (
									<Tag key={tag.id} color={tag.color}>
										{tag.tag}
									</Tag>
								))}
							</div>
						</div>

						<div className='px-5 flex flex-col gap-4 w-full'>
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
							className='pt-4 px-5 flex justify-between items-center w-full'
						>
							<div
								style={{ color: userPreferences.shade.text.primaryText }}
								className='flex items-center gap-2 text-sm w-full'
							>
								<TechStackIcon className='w-5 h-5' />
								<div
									style={{
										color: userPreferences.shade.text.secondaryText,
										borderColor: userPreferences.shade.text.secondaryText,
									}}
									className='flex items-center gap-3 justify-between w-full border-l pl-2'
								>
									<div className='flex items-center gap-3'>
										{stack.slice(0, 3).map((tech, index) => (
											<div
												style={{
													borderColor: userPreferences.shade.text.secondaryText,
												}}
												key={index}
												className={`text-[13px] justify-end`}
											>
												{tech}
											</div>
										))}
									</div>

									{stack.length > 3 && (
										<div
											style={{
												color: userPreferences.shade.text.primaryText,
												backgroundColor: userPreferences.shade.card,
											}}
											className=' text-xs flex items-center rounded-full w-6 h-6 justify-center'
										>
											+{stack.length - 3}
										</div>
									)}
								</div>
							</div>
						</div>
					</diV>
				</div>
			</div>
		</div>
	);
};

export default Card;
