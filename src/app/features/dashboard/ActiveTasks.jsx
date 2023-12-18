import { useContext } from "react";
import { DashboardContext, UserPreferencesContext } from "../../context";
import { AddIcon } from "../../data/icon";
import { Link } from "react-router-dom";

const ActiveTasks = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const { activeTasksWithPercentage } = useContext(DashboardContext);

	const tasks =
		activeTasksWithPercentage.length > 4
			? activeTasksWithPercentage.slice(0, 5)
			: activeTasksWithPercentage;

	const colors = ["#ff9800", "#ff57d8", "#10b981", "#0ea5e9", "#ff5724"];

	return (
		<div
			style={{
				backgroundColor: userPreferences.shade.card,
			}}
			className={`${userPreferences.border} w-full lg:w-1/3  h-[360px] flex flex-col justify-center items-center`}
		>
			<h1
				style={{
					borderColor: userPreferences.shade.other,
				}}
				className='text-xl border-b pb-3 px-6 pt-6 w-full text-left'
			>
				Active Tasks
			</h1>

			{activeTasksWithPercentage.length !== 0 ? (
				<div className='flex flex-col gap-4 px-6 flex-1 w-full pt-4'>
					{tasks.map((task, index) => (
						<div
							key={task.title}
							style={{
								fontFamily: userPreferences.font.fontFamily,
								color: userPreferences.shade.text.secondaryText,
							}}
						>
							<div className='flex justify-between items-center mb-1'>
								<h1 className='text-base'>{task.title}</h1>{" "}
								<span className='text-sm'>{task.percentageChecked}%</span>
							</div>
							<div className='w-full'>
								<div
									style={{ backgroundColor: userPreferences.shade.other }}
									className='w-full h-[8px] rounded-full flex-1'
								>
									<div
										className='h-full transition-all ease-in-out duration-300 rounded-full'
										style={{
											backgroundColor: `${colors[index]}`,
											width: `${task.percentageChecked}%`,
										}}
									></div>
								</div>
							</div>
						</div>
					))}
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

export default ActiveTasks;