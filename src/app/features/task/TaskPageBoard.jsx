
import { useContext } from "react";
import TaskPageColumn from "./TaskPageColumn";
import DashboardContext from "../dashboard/DashboardContext";
import { UserPreferencesContext } from "../../context";
import { Link } from "react-router-dom";
import { HoverAccentColor } from "../../components";

const TaskPageBoard = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { taskGroup } = useContext(DashboardContext);
	const totalTasks = taskGroup.reduce((total, task) => {
		const count = total + task.tasks.length;
		return count;
	}, 0);

	return (
		<div className='flex flex-col gap-8'>
			<div className=''>
				<Link
					style={{ color: userPreferences.shade.text.secondaryText }}
					to='/user/projects'
					className='text-xs mb-6'
				>
					<HoverAccentColor>/ projects</HoverAccentColor>
				</Link>
				<div className='flex items-end gap-2 mb-1 mt-2'>
					<h1 className='text-4xl capitalize'>All tasks</h1>
					<span
						style={{ color: userPreferences.color }}
						className='text-base mb-1'
					>
						({totalTasks})
					</span>
				</div>
				<p
					style={{ color: userPreferences.shade.text.secondaryText }}
					className='text-base'
				>
					Click title to view task{" "}
				</p>
			</div>

			<div className='overflow-x-scroll scroll-x flex items-start gap-6 max-w-full pb-6'>
				{taskGroup?.map((col, index) => (
					<TaskPageColumn
						key={index}
						color={col.color}
						statusName={col.status}
						tasks={col.tasks}
						column={col}
						// projectName={columnId}
						// projectId={projectId}
					/>
				))}
			</div>
		</div>
	);
};

export default TaskPageBoard;
