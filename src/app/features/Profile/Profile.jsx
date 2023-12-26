import { useContext, useState } from "react";
import { UserPreferencesContext, UserProfileContext } from "../../context";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import WorkExperienceForm from "./WorkExperienceForm";
import ProjectExperienceForm from "./ProjectExperienceaForm";
import SocialsForm from "./SocialsForm";
import { useScrollToTop } from "../../../hooks";
import { CheckCircle } from "../../data/icon";
import { ClipLoader } from "react-spinners";
import CertificationForm from "./CertificationForm";

const Profile = () => {
	useScrollToTop();
	const { userPreferences } = useContext(UserPreferencesContext);
	const { saveUserProfile, userProfile, setUserProfile, isSaving } =
		useContext(UserProfileContext);

	const handleCheck = () => {
		setUserProfile((prev) => ({
			...prev,
			hasWorkExperience: !prev.hasWorkExperience,
		}));
	};

	return (
		<section
			style={{
				backgroundColor: userPreferences.shade.card,
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
			}}
			className=' md:pl-20 min-h-screen md:mt-0 mx-auto relative overflow-x-hidden '
		>
			<div className='md:py-24 md:pl-8 md:pr-10 px-6 flex flex-col gap-10 min-h-screen py-20'>
				<div className=''>
					<h1 className='text-4xl mb-2 font-semibold'>My Profile</h1>
					<p
						style={{ color: userPreferences.shade.text.secondaryText }}
						className='text-base'
					>
						Edit, Submit, Publish: Showcase your portfolio now!
					</p>
				</div>

				<Header />
				<div
					style={{ background: userPreferences.shade.background }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Enter your personal information:</h1>
					<PersonalInfo />
				</div>

				<div
					style={{ background: userPreferences.shade.background }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Enter your tech skills:</h1>
					<SkillsForm />
				</div>

				<div
					style={{ background: userPreferences.shade.background }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Show your notable projects:</h1>
					<ProjectsForm />
				</div>

				<div className='my-6'>
					<div className='flex justify-center items-center gap-4'>
						<div
							style={{
								backgroundColor: userPreferences.color,
								color: userPreferences.isLightMode ? "white" : "black",
							}}
							className={`${userPreferences.border} py-3 px-4 text-sm `}
						>
							Do you have work experience ?
						</div>
						<label className='cursor pointer flex justify-center items-center relative'>
							<input
								type='checkbox'
								className='w-5 h-5 bg-transparent opacity-0'
								checked={userProfile.hasWorkExperience}
								onChange={handleCheck}
							/>
							{userProfile.hasWorkExperience ? (
								<CheckCircle className='w-8 h-8 absolute cursor-pointer' />
							) : (
								<div className='w-7 h-7 rounded-full border-2 absolute cursor-pointer'></div>
							)}
						</label>
					</div>
				</div>

				{userProfile.hasWorkExperience ? (
					<div
						style={{ background: userPreferences.shade.background }}
						className={`${userPreferences.border} p-8`}
					>
						<h1 className='text-lg mb-6'>Add Work Experience:</h1>
						<WorkExperienceForm />
					</div>
				) : (
					<div
						style={{ background: userPreferences.shade.background }}
						className={`${userPreferences.border} p-8`}
					>
						<h1 className='text-lg mb-6'>Add Project Experience:</h1>
						<ProjectExperienceForm />
					</div>
				)}

				<div
					style={{ background: userPreferences.shade.background }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Contact / Socials</h1>
					<SocialsForm />
				</div>

				<div
					style={{ background: userPreferences.shade.background }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Certification</h1>
					<CertificationForm/>
				</div>

				<div className='flex gap-4 justify-end'>
					<button
						className={`${userPreferences.border} py-2 px-6 text-sm  `}
						type='button'
					>
						Cancel
					</button>

					<button
						style={{
							backgroundColor: userPreferences.color,
							color: userPreferences.isLightMode ? "white" : "black",
						}}
						className={`${userPreferences.border} py-2 px-4 text-sm h-10 w-32  `}
						type='button'
						onClick={saveUserProfile}
					>
						{isSaving ? (
							<ClipLoader loading={true} color={"#FFFFFF"} size={28} />
						) : (
							"Save"
						)}
					</button>
				</div>
			</div>{" "}
		</section>
	);
};

export default Profile;
