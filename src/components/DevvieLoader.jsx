import { useContext } from "react";
import { UserPreferencesContext } from "../app/context";

const DevvieLoader = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className='flex justify-center items-center h-screen w-screen'
		>
			<div className='loader'>
				<div className='loader2'>
					<div></div>
					<div></div>
				</div>

				<div className='loader3'>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default DevvieLoader;
