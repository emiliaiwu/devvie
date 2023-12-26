import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserPreferencesContext, UserProfileContext } from "../../context";
import NotFound from "../../../landing/pages/NotFound";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioAboutMe from "./PortfolioAboutMe";
import PortfolioSkills from "./PortfolioSkills";
import PortFolioProjects from "./PortFolioProjects";
import PortfolioProjectExperience from "./PortfolioProjectExperience";
import { AuthContext } from "../../../context";

const Portfolio = () => {
	const { username } = useParams();
	const { userPreferences } = useContext(UserPreferencesContext);
	const { userProfile } = useContext(UserProfileContext);
	// const { setLoading } = useContext(AuthContext);
	let portfolioData;

	if (userProfile && userProfile?.username === username) {
		portfolioData = userProfile;
	}

	return (
		<section
			style={{
				backgroundColor: userPreferences.shade.card,
				fontFamily: userPreferences.font.fontFamily,
				color: userPreferences.shade.text.primaryText,
			}}
			className='w-full min-h-screen mx-auto relative overflow-x-hidden pb-20'
		>
			<div>
				<PortfolioHeader
					userPreferences={userPreferences}
					userProfile={portfolioData}
				/>
				<div className='px-6 flex flex-col gap-10 min-h-screen'>
					<PortfolioAboutMe
						userProfile={portfolioData}
						userPreferences={userPreferences}
					/>
					<PortfolioSkills
						userProfile={portfolioData}
						userPreferences={userPreferences}
					/>
					<PortFolioProjects
						userProfile={portfolioData}
						userPreferences={userPreferences}
					/>
					<PortfolioProjectExperience
						userProfile={portfolioData}
						userPreferences={userPreferences}
					/>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
