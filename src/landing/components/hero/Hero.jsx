import { styles } from "../../../style/reusableStyles";
import Button from "../Button";
import DynamicText from "./DynamicText";
import HeroImages from "./HeroImages";

const Hero = () => {
	const { container, boxWidth, flexCenter } = styles;

	return (
		<section className={`h-screen flex items-center justify-center bg-whiteOff w-full`}>
			<div className={`${boxWidth} ${flexCenter} w-full h-full `}>
				<div className='flex flex-col justify-between items-center lg-gap-10 md:gap-12 gap-10 w-full lg:mt-32 mt-20 relative '>
					<div className="hidden md:flex">
						<HeroImages />
					</div>
					<div>
						<p className='bg-landingGrey text-white font-DMSans text-sm text-center inline-block py-2 px-4 rounded-full'>
							Your tech journey starts here! 🎉
						</p>
					</div>
					<div>
						<h1 className='text-black w-[320px] whitespace-break-spaces font-DMSans text-[35px] leading-[50px] sm:text-[45px] text-center sm:leading-[55px] font-[800] sm:w-[70vw] md:text-[55px] lg:text-[65px] xl:text-[70px] xxl:text-[80px] md:leading-[70px] xl:w-[900px] tracking-tight xl:leading-[100px] overflow-hidden'>
							The Best Tool for Aspiring
							<DynamicText />
							Developers
						</h1>
					</div>
					<div className='mb-5'>
						<p className='text-landingGreyText text-sm text-center leading-6 w-[320px] md:w-[60vw] whitespace-break-spaces lg:w-[500px] md:text-base md:leading-7'>
							Build, track and manage your personal portfolio projects. Save links, publish portfolio and stay productive while learning to code.
						</p>
					</div>
					<Button
						url={"signup"}
						text={"Build Your First Project"}
						className={" text-black bg-landingPrimary block"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
