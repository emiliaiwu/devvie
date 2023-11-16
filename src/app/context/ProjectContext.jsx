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
	setDoc,
} from "firebase/firestore";

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
	const generateID = useAlphanumericID();
	const { user, setLoading } = useContext(AuthContext);
	const userId = user ? user.uid : null;
	const [isSubmitting, setIsSubmitting] = useState(false);

	// const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
	const [isCreateNewProjectModalOpen, setIsCreateNewProjectModalOpen] =
		useState(false);

	// add column ID to project Status array
	const projectColumns = projectStatus.map((statusItem) => ({
		id: generateID(),
		...statusItem,
	}));

	// columns
	const [columns, setColumns] = useState([]);
	const [projectss, setProjects] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);
	const [projectToBeUpdated, setProjectToBeUpdated] = useState([]);

	const memoizedColumns = useMemo(() => {
		return columns.map((column) => ({
			...column,
		}));
	}, [columns]);

	const columnsId = useMemo(() => columns?.map((col) => col.id), [columns])

	// date------------------------------------------------------
	const [selectedDueDate, setSelectedDueDate] = useState(null);
	const [selectedStartDate, setSelectedStartDate] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [isDueDateOpen, setIsDueDateOpen] = useState(false);
	const [isStartDateOpen, setIsStartDateOpen] = useState(false);
	const [dateToCompare, setDateToCompare] = useState({
		startDate: "",
		dueDate: "",
	});

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

	// PROJECT
	const initialProjectState = {
		title: "",
		description: "",
		tag: [],
		priority: priorityTags[0],
		stack: [],
		startDate: selectedDate,
		dueDate: selectedDate,
		status: {},
	};

	const [newProject, setNewProject] = useState(initialProjectState);

	// Modal open and close state
	const [isNewProjectOpen, setIsNewProjectOpen] = useState({
		status: false,
		tag: false,
		priority: false,
		stack: false,
	});

	const handleModalOpen = (key) => {
		setIsNewProjectOpen((prev) => {
			const newState = { ...prev };

			// Set the selected key to true, and all others to false
			Object.keys(newState).forEach((stateKey) => {
				newState[stateKey] = stateKey === key;
			});

			return newState;
		});
	};

	const handleModalClose = () => {
		setIsNewProjectOpen((prev) => {
			const newState = { ...prev };

			// Set all keys to false
			Object.keys(newState).forEach((stateKey) => {
				newState[stateKey] = false;
			});

			return newState;
		});
	};

	// Modal Errors
	const [newProjectErrors, setNewProjectErrors] = useState({
		title: "",
		description: "",
		tag: "",
		stack: "",
		status: "",
		date: "",
	});

	// Validate Date
	const validateDate = () => {
		const startDate = new Date(dateToCompare.startDate);
		startDate.setHours(0, 0, 0, 0);
		const dueDate = new Date(dateToCompare.dueDate);
		dueDate.setHours(0, 0, 0, 0);

		if (dateToCompare.startDate > dateToCompare.dueDate) {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				date: "Start date is greater than due date",
			}));
		}

		if (dateToCompare.startDate === dateToCompare.dueDate) {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				date: "Start and due dates are equal",
			}));
		}
	};

	// VALIDATE CREATE NEW PROJECT ERRORS
	const handleValidation = () => {
		// Reset errors
		setNewProjectErrors({
			title: "",
			description: "",
			tag: "",
			stack: "",
			status: "",
			date: "",
		});

		// validate date
		validateDate();

		// Validate title
		if (newProject.title.trim() === "") {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				title: "Title cannot be empty",
			}));
		}

		if (newProject.description.trim() === "") {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				description: "Description cannot be empty",
			}));
		}

		if (newProject.tag.length === 0) {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				tag: "Pick at least one tag",
			}));
		}

		if (newProject.stack.length === 0) {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				stack: "Pick at least one technology",
			}));
		}

		if (newProject.status.length === 0) {
			setNewProjectErrors((prevErrors) => ({
				...prevErrors,
				status: "Pick the project status",
			}));
		}
	};

	// FIREBASE -------------------------------------------------------------
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user) {
					setLoading(true);
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
						setLoading(false);
					} else {
						setColumns(fetchedColumns);
						setLoading(false);
					}
				}
			} catch (error) {
				console.error("Error fetching columns or projects:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [user]);

	// RESET
	function reset() {
		setIsCreateNewProjectModalOpen(false);
		setNewProject({
			title: "",
			description: "",
			tag: [],
			priority: priorityTags[0],
			stack: [],
			startDate: selectedStartDate,
			dueDate: selectedDate,
			status: [],
		});
	}

	// FETCH PTOJECTS
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
		setIsSubmitting(true);
		handleValidation();

		if (Object.values(newProjectErrors).some((value) => value !== "")) {
			alert("Validation failed. Project not created.");
			return;
		}

		try {
			const matchingColumn = columns.find(
				(column) => column.title === newProject.status.title
			);

			if (matchingColumn) {
				const columnId = matchingColumn.id;
				await fetchProjectsUnderColumn(columnId);

				const columnRef = doc(
					firestore,
					`projectBoard/${userId}/columns/${columnId}`
				);

				const newProjectRef = await addDoc(collection(columnRef, "projects"), {
					title: newProject.title,
					description: newProject.description,
					tag: newProject.tag,
					priority: newProject.priority,
					stack: newProject.stack,
					startDate: newProject.startDate,
					dueDate: newProject.dueDate,
					status: newProject.status,
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
					newProject.status
				);
			}
		} catch (error) {
			console.error("Error creating project:", error);
		} finally {
			// Reset form and close modal
			setIsSubmitting(false);
			reset();
			handleModalClose();
		}
	};

	// UPDATE PROJECT
	const handleUpdateProject = async () => {
		setIsSubmitting(true);
		const updatedProjectData = {
			...newProject,
			id: projectToBeUpdated.id,
			columnId: projectToBeUpdated.columnId,
		};

		try {
			const matchingColumn = columns.find(
				(column) => column.title === newProject.status.title
			);

			if (matchingColumn) {
				const newColumnId = matchingColumn.id;

				const updatedProjectDataWithColumnId = {
					...updatedProjectData,
					columnId:
						newColumnId !== projectToBeUpdated.columnId
							? newColumnId
							: projectToBeUpdated.columnId,
				};

				if (newColumnId !== projectToBeUpdated.columnId) {
					// Move project to the new column
					const projectRef = doc(
						firestore,
						`projectBoard/${userId}/columns/${projectToBeUpdated.columnId}/projects/${projectToBeUpdated.id}`
					);
					await deleteDoc(projectRef);

					const newProjectRef = doc(
						firestore,
						`projectBoard/${userId}/columns/${newColumnId}/projects/${projectToBeUpdated.id}`
					);
					await setDoc(newProjectRef, updatedProjectDataWithColumnId);
				} else {
					// Just update the project data if the status is the same
					const projectRef = doc(
						firestore,
						`projectBoard/${userId}/columns/${newColumnId}/projects/${projectToBeUpdated.id}`
					);
					await updateDoc(projectRef, updatedProjectDataWithColumnId);
				}

				// Fetch projects for the new and old columns
				await fetchProjectsUnderColumn(newColumnId);
				await fetchProjectsUnderColumn(projectToBeUpdated.columnId);
			}

			console.log("Project updated successfully!");
		} catch (error) {
			console.error("Error updating project:", error.message);
		}
		setIsSubmitting(false);
		reset();
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

		setNewProject((prev) => ({
			...prev,
			title: project.title,
			description: project.description,
			tag: project.tag,
			priority: project.priority,
			stack: project.stack,
			startDate: project.startDate,
			dueDate: project.dueDate,
			status: project.status,
		}));
	};

	// Update Status
	const handleChangeStatus = (project) => {
		setProjectToBeUpdated(project);

		setNewProject((prev) => ({
			...prev,
			title: project.title,
			description: project.description,
			tag: project.tag,
			priority: project.priority,
			stack: project.stack,
			startDate: project.startDate,
			dueDate: project.dueDate,
			status: project.status,
		}));
	};

	// HANDLE CANCEL CREATE NEW PROJECT
	const handleCancel = () => {
		setIsCreateNewProjectModalOpen(false);
		setNewProject(initialProjectState);
		setIsUpdating(false);
		handleModalClose();
	};

	return (
		<ProjectContext.Provider
			value={{
				createNewProject,
				setAllProjectTags,
				allProjectTags,
				generateID,
				selectedDueDate,
				setSelectedDueDate,
				selectedStartDate,
				setSelectedStartDate,
				isDueDateOpen,
				setIsDueDateOpen,
				isStartDateOpen,
				setIsStartDateOpen,
				isCreateNewProjectModalOpen,
				setIsCreateNewProjectModalOpen,
				isUpdating,
				setIsUpdating,
				handleEditProject,
				handleDeleteProject,
				handleUpdateProject,
				projectColumns,
				handleCancel,
				columns: memoizedColumns,
				setProjectToBeUpdated,
				handleChangeStatus,
				newProjectErrors,
				setNewProjectErrors,
				isNewProjectOpen,
				newProject,
				setNewProject,
				setDateToCompare,
				handleModalClose,
				handleModalOpen,
				isSubmitting,
				columnsId,
				projectss
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
