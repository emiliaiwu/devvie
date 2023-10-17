import { useContext } from "react";
import { UserPreferencesContext } from "../context";
import { FilterIcon } from "../data/icon";

const Filter = () => {
	const { userPreferences } = useContext(UserPreferencesContext);

	return (
		<div
			style={{
				backgroundColor: userPreferences.shade.card,
				color: userPreferences.shade.text.secondaryText,
			}}
			className={`flex text-sm items-center gap-1 py-2 px-3 ${userPreferences.border}`}
		>
			<FilterIcon className='w-4 h-5' /> Add filter
		</div>
	);
};

export default Filter;
