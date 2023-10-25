import Column from "./Column";
import { useContext } from "react";
import { UserPreferencesContext } from "../context";
import { projectStatus } from "../data/projectData";

const Board = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<div className='min-h-screen h-full overflow-x-scroll scroll-x flex gap-6 max-w-full'>
			{projectStatus.map((col, index) => (
				<Column key={index} color={col.color} statusName={col.status} icon={col.shape} />
			) )}
		</div>
	);
};

export default Board;
