import { useContext } from "react";
import { LibraryContext, UserPreferencesContext } from "../../context";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import WorkExperienceForm from "./WorkExperienceForm";
import ProjectExperienceForm from "./ProjectExperienceaForm";
import SocialsForm from "./SocialsForm";

const Profile = () => {
	const { userPreferences } = useContext(UserPreferencesContext);
	return (
		<section
			style={{
				backgroundColor: userPreferences.shade.background,
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
			}}
			className=' md:pl-20 min-h-screen md:mt-0 mx-auto relative overflow-x-hidden '
		>
			<div className='md:py-24 md:pl-8 md:pr-10 px-6 flex flex-col gap-10 min-h-screen py-20'>
				<div className=''>
					<h1 className='text-4xl mb-2'>My Profile</h1>
					<p style={{ color: userPreferences.shade.text.secondaryText }} className="text-base">
						Edit, Submit, Publish: Showcase your portfolio now!
					</p>
				</div>

				<Header />
				<div
					style={{ background: userPreferences.shade.card }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Enter your personal information:</h1>
					<PersonalInfo />
				</div>

				<div
					style={{ background: userPreferences.shade.card }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Enter your tech skills:</h1>
					<SkillsForm />
				</div>

				<div
					style={{ background: userPreferences.shade.card }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Show your notable projects:</h1>
					<ProjectsForm />
				</div>

				<div
					style={{ background: userPreferences.shade.card }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Add Work Experience:</h1>
					<WorkExperienceForm />
				</div>
				<div
					style={{ background: userPreferences.shade.card }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>
						No Work Experience? Add Project Experience
					</h1>
					<ProjectExperienceForm />
				</div>
				<div
					style={{ background: userPreferences.shade.card }}
					className={`${userPreferences.border} p-8`}
				>
					<h1 className='text-lg mb-4'>Contact / Socials</h1>
					<SocialsForm />
				</div>
			</div>{" "}
		</section>
	);
};

export default Profile;
