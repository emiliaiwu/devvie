import { UserPreferencesContext } from "../../context";
import { useContext } from "react";
import ProjectContext from "../../context/ProjectContext";

const CreateNewProjectModal = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { isProjectModalOpen, setIsProjectModalOpen } =
		useContext(ProjectContext);

  if (!isProjectModalOpen) return null;
  console.log(isProjectModalOpen)

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			{/* overlay */}
			<div className='fixed inset-0 bg-black opacity-80'></div>

			<div>dddddddddddddddddddddddddddddddddddddddddddd</div>
		</div>
	);
};

export default CreateNewProjectModal;
