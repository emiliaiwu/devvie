import { useContext, useState } from "react";
import { ProjectContext, UserPreferencesContext } from "../../context";
import {
	DeleteIcon,
	EditCircleIcon,
	StatusIcon,
	TaskIcon,
} from "../../data/icon";
import { HoverAccentColor } from "../../components";
import { NavLink } from "react-router-dom";
import ProjectStatus from "./ProjectStatus";
import ChangeStatus from "./ChangeStatus";

const ProjectCardModal = ({ project, setIsOpen }) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const {
		handleEditProject,
		handleDeleteProject,
		handleUpdateProject,
		handleChangeStatus,
	} = useContext(ProjectContext);
	const [isStatusOpen, setIsStatusOpen] = useState(false);
	console.log(isStatusOpen);

	const handleUpdate = () => {
		handleUpdateProject();
		setIsOpen(false);
		setIsStatusOpen(false);
	};

	const handleChange = (project) => {
		handleChangeStatus(project);
		setIsStatusOpen(true);
	}

	const handleDelete = (project) => {
		handleDeleteProject(project.id, project.columnId);
		setIsOpen(false)
	}


	return (
		<div
			onMouseLeave={() => setIsOpen(false)}
			style={{
				backgroundColor: userPreferences.shade.other,
				color: userPreferences.shade.text.primaryText,
			}}
			className={`${userPreferences.border} w-44 h-44 flex`}
		>
			{isStatusOpen && (
				<div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80'>
					<div className='w-[320px] flex justify-center items-center flex-col gap-3'>
						<ChangeStatus project={project} />

						<button
							onClick={handleUpdate}
							style={{ backgroundColor: userPreferences.color }}
							className={`${userPreferences.border} w-full h-10 px-7 text-sm text-black font-medium hover:opacity-60 transition-opacity duration-200 ease`}
						>
							Update
						</button>
					</div>
				</div>
			)}

			<div className='flex flex-col gap-2 w-full h-full justify-center px-4'>
				<HoverAccentColor>
					<button
						onClick={() => handleEditProject(project)}
						className='flex items-center gap-2 text-sm cursor-pointer p-1'
					>
						<EditCircleIcon className='w-[18px] h-[18px]' />{" "}
						<span>Edit project</span>
					</button>
				</HoverAccentColor>
				<HoverAccentColor>
					<button
						onClick={() => handleChange(project)}
						className='flex items-center gap-2  text-sm cursor-pointer p-1'
					>
						<StatusIcon className='w-[18px] h-[18px]' />{" "}
						<span>Change status</span>
					</button>
				</HoverAccentColor>
				<HoverAccentColor>
					<button
						onClick={() => handleDelete(project)}
						className='flex items-center gap-2  text-sm cursor-pointer p-1'
					>
						<DeleteIcon className='w-[18px] h-[18px]' />{" "}
						<span>Delete project</span>
					</button>
				</HoverAccentColor>

				<HoverAccentColor>
					<NavLink className='flex items-center gap-2 text-sm cursor-pointer p-1'>
						<TaskIcon className='w-[18px] h-[18px]' />{" "}
						<span>Open taskboard</span>
					</NavLink>
				</HoverAccentColor>
			</div>
		</div>
	);
};

export default ProjectCardModal;
