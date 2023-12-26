const PortfolioAboutMe = ({ userPreferences, userProfile }) => {
	return (
		<div
			style={{ backgroundColor: userPreferences.shade.background }}
			className={`${userPreferences.border} p-10`}
		>
			<h1 className='text-xl mb-5 flex flex-row gap-1 items-center'>
				<span style={{color: userPreferences.color}}>{"//"}</span>About Me
			</h1>
			<p
				style={{ color: userPreferences.shade.text.secondaryText }}
				className='whitespace-normal leading-8'
			>
				{userProfile?.aboutYou}
			</p>
		</div>
	);
};

export default PortfolioAboutMe;
