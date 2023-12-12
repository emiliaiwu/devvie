import Column from "./Column";
import { useContext } from "react";
import { ProjectContext, UserPreferencesContext } from "../context";
import { projectStatus } from "../data/projectData";

const Board = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { columns } = useContext(ProjectContext);
	const shapesArray = projectStatus.map((statusItem) => statusItem.shape);

	return (
		<div className='overflow-x-scroll scroll-x flex items-start py-5 gap-6 max-w-full'>
			{columns.map((col, index) => (
				<Column
					key={col.id}
					color={col.color}
					statusName={col.title}
					icon={shapesArray[index]}
					columnId={col.id}
					projects={col.projects}
					column={col}
				/>
			))}
		</div>
	);
};

export default Board;
