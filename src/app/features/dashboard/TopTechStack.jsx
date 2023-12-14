import { useContext } from "react";
import { UserPreferencesContext } from "../../context";
import AreaChart from "./AreaChart";

const TopTechStack = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{
				backgroundColor: userPreferences.shade.card,
				borderColor: userPreferences.shade.other,
			}}
			className={`${userPreferences.border} h-[420px] p-8  flex justify-center items-center w-full lg:w-2/3  `}
		>
			<div className='w-full h-[360px] flex justify-center items-center'>
				<AreaChart />
			</div>
		</div>
	);
};

export default TopTechStack;
