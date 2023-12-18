import { useContext } from "react";
import { LibraryContext, UserPreferencesContext } from "../../context";
import CreateFolder from "./CreateFolder";
import FolderCard from "./FolderCard";
import BreadCrumb from "../../components/BreadCrumb";
import { AddIcon } from "../../data/icon";

const GeneralCollection = () => {
	const { userCollection } = useContext(LibraryContext);
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<>
			<div className='flex justify-between items-center mb-6 px-2'>
				<BreadCrumb />
				<div>
					<button
						style={{
							backgroundColor: userPreferences.color,
							color: `${userPreferences.isLightMode ? "white" : "black"}`,
						}}
						className={`${userPreferences.border} flex items-center gap-1 py-2 px-3 cursor-pointer hover:opacity-60 outline-none transition-all duration-150 ease`}
					>
						<AddIcon className='w-5 h-5' />
						<span className='text-sm'> new collection</span>
					</button>
				</div>
			</div>
			<div
				className={`${userPreferences.border} p-8 pb-10 min-h-screen`}
				style={{
					backgroundColor: userPreferences.shade.background,
				}}
			>
				<div className='flex gap-6 items-center'>
					{userCollection?.map((collection) => (
						<FolderCard key={collection.id} collection={collection} />
					))}
					<CreateFolder />
				</div>
			</div>
		</>
	);
};

export default GeneralCollection;
