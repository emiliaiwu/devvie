import { SortIcon } from "../data/icon";
import { useContext } from "react";
import { UserPreferencesContext } from "../context";

const Sort = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{
				color: userPreferences.shade.text.secondaryText,
				backgroundColor: userPreferences.shade.card,
			}}
			className={`flex text-sm items-center gap-1 py-2 px-3 ${userPreferences.border}`}
		>
			<SortIcon className='w-5 h-5' /> Sort: priority
		</div>
	);
};

export default Sort;
