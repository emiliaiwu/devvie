import { useContext, useState } from "react";
import { UserPreferencesContext } from "../context";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CalendaIcon, FileIcon, MsgIcon } from "../data/icon";
import { techStack } from "../data/projectData";
import TeamImg from "./TeamImg";
const Card = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	const [showFullText, setShowFullText] = useState(false);
	const toggleText = () => {
		console.log(showFullText);
		setShowFullText(!showFullText);
	};

	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className={`${userPreferences.border} w-full  py-5 `}
		>
			<div className='flex flex-col gap-5'>
				<div className='flex items-center justify-between px-6'>
					<div className='flex gap-2 items-center'>
						<div
							style={{ backgroundColor: "#3F00FF" }}
							className='capitalize text-xs px-3 py-[5px] rounded-2xl text-white'
						>
							web app
						</div>
						<div
							style={{ backgroundColor: "#ff00bf" }}
							className='capitalize text-xs px-3 py-[5px] rounded-2xl text-white'
						>
							frontend
						</div>
					</div>
					<div>
						<BiDotsVerticalRounded className='w-6 h-6' />
					</div>
				</div>

				<div className='px-6 flex flex-col gap-4'>
					<div>
						<h1 className='text-lg mb-2'>Social Media Tool</h1>
						<p
							style={{ color: userPreferences.shade.text.secondaryText }}
							className={`${
								showFullText ? "line-clamp-none" : "line-clamp-3"
							} overflow-ellipsis whitespace-normal text-sm leading-6`}
							onClick={toggleText}
							onMouseLeave={() => setShowFullText(false)}
						>
							Sover simplifies content planning, creation and scheduling across
							various social media platforms. Include features for post
							previews, analytics, and automatic posting.
						</p>
					</div>
					<div>
						<div className='flex justify-between items-center mb-4'>
							<div className='capitalize text-xs'>
								<span
									style={{
										backgroundColor: "rgba(255,87,36,.15)",
									}}
									className='p-1 pr-2 rounded-md text-[#ff5724]'
								>
									🔥high priority
								</span>
							</div>

							<div
								style={{
									color: userPreferences.shade.text.primaryText,
									backgroundColor: userPreferences.shade.card,
								}}
								className='flex items-center gap-2 p-[5px] rounded-md'
							>
								<CalendaIcon className='w-4 h-4' />
								<span className=' text-xs'>2 Nov</span>
							</div>
						</div>

						{/* FRAMEWORKS */}
						<div
							style={{ color: userPreferences.shade.text.secondaryText }}
							className='flex items-center gap-3'
						>
							{techStack.map((tech, index) =>
								tech.name === "React" ||
								tech.name === "TypeScript" ||
								tech.name === "Tailwind" ||
								tech.name === "Firebase" ? (
									<div key={index} className='text-xs'>
										{tech.name}
									</div>
								) : null
							)}
							<span
								style={{ color: userPreferences.shade.text.primaryText }}
								className='w-5 h-5 text-xs flex justify-center items-center'
							>
								+4
							</span>
						</div>
					</div>
				</div>

				{/* FOOTER */}
				<div
					style={{
						borderTop: `1px solid ${userPreferences.shade.other}`,
					}}
					className='pt-5 px-6 flex justify-between items-center'
				>
					<div className='ml-2'>
						<TeamImg />
					</div>

					<div
						style={{ color: userPreferences.shade.text.secondaryText }}
						className='flex items-center gap-4 text-sm'
					>
						<div className='flex items-center gap-1'>
							<MsgIcon /> 11
						</div>
						<div className='flex items-center gap-1'>
							<FileIcon /> 5
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
