import TaskColumn from "./TaskColumn";
import { useContext } from "react";

import { useOutletContext } from "react-router-dom";
import { UserPreferencesContext } from "../../context";

const TaskBoard = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { project } = useOutletContext();
	const columns = project.taskColumns;
	const columnId = project.columnId;
	const projectId = project.id;
	
	return (
		<div className='overflow-x-scroll scroll-x flex items-start gap-6 max-w-full pb-6'>
			{columns?.map((col) => (
				<TaskColumn
					key={col.id}
					color={col.color}
					statusName={col.status}
					taskColumnId={col.id}
					tasks={col.tasks}
					column={col}
					projectColumnId={columnId}
					projectId={projectId}
				/>
			))}
		</div>
	);
};

export default TaskBoard;
