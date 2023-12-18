import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LibraryContext, UserPreferencesContext } from "../../context";
import { AddIcon } from "../../data/icon";
import { BreadCrumb } from "../../components";
import Bookmark from "./Bookmark";
import AddLinkModal from "./AddLinkModal";
import { usePreventBodyScroll } from "../../../hooks";
const CollectionPage = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { userCollection, isAddLinkOpen, setIsAddLinkOpen } =
		useContext(LibraryContext);

	const { slug } = useParams();

	console.log(slug);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [slug]);

	const collection = userCollection?.find(
		(collection) => collection.slug === slug
	);

	console.log(collection)

	usePreventBodyScroll(isAddLinkOpen);

	return (
		<>
			<div className='flex justify-between items-center mb-6 px-2'>
				<BreadCrumb />
				{isAddLinkOpen && (
					<div
						className={`z-[1000] fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center pt-40 overflow-y-auto pb-20 `}
					>
						<div>
							<AddLinkModal collectionId={collection?.id} />
						</div>
					</div>
				)}
				<div>
					<button
						onClick={() => setIsAddLinkOpen(true)}
						style={{
							backgroundColor: userPreferences.color,
							color: `${userPreferences.isLightMode ? "white" : "black"}`,
						}}
						className={`${userPreferences.border} flex items-center gap-1 py-2 px-3 cursor-pointer hover:opacity-60 outline-none transition-all duration-150 ease`}
					>
						<AddIcon className='w-5 h-5' />
						<span className='text-sm'> new link</span>
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
					{collection?.links.map((link) => (
						<Bookmark key={link.title} link={link} />
					))}
				</div>
			</div>
		</>
	);
};

export default CollectionPage;
