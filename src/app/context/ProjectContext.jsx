import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { projectTags } from "../data/projectData";
import { useAlphanumericID } from "../../hooks";

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
	const { user, setLoading, loading } = useContext(AuthContext);
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
	const [newProjectTitle, setNewProjectTitle] = useState("");
	const [newProjectDescription, setNewProjectDescription] = useState("");
	const [selectedProjectTags, setSelectedProjectTags] = useState([]);
	const [categories, setCategories] = useState({
		Personal: [],
		Teams: [],
	});

	const generateID = useAlphanumericID();

	const projectTagsWithID = projectTags.map((tagObj) => ({
		id: generateID(),
		tag: tagObj.tag,
		color: tagObj.color,
	}));

	const sortedTags = [...projectTagsWithID].sort((a, b) => a.tag.localeCompare(b.tag));
	const [allProjectTags, setAllProjectTags] = useState([...sortedTags]);

	const newProject = {
		id: generateID,
		title: newProjectTitle,
		description: newProjectDescription,
		type: selectedProjectTags,
		Priority: "",
		Stack: [],
		DueDate: "",
		Category: "",
	};

	// const projectManagementSystem = {
	//   columns: [
	//     {
	//       columnName: 'To Do',
	//       projects: [
	//         {
	//           projectID: 1,
	//           projectName: 'Web Application Project',
	//           projectDescription: 'Description of the Web Application Project',
	//           status: 'In Progress', // Change 'In Progress' to 'Abandoned' if abandoned
	//           taskBoards: [
	//             {
	//               boardID: 1,
	//               boardName: 'Task Board 1',
	//               columns: [
	//                 {
	//                   columnName: 'To Do',
	//                   cards: [
	//                     {
	//                       cardID: 1,
	//                       title: 'Task 1',
	//                       description: 'Description for Task 1',
	//                       assignee: 'John Doe',
	//                       dueDate: '2023-10-25',
	//                       Tags: ['Priority: High', 'Feature'],
	//                       comments: [],
	//                       status: 'In Progress', // Change 'In Progress' to 'Abandoned' if abandoned
	//                     },
	//                     // Add more cards here
	//                   ],
	//                 },
	//                 // Add more columns for the task board here
	//               ],
	//             },
	//             // Add more task boards for this project here
	//           ],
	//         },
	//         // Add more projects under the 'To Do' column here
	//       ],
	//     },
	//     // Add more columns (statuses) here
	//   ],
	// };

	const createNewProject = () => {
		console.log("created");
	};

	return (
		<ProjectContext.Provider
			value={{
				createNewProject,
				setNewProjectTitle,
				isProjectModalOpen,
				newProjectTitle,
				newProjectDescription,
				setIsProjectModalOpen,
				setNewProjectDescription,
				setAllProjectTags,
				setSelectedProjectTags,
				allProjectTags,
				selectedProjectTags,
				generateID,
				categories,
				setCategories
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
