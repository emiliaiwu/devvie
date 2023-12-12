import { useState } from "react";
import CommitForm from "./CommitForm";
import GithubFetch from "./GithubFetch";
import { useOutletContext } from "react-router-dom";

const Commit = () => {
	const { project } = useOutletContext();
	// const [username, setUsername] = useState("");
	// const [repoName, setRepoName] = useState("");
	const [error, setError] = useState(null);
	const [commits, setCommits] = useState([]);

	return (
		<div className='flex flex-col gap-5'>
			{commits.length === 0 && (
				<CommitForm
					project={project}
					// username={username}
					// setUsername={setUsername}
					// repoName={repoName}
					// setRepoName={setRepoName}
				/>
			)}

			{/* {error !== null && <p className='text-red-600'>{error}</p>} */}

			<GithubFetch
				owner={project.repoOwner}
				repo={project.repoName}
				setCommits={setCommits}
				setError={setError}
				commits={commits}
			/>
		</div>
	);
};

export default Commit;
