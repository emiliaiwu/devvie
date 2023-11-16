import Column from "./Column";
import { useContext, useMemo, useRef } from "react";
import { ProjectContext, UserPreferencesContext } from "../context";
import { projectStatus } from "../data/projectData";

const Board = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { columns } = useContext(ProjectContext);
	const boardContainerRef = useRef(null);
	const shapesArray = projectStatus.map((statusItem) => statusItem.shape);

	return (
		<div
			ref={boardContainerRef}
			id='board-container'
			className='min-h-screen h-full overflow-x-scroll scroll-x flex gap-6 max-w-full board-container'
		>
			{columns.map((col, index) => (
				<Column
					key={col.id}
					color={col.color}
					statusName={col.title}
					icon={shapesArray[index]}
					columnId={col.id}
					projects={col.projects}
				/>
			))}
		</div>
	);
};

export default Board;
