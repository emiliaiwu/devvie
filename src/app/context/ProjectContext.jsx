import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "../../context";
import {
	priorityTags,
	projectStatus,
	projectTags,
	taskStatus,
} from "../data/projectData";
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

	const allTaskColumns = taskStatus.map((statusItem, index) => ({
		order: index,
		...statusItem,
	}));
	const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

	// add column ID to project Status array
	const projectColumns = projectStatus.map((statusItem) => ({
		id: generateID(),
		...statusItem,
	}));

	// columns
	const [columns, setColumns] = useState([]);
	const [taskColumns, setTaskColumns] = useState([]);
	const [originalColumns, setOriginalColumns] = useState(columns);
	const [allProjects, setAllProjects] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);
	const [projectToBeUpdated, setProjectToBeUpdated] = useState([]);

	const memoizedColumns = useMemo(() => {
		return columns.map((column) => ({
			...column,
		}));
	}, [columns]);

	const columnsId = useMemo(() => columns?.map((col) => col.id), [columns]);

	// filter Criteria
	const [filterStack, setFilterStack] = useState(null);
	const [filterTag, setFilterTag] = useState(null);
	const [filterPriority, setFilterPriority] = useState(null);

	// date------------------------------------------------------
	const [isNoDate, setIsNoDate] = useState(false);
	const [selectedDueDate, setSelectedDueDate] = useState(null);
	const [selectedStartDate, setSelectedStartDate] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [isDueDateOpen, setIsDueDateOpen] = useState(false);
	const [isStartDateOpen, setIsStartDateOpen] = useState(false);
	const [dateToCompare, setDateToCompare] = useState({
		startDate: "",
		dueDate: "",
	});
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const today = new Date();
		const hour = today.getHours();
		const day = today.getDate();
		// const dayOfWeek = daysOfWeek[today.getDay()];
		const monthOfYear = today.getMonth();
		const year = today.getFullYear();
		const formattedDay = String(day).padStart(2, "0");
		const formattedDate = `${formattedDay}-${monthOfYear}-${year}`;
		setSelectedStartDate(formattedDate);
		setSelectedDueDate(formattedDate);
		setSelectedDate(formattedDate);

		let currentGreeting = "";
		if (hour >= 5 && hour < 12) {
			currentGreeting = "Good morning";
		} else if (hour >= 12 && hour < 18) {
			currentGreeting = "Good afternoon";
		} else {
			currentGreeting = "Good evening";
		}

		setGreeting(currentGreeting);
	}, []);

	// URL SLUG
	const generateSlug = (title) => {
		const cleanedString = title.replace(/[^a-zA-Z0-9\s]/g, "");
		return cleanedString.replace(/\s+/g, "-").toLowerCase();
	};

	// PROJECT
	const initialProjectState = {
		title: "",
		slug: "",
		description: "",
		features: [],
		tag: [],
		priority: priorityTags[0],
		stack: [],
		startDate: selectedDate,
		dueDate: selectedDate,
		status: {},
	};

	const [newProject, setNewProject] = useState(initialProjectState);

	// Modal open and close state for creating projects
	const [isNewProjectOpen, setIsNewProjectOpen] = useState({
		status: false,
		tag: false,
		priority: false,
		stack: false,
	});

	const handleModalOpen = (key) => {
		const newValues = {
			status: false,
			tag: false,
			priority: false,
			stack: false,
		};
		newValues[key] = true;
		setIsNewProjectOpen(newValues);
	};

	const handleModalClose = () => {
		setIsNewProjectOpen({
			status: false,
			tag: false,
			priority: false,
			stack: false,
		});
	};

	// TASK--------------------------------------------------------------------
	const initialNewTask = {
		title: "",
		description: "",
		priority: priorityTags[0],
		list: [],
		tag: [],
		status: {},
	};

	const [newTask, setNewTask] = useState(initialNewTask);
	const [taskToBeUpdated, setTaskToBeUpdated] = useState([]);
	const [isNewTaskChildrenOpen, setNewTaskChildrenOpen] = useState({
		priority: false,
		tag: false,
		status: false,
	});

	const handleOpenTaskChildren = (key) => {
		const newValues = {
			priority: false,
			tag: false,
			status: false,
		};

		newValues[key] = true;
		setNewTaskChildrenOpen(newValues);
	};

	const handleCloseTaskChildren = () => {
		setNewTaskChildrenOpen({
			priority: false,
			tag: false,
			status: false,
		});
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

							// Fetch tasks for the first project in the column (modify as needed)
							const updatedColumns = await fetchTaskColumns(
								columnId,
								projectsData
							);

							return {
								id: columnId,
								...columnData,
								projects: updatedColumns,
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

						// if taskbaord is empty, add default taskboards

						const defaultTaskColumns = taskColumns.map((statusItem, index) => ({
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
						setTaskColumns(defaultTaskColumns);
						setOriginalColumns(defaultColumns);

						const allProjects = defaultColumns
							.map((col) => col.projects)
							.flat();
						setAllProjects(allProjects);

						setLoading(false);
					} else {
						setColumns(fetchedColumns);

						if (fetchedColumns) {
							setOriginalColumns(fetchedColumns);
						}
						const allProjectsFromFetchedColumns = fetchedColumns
							.map((col) => col.projects)
							.flat();
						setAllProjects(allProjectsFromFetchedColumns);
						setLoading(false);
					}
				}
			} catch (error) {
				console.error("Error fetching columns or projects:", error);
				setLoading(false);
			}
		};

		const fetchTaskColumns = async (columnId, projectsData) => {
			try {
				const updatedColumns = await Promise.all(
					projectsData.map(async (project) => {
						const projectId = project.id;
						const taskColumnsRef = collection(
							firestore,
							`projectBoard/${userId}/columns/${columnId}/projects/${projectId}/taskColumns`
						);
						const orderedTaskColumnsQuery = query(
							taskColumnsRef,
							orderBy("order")
						);

						const taskColumnsSnapshot = await getDocs(orderedTaskColumnsQuery);
						const taskColumnsData = taskColumnsSnapshot.docs.map(
							(taskColumnDoc) => ({
								id: taskColumnDoc.id,
								...taskColumnDoc.data(),
							})
						);

						const updatedTaskColumns = await fetchTasksUnderColumn(
							columnId,
							projectId,
							taskColumnsData
						);

						setTaskColumns(taskColumnsData);

						// Update the taskColumns within the project
						const updatedProject = {
							...project,
							taskColumns: updatedTaskColumns,
						};
						return updatedProject;
					})
				);

				console.log("TaskColumns under column and projects:", updatedColumns);
				return updatedColumns;
			} catch (error) {
				console.error("Error fetching taskColumns:", error);
				return [];
			}
		};

		const fetchTasksUnderColumn = async (
			columnId,
			projectId,
			taskColumnsData
		) => {
			try {
				const updatedTaskColumns = await Promise.all(
					taskColumnsData.map(async (taskColumn) => {
						const taskColumnId = taskColumn.id;
						const tasksRef = collection(
							firestore,
							`projectBoard/${userId}/columns/${columnId}/projects/${projectId}/taskColumns/${taskColumnId}/tasks`
						);

						const tasksSnapshot = await getDocs(tasksRef);
						const tasksData = tasksSnapshot.docs.map((taskDoc) => ({
							id: taskDoc.id,
							...taskDoc.data(),
						}));

						// Update the tasks property within the taskColumn
						const updatedTaskColumn = {
							...taskColumn,
							tasks: tasksData,
						};

						return updatedTaskColumn;
					})
				);

				return updatedTaskColumns;
			} catch (error) {
				console.error("Error fetching tasks:", error);
				return [];
			}
		};

		fetchData();
	}, [user]);

	useEffect(() => {
		const allProjects = columns.map((col) => col.projects).flat();
		setAllProjects(allProjects);
	}, [columns]);

	// RESET
	function reset() {
		setIsNoDate(false);
		setNewProject({
			title: "",
			slug: "",
			description: "",
			tag: [],
			priority: priorityTags[0],
			stack: [],
			features: [],
			startDate: selectedStartDate,
			dueDate: selectedDueDate,
			status: [],
		});
	}

	// FETCH COLUMNS, PROJECTS, TASK COLUMNS AND TASKS
	const fetchProjectsUnderColumn = async (columnId) => {
		setIsSubmitting(true);

		try {
			const projectsRef = collection(
				firestore,
				`projectBoard/${userId}/columns/${columnId}/projects`
			);

			const projectsSnapshot = await getDocs(projectsRef);
			const projectsData = projectsSnapshot.docs.map((projectDoc) => ({
				id: projectDoc.id,
				...projectDoc.data(),
			}));

			const updatedColumns = await Promise.all(
				projectsData.map(async (project) => {
					const projectId = project.id;
					const columnId = project.columnId;

					const taskColumnsRef = collection(
						firestore,
						`projectBoard/${userId}/columns/${columnId}/projects/${projectId}/taskColumns`
					);

					const orderedTaskColumnsQuery = query(
						taskColumnsRef,
						orderBy("order")
					);

					const taskColumnsSnapshot = await getDocs(orderedTaskColumnsQuery);
					const taskColumnsData = taskColumnsSnapshot.docs.map(
						(taskColumnDoc) => ({
							id: taskColumnDoc.id,
							...taskColumnDoc.data(),
						})
					);

					const updatedTaskColumns = await Promise.all(
						taskColumnsData.map(async (taskColumn) => {
							const taskColumnId = taskColumn.id;

							// Fetch tasks for each task column
							const tasksRef = collection(
								firestore,
								`projectBoard/${userId}/columns/${columnId}/projects/${projectId}/taskColumns/${taskColumnId}/tasks`
							);

							const tasksSnapshot = await getDocs(tasksRef);
							const tasksData = tasksSnapshot.docs.map((taskDoc) => ({
								id: taskDoc.id,
								...taskDoc.data(),
							}));

							// Add the fetched tasks to the task column
							const updatedTaskColumn = {
								...taskColumn,
								tasks: tasksData,
							};

							return updatedTaskColumn;
						})
					);

					// Update the project with the fetched task columns
					const updatedProject = {
						...project,
						taskColumns: updatedTaskColumns,
					};

					return updatedProject;
				})
			);

			// Update React state for columns
			setColumns((prevColumns) => {
				const updateColumns = prevColumns.map((column) =>
					column.id === columnId
						? { ...column, projects: updatedColumns }
						: column
				);
				return updateColumns;
			});

			setOriginalColumns((prevColumns) => {
				const updateColumns = prevColumns.map((column) =>
					column.id === columnId
						? { ...column, projects: updatedColumns }
						: column
				);
				return updateColumns;
			});

			console.log("Projects under the column:", projectsData);
			setIsSubmitting(false);
		} catch (error) {
			console.error("Error fetching projects, task columns, or tasks:", error);
			setIsSubmitting(false);
		}
	};

	// CREATE PROJECT
	const createNewProject = async () => {
		setIsSubmitting(true);
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
					slug: generateSlug(newProject.title),
					description: newProject.description,
					tag: newProject.tag,
					priority: newProject.priority,
					stack: newProject.stack,
					startDate: newProject.startDate,
					dueDate: newProject.dueDate,
					status: newProject.status,
					features: newProject.features,
					columnId: columnId,
				});

				// Fetch the newly created project data
				const newProjectSnapshot = await getDoc(newProjectRef);
				const newProjectData = {
					id: newProjectSnapshot.id,
					...newProjectSnapshot.data(),
				};

				// Create task columns under the new project
				const taskColumnsRef = doc(
					firestore,
					`projectBoard/${userId}/columns/${columnId}/projects/${newProjectData.id}`
				);

				const createdTaskColumns = await Promise.all(
					allTaskColumns.map(async (taskColumnData) => {
						const newTaskColumnRef = await addDoc(
							collection(taskColumnsRef, "taskColumns"),
							taskColumnData
						);
						return {
							id: newTaskColumnRef.id,
							projectId: newProjectData.id,
							...taskColumnData,
						};
					})
				);

				console.log(createdTaskColumns);

				setColumns((prevColumns) => {
					const updatedColumns = prevColumns.map((column) =>
						column.id === columnId
							? {
									...column,
									projects: [
										...column.projects,
										{ ...newProjectData, taskColumns: createdTaskColumns },
									],
							  }
							: column
					);
					return updatedColumns;
				});

				setOriginalColumns((prevColumns) => {
					const updatedColumns = prevColumns.map((column) =>
						column.id === columnId
							? {
									...column,
									projects: [
										...column.projects,
										{ ...newProjectData, taskColumns: createdTaskColumns },
									],
							  }
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
			setIsSubmitting(false);
			handleModalClose();
			reset();
			setIsCreateNewProjectModalOpen(false);
		}
		// Reset form and close modal
		setIsSubmitting(false);
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
					// Delete the project from the old column
					const projectRef = doc(
						firestore,
						`projectBoard/${userId}/columns/${projectToBeUpdated.columnId}/projects/${projectToBeUpdated.id}`
					);
					await deleteDoc(projectRef);

					// Set the project data in    the new column
					const newProjectRef = doc(
						firestore,
						`projectBoard/${userId}/columns/${newColumnId}/projects/${projectToBeUpdated.id}`
					);
					await setDoc(newProjectRef, updatedProjectDataWithColumnId);

					// taskColumns in old columns
					const taskColsRef = collection(
						firestore,
						`projectBoard/${userId}/columns/${projectToBeUpdated.columnId}/projects/${projectToBeUpdated.id}/taskColumns`
					);

					// Set taskColumns in the new column
					const newTaskColsRef = collection(
						firestore,
						`projectBoard/${userId}/columns/${newColumnId}/projects/${projectToBeUpdated.id}/taskColumns`
					);

					const querySnapshot = await getDocs(taskColsRef);
					querySnapshot.forEach(async (doc) => {
						const taskColumnData = doc.data(); // Get the data from the current document
						await addDoc(newTaskColsRef, taskColumnData); // Add the data to the new collection
						await deleteDoc(doc.ref); // Delete the document from the original collection
					});
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
				setIsSubmitting(false);
			}

			console.log("Project updated successfully!");
		} catch (error) {
			console.error("Error updating project:", error.message);
			setIsSubmitting(false);
		}
		setIsSubmitting(false);
		reset();
		setIsCreateNewProjectModalOpen(false);
		setIsUpdating(false);
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

			// Reference to the taskColumns subcollection
			const taskColumnsRef = collection(
				projectRef, // Use the projectRef as the parent document reference
				"taskColumns"
			);

			// Get all documents in the taskColumns subcollection
			const querySnapshot = await getDocs(taskColumnsRef);

			// Delete each document in the taskColumns subcollection
			querySnapshot.forEach(async (doc) => {
				await deleteDoc(doc.ref);
			});

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

	// UPDATE TO NEWPROJECT
	const handleProjectUpdate = (project) => {
		setProjectToBeUpdated(project);
		setNewProject((prev) => ({
			...prev,
			title: project.title,
			slug: generateSlug(project.title),
			description: project.description,
			tag: project.tag,
			priority: project.priority,
			stack: project.stack,
			startDate: project.startDate,
			dueDate: project.dueDate,
			status: project.status,
		}));
	};

	// EDIT PROJECT
	const handleEditProject = (project) => {
		setIsCreateNewProjectModalOpen(true);
		setIsUpdating(true);
		handleProjectUpdate(project);
	};

	// UPDATE Status
	const handleChangeStatus = (project) => {
		handleProjectUpdate(project);
	};

	// HANDLE CANCEL CREATE NEW PROJECT
	const handleCancel = () => {
		setIsCreateNewProjectModalOpen(false);
		setNewProject(initialProjectState);
		setIsUpdating(false);
		handleModalClose();
	};

	// HANDLE OWNER AND REPO NAMES TO FETCH COMMITS
	const handleFetchCommits = (project, owner, repoName) => {
		setProjectToBeUpdated(project);
		setNewProject((prev) => ({
			...prev,
			repoOwner: owner,
			repoName: repoName,
		}));
	};

	// FILTER
	const handleFilterProject = () => {
		const updatedColumns = columns.map((column) => {
			// Filter projects within each column
			const filteredProjects = column.projects.filter(
				(project) =>
					(filterStack === null || project.stack?.includes(filterStack)) &&
					(filterTag === null ||
						project.tag?.some((tag) => tag.tag === filterTag.tag)) &&
					(filterPriority === null ||
						project.priority?.tag === filterPriority.tag)
			);

			// Create a new column with filtered projects
			return {
				...column,
				projects: filteredProjects,
			};
		});

		// Update the state with the new columns
		setColumns(updatedColumns);
	};

	const handleClearFilters = () => {
		setColumns(originalColumns);
		setFilterStack(null);
		setFilterTag(null);
		setFilterPriority(null);
	};

	const handleClearFilter = () => {
		setColumns(originalColumns);
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
				isNewProjectOpen,
				newProject,
				setNewProject,
				setDateToCompare,
				handleModalClose,
				handleModalOpen,
				isSubmitting,
				columnsId,
				allProjects,
				filterStack,
				setFilterStack,
				filterTag,
				userId,
				setFilterTag,
				filterPriority,
				setFilterPriority,
				handleFilterProject,
				handleClearFilters,
				isNoDate,
				setIsNoDate,
				handleClearFilter,
				generateSlug,
				newTask,
				isNewTaskChildrenOpen,
				setNewTaskChildrenOpen,
				setNewTask,
				taskColumns,
				allTaskColumns,
				handleCloseTaskChildren,
				handleOpenTaskChildren,
				isNewTaskModalOpen,
				setIsNewTaskModalOpen,
				setIsSubmitting,
				setTaskToBeUpdated,
				fetchProjectsUnderColumn,
				taskToBeUpdated,
				initialNewTask,
				setOriginalColumns,
				handleFetchCommits,
				setColumns,
				greeting,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
