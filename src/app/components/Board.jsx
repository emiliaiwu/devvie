import Column from "./Column";
import { useContext, useMemo } from "react";
import { ProjectContext, UserPreferencesContext } from "../context";
import { projectStatus } from "../data/projectData";
import { DndContext } from "@dnd-kit/core";

const Board = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { columns} = useContext(ProjectContext);

	const memoizedShapes = useMemo(() => {
		const shapesArray = projectStatus.map((statusItem) => statusItem.shape);
		return shapesArray
	}, []);

	return (
		<DndContext>
			<div className='min-h-screen h-full overflow-x-scroll scroll-x flex gap-6 max-w-full'>
				{columns.map((col, index) => (
					<Column
						key={col.id}
						color={col.color}
						statusName={col.title}
						icon={memoizedShapes[index]}
						columnId={col.id}
						projects={col.projects}
					/>
				))}
			</div>
		</DndContext>
	);
};

export default Board;
