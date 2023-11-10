import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "../../context";
import { priorityTags, projectStatus, projectTags } from "../data/projectData";
import { useAlphanumericID } from "../../hooks";
import { firestore } from "../../firebase";
import {
	addDoc,
	collection,
	query,
	updateDoc,
	getDocs,
	deleteDoc,
	doc,
	orderBy,
	getDoc,
} from "firebase/firestore";

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
	const generateID = useAlphanumericID();
	const { user, setLoading, loading } = useContext(AuthContext);
	const userId = user ? user.uid : null;
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
	const [newProjectTitle, setNewProjectTitle] = useState("");
	const [newProjectDescription, setNewProjectDescription] = useState("");
	const [selectedProjectTags, setSelectedProjectTags] = useState([]);
	const [selectedProjectTechStack, setSelectedProjectTechStack] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("Personal");
	const [isCreateNewProjectModalOpen, setIsCreateNewProjectModalOpen] =
		useState(false);
	const [selectedPriority, setSelectedPriority] = useState(priorityTags[0]);

	// add column ID to project Status array
	const projectColumns = projectStatus.map((statusItem) => ({
		id: generateID(),
		...statusItem,
	}));

	// columns
	function initializeColumns() {
		const newColumns = projectColumns.map((statusItem) => ({
			id: statusItem.id,
			color: statusItem.color,
			title: statusItem.status,
			projects: [],
		}));
		return newColumns;
	}
	const initialColumns = initializeColumns();
	const [columns, setColumns] = useState(initialColumns);
	const [projects, setProjects] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);
	const [projectToBeUpdated, setProjectToBeUpdated] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState({
		id: columns[0].id,
		title: columns[0].title,
		color: columns[0].color,
	});

	const memoizedColumns = useMemo(() => {
		return columns.map((column) => ({
			...column,
		}));
	}, [columns]);

	// FIREBASE -------------------------------------------------------------

	
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user) {
					// Fetch columns
					const columnsRef = collection(
						firestore,
						`projectBoard/${userId}/columns`
					);
					const orderedColumnsQuery = query(columnsRef, orderBy("order"));

					const columnsSnapshot = await getDocs(orderedColumnsQuery);

					const fetchedColumns = await Promise.all(
						columnsSnapshot.docs.map(async (doc) => {
							const columnData = doc.data();
							const columnId = doc.id;

							// Fetch projects within each column
							const projectsRef = collection(
								firestore,
								`projectBoard/${userId}/columns/${columnId}/projects`
							);
							const projectsSnapshot = await getDocs(projectsRef);
							const projectsData = projectsSnapshot.docs.map((projectDoc) => ({
								id: projectDoc.id,
								...projectDoc.data(),
							}));

							return {
								id: columnId,
								...columnData,
								projects: projectsData,
							};
						})
					);

					if (fetchedColumns.length === 0) {
						// If columns are empty, add default columns
						const defaultColumns = projectColumns.map((statusItem, index) => ({
							color: statusItem.color,
							title: statusItem.status,
							order: index,
						}));

						// Save default columns to Firestore
						await Promise.all(
							defaultColumns.map(async (columnData) => {
								const newColumnRef = await addDoc(columnsRef, columnData);
								return { id: newColumnRef.id, ...columnData };
							})
						);

						setColumns(defaultColumns);
					} else {
						setColumns(fetchedColumns);
					}
				}
			} catch (error) {
				console.error("Error fetching columns or projects:", error);
			}
		};

		fetchData();
	}, [user]);

	// RESET
	function reset() {
		setNewProjectTitle("");
		setNewProjectDescription("");
		setSelectedProjectTags([]);
		setSelectedPriority(priorityTags[0]);
		setSelectedProjectTechStack([]);
		setSelectedStartDate(selectedDate);
		setSelectedDueDate(selectedDate);
		setSelectedStatus(projectStatus[0]);
		setIsCreateNewProjectModalOpen(false);
	}

	// FETCH PROJECTS
	const fetchProjectsUnderColumn = async (columnId) => {
		try {
			// Reference to the projects collection under the specific column
			const projectsRef = collection(
				firestore,
				`projectBoard/${userId}/columns/${columnId}/projects`
			);

			// Get all documents from the projects collection
			const projectsSnapshot = await getDocs(projectsRef);

			// Map the projects data
			const projectsData = projectsSnapshot.docs.map((projectDoc) => ({
				id: projectDoc.id,
				...projectDoc.data(),
			}));

			// Update React state for columns
			setColumns((prevColumns) => {
				const updatedColumns = prevColumns.map((column) =>
					column.id === columnId
						? { ...column, projects: projectsData }
						: column
				);
				return updatedColumns;
			});

			console.log("Projects under the column:", projectsData);
		} catch (error) {
			console.error("Error fetching projects:", error);
		}
	};



	// CREATE PROJECT
	const createNewProject = async () => {
		try {
			const matchingColumn = columns.find(
				(column) => column.title === selectedStatus.title
			);

			if (matchingColumn) {
				const columnId = matchingColumn.id;
				await fetchProjectsUnderColumn(columnId);

				const columnRef = doc(
					firestore,
					`projectBoard/${userId}/columns/${columnId}`
				);

				const newProjectRef = await addDoc(collection(columnRef, "projects"), {
					title: newProjectTitle,
					description: newProjectDescription,
					tag: selectedProjectTags,
					priority: selectedPriority,
					stack: selectedProjectTechStack,
					startDate: selectedStartDate,
					dueDate: selectedDueDate,
					status: selectedStatus,
					columnId: columnId,
				});

				// Fetch the newly created project data
				const newProjectSnapshot = await getDoc(newProjectRef);
				const newProjectData = {
					id: newProjectSnapshot.id,
					...newProjectSnapshot.data(),
				};

				// Update React state for columns with the new project
				setColumns((prevColumns) => {
					const updatedColumns = prevColumns.map((column) =>
						column.id === columnId
							? { ...column, projects: [...column.projects, newProjectData] }
							: column
					);
					return updatedColumns;
				});
			} else {
				console.error(
					"Matching column not found for the project status:",
					selectedStatus
				);
			}
		} catch (error) {
			console.error("Error creating project:", error);
		} finally {
			// Reset form and close modal
			reset();
		}
	};

	// UPDATE PROJECT
	const handleUpdateProject = async () => {
		if (
			newProjectTitle.trim() === "" &&
			newProjectDescription.trim() === "" &&
			selectedStartDate.trim() === "" &&
			selectedDueDate.trim() === ""
		) {
			console.error("All fields are empty or contain only whitespace.");
			return;
		}

		const updatedProjectData = {
			id: projectToBeUpdated.id,
			title: newProjectTitle,
			description: newProjectDescription,
			tag: selectedProjectTags,
			priority: selectedPriority,
			stack: selectedProjectTechStack,
			startDate: selectedStartDate,
			dueDate: selectedDueDate,
			status: selectedStatus,
		};

		try {
			const projectRef = doc(
				firestore,
				`projectBoard/${userId}/columns/${projectToBeUpdated.columnId}/projects/${projectToBeUpdated.id}`
			);

			await updateDoc(projectRef, updatedProjectData);

			await fetchProjectsUnderColumn(projectToBeUpdated.columnId);

			console.log("Project updated successfully!");
		} catch (error) {
			console.error("Error updating project:", error.message);
		}

		setIsCreateNewProjectModalOpen(false);
	};

	// DELETE PROJECT
	const handleDeleteProject = async (projectId, columnId) => {
		try {
			// Reference to the specific project document
			const projectRef = doc(
				firestore,
				`projectBoard/${userId}/columns/${columnId}/projects/${projectId}`
			);

			// Delete the project document
			await deleteDoc(projectRef);

			// Fetch and display the updated projects under the column
			await fetchProjectsUnderColumn(columnId);

			console.log(columnId);

			console.log("Project deleted successfully!");
		} catch (error) {
			console.error("Error deleting project:", error);
		}
	};

	// date------------------------------------------------------
	const [selectedDueDate, setSelectedDueDate] = useState(null);
	const [selectedStartDate, setSelectedStartDate] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [isDueDateOpen, setIsDueDateOpen] = useState(false);
	const [isStartDateOpen, setIsStartDateOpen] = useState(false);

	useEffect(() => {
		const today = new Date();
		const day = today.getDate();
		// const dayOfWeek = daysOfWeek[today.getDay()];
		const monthOfYear = today.getMonth();
		const year = today.getFullYear();
		const formattedDay = String(day).padStart(2, "0");
		const formattedDate = `${formattedDay}-${monthOfYear}-${year}`;
		setSelectedStartDate(formattedDate);
		setSelectedDueDate(formattedDate);
		setSelectedDate(formattedDate);
	}, []);

	// TAGS
	const projectTagsWithID = projectTags.map((tagObj) => ({
		id: generateID(),
		tag: tagObj.tag,
		color: tagObj.color,
	}));

	const sortedTags = [...projectTagsWithID].sort((a, b) =>
		a.tag.localeCompare(b.tag)
	);
	const [allProjectTags, setAllProjectTags] = useState([...sortedTags]);

	// EDIT PROJECT
	const handleEditProject = (project) => {
		setIsCreateNewProjectModalOpen(true);
		setIsUpdating(true);
		setProjectToBeUpdated(project);
		setNewProjectTitle(project.title);
		setNewProjectDescription(project.description);
		setSelectedProjectTags(project.tag);
		setSelectedPriority(project.priority);
		setSelectedProjectTechStack(project.stack);
		setSelectedStartDate(project.startDate);
		setSelectedDueDate(project.dueDate);
		setSelectedStatus(project.status);
	};

	// HANDLE CANCEL CREATE NEW PROJECT
	const handleCancel = () => {
		setIsCreateNewProjectModalOpen(false);
		setNewProjectTitle("");
		setNewProjectDescription("");
		setSelectedProjectTags([]);
		setSelectedPriority(priorityTags[0]);
		setSelectedProjectTechStack([]);
		setSelectedStartDate(selectedDate);
		setSelectedDueDate(selectedDate);
		setSelectedStatus(projectStatus[0]);
		setIsUpdating(false);
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
				selectedDueDate,
				setSelectedDueDate,
				selectedStartDate,
				setSelectedStartDate,
				isDueDateOpen,
				setIsDueDateOpen,
				isStartDateOpen,
				setIsStartDateOpen,
				selectedProjectTechStack,
				setSelectedProjectTechStack,
				selectedCategory,
				setSelectedCategory,
				isCreateNewProjectModalOpen,
				setIsCreateNewProjectModalOpen,
				selectedPriority,
				setSelectedPriority,
				selectedStatus,
				setSelectedStatus,
				isUpdating,
				setIsUpdating,
				handleEditProject,
				handleDeleteProject,
				handleUpdateProject,
				projectColumns,
				handleCancel,
				columns: memoizedColumns,
				projects,
				setProjectToBeUpdated,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
