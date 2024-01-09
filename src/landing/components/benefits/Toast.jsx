import { useContext } from "react";
import { UserPreferencesContext } from "../../../app/context";
import { BsCheck, BsExclamation, BsInfo, BsX } from "react-icons/bs";
import { CancelCircleIcon } from "../../../app/data/icon";

const Toast = () => {
    const { userPreferences } = useContext(UserPreferencesContext);
    const data = [
			{
				message: "Click the preview button to see your portfolio",
				title: "Profile Published!",
				icon: <BsCheck className='w-9 h-9 text-white' />,
				color: "#4CAF50",
			},
			{
				message: "An error occured, try again later.",
				title: "Profile Not Published!",
				icon: <BsX className='w-9 h-9 text-white' />,
				color: "#FF0000",
			},
			{
				message: "Please enter the project's title.",
				title: "Project Title Required!",
				icon: <BsExclamation className='w-9 h-9 text-white' />,
				color: "#FFC107",
			},

			{
				message: "This is an info toast",
				title: "Info Toast",
				icon: <BsInfo className='w-9 h-9 text-white' />,
				color: "#2196F3",
			},
		];
	return (
		<div className='flex flex-row justify-center w-full bg-whiteOff items-center min-h-screen py-40 gap-20'>
			<div className='flex flex-col gap-3 '>
				{data.map((toast, index) => (
					<div
						key={index}
						style={{
							backgroundColor: userPreferences.shade.background,
							borderColor: `${toast.color}`,
						}}
						className={`${userPreferences.border} relative border w-[260px] xs:w-[280px]  min-h-[100px] overflow-hidden flex justify-center items-center `}
					>
						<div className='flex justify-between items-center w-full h-full'>
							<div
								style={{
									"--hove-color": `${toast.color}`,
								}}
								className='h-full w-[100px] flex justify-center items-center'
							>
								<div
									style={{ backgroundColor: userPreferences.shade.background }}
									className='h-full w-full flex justify-center items-center'
								>
									<div
										style={{
											backgroundColor: `${toast.color}`,
										}}
										className='flex justify-center items-center circle2 '
									>
										{toast.icon}
									</div>
								</div>
							</div>
							<div className='w-full h-full pr-6 flex flex-col gap-1'>
								<h1
									style={{
										color: `${toast.color}`,
									}}
									className='text-base whitespace-normal'
								>
									{toast.title}
								</h1>
								<p
									style={{
										color: userPreferences.shade.text.secondaryText,
									}}
									className='text-xs whitespace-normal'
								>
									{toast.message}
								</p>
							</div>
						</div>
						<button
							// onClick={() => setToasting(false)}
							style={{
								color: userPreferences.shade.text.secondaryText,
							}}
							className='absolute right-3 top-3'
						>
							<CancelCircleIcon className='w-5 h-5 hover:scale-110 transition-all duration-200 ease' />
						</button>
					</div>
				))}
			</div>
			<div className='flex flex-col gap-3'>
				{data.map((toast, index) => (
					<div
						key={index}
						style={{
							backgroundColor: 'black',
							borderColor: `${toast.color}`,
						}}
						className={`${userPreferences.border} relative border w-[260px] xs:w-[280px]  min-h-[100px] overflow-hidden flex justify-center items-center `}
					>
						<div className='flex justify-between items-center w-full h-full'>
							<div
								style={{
									"--hove-color": `${toast.color}`,
								}}
								className='h-full w-[100px] flex justify-center items-center'
							>
								<div
									style={{ backgroundColor: 'black'}}
									className='h-full w-full flex justify-center items-center'
								>
									<div
										style={{
											backgroundColor: `${toast.color}`,
										}}
										className='flex justify-center items-center circle2 '
									>
										{toast.icon}
									</div>
								</div>
							</div>
							<div className='w-full h-full pr-6 flex flex-col gap-1'>
								<h1
									style={{
										color: `${toast.color}`,
									}}
									className='text-base whitespace-normal'
								>
									{toast.title}
								</h1>
								<p
									style={{
										color: userPreferences.shade.text.secondaryText,
									}}
									className='text-xs whitespace-normal'
								>
									{toast.message}
								</p>
							</div>
						</div>
						<button
							// onClick={() => setToasting(false)}
							style={{
								color: userPreferences.shade.text.secondaryText,
							}}
							className='absolute right-3 top-3'
						>
							<CancelCircleIcon className='w-5 h-5 hover:scale-110 transition-all duration-200 ease' />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Toast;
