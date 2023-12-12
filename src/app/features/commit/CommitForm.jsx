import { useContext, useState } from "react";
import { ProjectContext, UserPreferencesContext } from "../../context";
import { ClipLoader } from "react-spinners";

const CommitForm = ({
	project,
	username,
	setUsername,
	repoName,
	setRepoName,
	setIsFetchingCommits,
}) => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const {
		handleFetchCommits,
		handleUpdateProject,
		isSubmitting,
		setProjectToBeUpdated,
		setNewProject,
		newProject,
		generateSlug,
	} = useContext(ProjectContext);
	const [owner, setOwner] = useState("");
	const [repo, setRepo] = useState("");

	const handleFetch = () => {
		// const formattedUsername = owner.trim().toLowerCase();
		// const formattedRepoName = repo.trim().toLowerCase();
		// handleFetchCommits(project, formattedUsername, formattedRepoName);
		handleUpdateProject();
		// setUsername(formattedUsername);
		// setRepoName(formattedRepoName);
	};

	const handleRepoOwner = (project, owner) => {
		const formattedUsername = owner.trim().toLowerCase();
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
			repoOwner: formattedUsername,
		}));
	};

	const handleRepoName = (project, repo) => {
		const formattedRepoName = repo.trim().toLowerCase();
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
			repoName: formattedRepoName,
		}));
	};

	console.log(newProject);

	return (
		<div>
			<div className='mb-5'>
				<h1 className='text-2xl'>Connect GitHub</h1>
				<p
					style={{
						color: userPreferences.shade.text.secondaryText,
					}}
					className='max-w-[400px] whitespace-normal text-sm'
				>
					Get a quick snapshot of your project's history.
				</p>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='flex flex-col gap-5'
			>
				<div className='max-w-[500px] w-full flex flex-col gap-1'>
					<label htmlFor='username' className='text-base'>
						Owner username
					</label>
					<input
						type='text'
						id='username'
						name='username'
						value={newProject.repoOwner}
						onChange={(e) => handleRepoOwner(project, e.target.value)}
						className={`${userPreferences.border} w-full py-[10px] px-4 bg-transparent text-sm outline-none `}
						placeholder='Enter github username'
						style={{ backgroundColor: userPreferences.shade.other }}
					/>
				</div>

				<div className='max-w-[500px] w-full flex flex-col gap-1'>
					<label htmlFor='repoName' className='text-base'>
						Project repository name
					</label>
					<input
						type='text'
						id='repoName'
						name='repoName'
						value={newProject.repoName}
						onChange={(e) => handleRepoName(project, e.target.value)}
						className={`${userPreferences.border} w-full py-[10px] px-4 bg-transparent outline-none text-sm`}
						placeholder='Enter project repo name'
						style={{ backgroundColor: userPreferences.shade.other }}
					/>
				</div>
				<button
					onClick={handleFetch}
					style={{
						backgroundColor: userPreferences.color,
						color: userPreferences.isLightMode ? "white" : "black",
					}}
					className={`${userPreferences.border} h-10 max-w-[500px] w-full mt-4 flex justify-center items-center hover:opacity-70 transition-all duration-200 ease`}
				>
					{isSubmitting ? (
						<ClipLoader loading={true} color={"#FFFFFF"} size={28} />
					) : (
						"Fetch commits"
					)}
				</button>
			</form>
		</div>
	);
};

export default CommitForm;
