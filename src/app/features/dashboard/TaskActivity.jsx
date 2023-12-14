import { useContext } from "react";
import { DashboardContext, UserPreferencesContext } from "../../context";
import { AddIcon } from "../../data/icon";
import { Link } from "react-router-dom";
import BarChart from "./BarChart";

const TasksActivity = () => {
	
	const { userPreferences } = useContext(UserPreferencesContext);
	const { tasksInColumns } = useContext(DashboardContext);

	return (
		<div
			style={{
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-full lg:w-2/3 h-[360px] flex flex-col justify-center items-center`}
		>
			

			{tasksInColumns ? (
				<div className='h-[300px] w-full px-3 flex justify-center items-center'>
					<BarChart />
				</div>
			) : (
				<div className='flex flex-col gap-6 px-6 justify-center items-center flex-1 w-full'>
					<div className='flex flex-col px-6 justify-center items-center w-full'>
						{" "}
						<h1 className='text-3xl font-semibold'>Oh No!</h1>
						<p
							style={{
								color: userPreferences.shade.text.secondaryText,
							}}
							className='text-lg'
						>
							There are no active tasks
						</p>
					</div>
					<Link
						to='/user/tasks'
						style={{
							backgroundColor: userPreferences.color,
							color: `${userPreferences.isLightMode ? "white" : "black"}`,
						}}
						className={`${userPreferences.border} flex items-center gap-2 py-2 px-4 cursor-pointer hover:opacity-60 outline-none`}
					>
						<AddIcon className='w-5 h-5' />
						<span className='text-sm'>New task</span>
					</Link>
				</div>
			)}
		</div>
	);
};

export default TasksActivity;
