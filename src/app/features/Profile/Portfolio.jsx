import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserPreferencesContext, UserProfileContext } from "../../context";
// import NotFound from "../../../landing/pages/NotFound";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioAboutMe from "./PortfolioAboutMe";
import PortfolioSkills from "./PortfolioSkills";
import PortFolioProjects from "./PortFolioProjects";
import PortfolioProjectExperience from "./PortfolioProjectExperience";
import PortfolioWorkExperiences from "./PortfolioWorkExperiences";

const Portfolio = () => {
	const { username } = useParams();
	const { userPreferences } = useContext(UserPreferencesContext);
	const { userProfile } = useContext(UserProfileContext);

	return (
		<section
			style={{
				backgroundColor: userPreferences.shade.background,
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
			}}
			className='w-full min-h-screen mx-auto relative overflow-x-hidden pb-20'
		>
			<div className='flex justify-center flex-col items-center'>
				<PortfolioHeader
					userPreferences={userPreferences}
					userProfile={userProfile}
				/>
				<div className='lg:px-6 sm:px-8 flex flex-col lg:gap-10 gap-6 min-h-screen max-w-[1440px] justify-center items-center w-full'>
					<PortfolioAboutMe
						userProfile={userProfile}
						userPreferences={userPreferences}
					/>
					<PortfolioSkills
						userProfile={userProfile}
						userPreferences={userPreferences}
					/>

					<PortFolioProjects
						userProfile={userProfile}
						userPreferences={userPreferences}
					/>
					<PortfolioProjectExperience
						userProfile={userProfile}
						userPreferences={userPreferences}
					/>
					<PortfolioWorkExperiences
						userProfile={userProfile}
						userPreferences={userPreferences}
					/>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
