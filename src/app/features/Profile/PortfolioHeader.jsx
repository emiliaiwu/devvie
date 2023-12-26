import { Link } from "react-router-dom";
import { backupCover } from "../../../assets";
import {
	Call,
	Facebook,
	Github,
	Gmail,
	Instagram,
	Linkedin,
} from "../../data/icon";
import React from "react";
import { HoverAccentColor } from "../../components";

const PortfolioHeader = ({ userPreferences, userProfile }) => {
	const socialIcons = {
		facebook: Facebook,
		github: Github,
		gmail: Gmail,
		instagram: Instagram,
		linkedin: Linkedin,
	};
	return (
		<div
			className={`flex flex-col relative max-w-[100vw] overflow-hidden mb-10`}
		>
			<div className=''>
				{userProfile?.coverPhoto === null ? (
					<div className={`overflow-hidden`}>
						<img
							src={backupCover}
							className='w-full lg:h-[180px] h-[100px] object-cover'
						/>
					</div>
				) : (
					<div className={`overflow-hidden`}>
						<img
							src={userProfile.coverPhoto}
							className='w-full h-[100px] lg:h-[180px] object-cover'
						/>
					</div>
				)}
			</div>
			<div
				style={{ backgroundColor: userPreferences.shade.background }}
				className='flex h-full w-full pb-14 pt-4'
			>
				<div
					style={{ left: "50%", transform: "translateX(-50%)" }}
					className='border-[3px] rounded-full bg-transparent p-[7px] absolute top-[100px]'
				>
					<div className='rounded-full overflow-hidden '>
						<img
							src={userProfile?.userPhoto}
							className='w-[150px] h-[150px] object-contain'
						/>
					</div>
				</div>

				<div className='relative w-full'>
					<div className=' px-6 lg:px-14 flex flex-col justify-center items-center gap-1 text-center mt-[100px]'>
						<h1 className='text-[28px] font-semibold'>
							{userProfile.firstName} {userProfile.lastName}
						</h1>
						<p
							className='text-base'
							style={{ color: userPreferences.shade.text.secondaryText }}
						>
							{userProfile.location}
						</p>
						<p className='text-base flex flex-row gap-3 items-center text-center'>
							<span style={{color: userPreferences.color}}>{userProfile.jobTitle}</span>
							<span className='text-xl font-bold'>&middot;</span>
							<span style={{ color: userPreferences.shade.text.secondaryText }}>
								{userProfile.employmentType}
							</span>
						</p>
					</div>

					<div className='absolute right-14 top-2 flex flex-row-reverse gap-14'>
						{userProfile?.socials &&
							Object.keys(userProfile.socials).length > 0 && (
								<ul className='flex gap-4'>
									{Object.entries(userProfile.socials).map(
										([social, link]) =>
											link && (
												<li
													style={{
														borderColor:
															userPreferences.shade.text.secondaryText,
													}}
													key={social}
													className={`${userPreferences.border} p-3 border flex justify-center items-center`}
												>
													<HoverAccentColor>
														<Link to={link}>
															{socialIcons[social.toLowerCase()] &&
																React.createElement(
																	socialIcons[social.toLowerCase()],
																	{ style: { width: "22px", height: "22px" } }
																)}
														</Link>
													</HoverAccentColor>
												</li>
											)
									)}
								</ul>
							)}
						{userProfile.hireMe && (
							<div
								style={{ "--hove-color": userPreferences.color }}
								className='flex flex-row gap-3 items-center'
							>
								<div
									style={{
										backgroundColor: userPreferences.color,
									}}
									className='w-3 h-3 rounded-full circle pulse'
								></div>
								<h2 className='text-base'>Available for work</h2>
							</div>
						)}
					</div>
					<div
						style={{ "--hover-color": userPreferences.color }}
						className='flex items-center gap-5 absolute left-6 top-4'
					>
						
						{userProfile.remotely && (
							<div
								style={{ "--hove-color": userPreferences.color }}
								className='flex flex-row gap-3 items-center'
							>
								<div
									style={{ backgroundColor: userPreferences.color }}
									className='w-3 h-3 rounded-full circle pulse'
								></div>
								<h2 className='text-base'>Open to Remote jobs</h2>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioHeader;
