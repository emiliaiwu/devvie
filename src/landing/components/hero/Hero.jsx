import { styles } from "../../../style/reusableStyles";
import Button from "../Button";
import DynamicText from "./DynamicText";

const Hero = () => {
	const { container, boxWidth, flexCenter } = styles;

	return (
		<section className={` h-screen flex items-center justify-center`}>
			<div className={`${boxWidth} ${flexCenter} w-full h-full`}>
				<div className='flex flex-col justify-between items-center xl:gap-14 gap-6 w-full -mt-20'>
					<div>
						<p className='bg-landingGrey text-white font-DMSans text-sm text-center inline-block py-2 px-4 rounded-full'>
							From Newbie to Ninja 🎉
						</p>
					</div>
					<div>
						<h1 className='text-white w-[320px] whitespace-break-spaces font-DMSans text-[45px] text-center leading-[55px] font-[800] sm:w-[70vw] md:text-[55px] lg:text-[65px] xl:text-[70px] md:leading-[70px] xl:w-[900px] tracking-tight xl:leading-[100px] overflow-hidden'>
							The Best Tool for Aspiring
							<DynamicText />
							Developers
						</h1>
					</div>
					<div className='mb-5'>
						<p className='text-landingGreyText text-sm text-center leading-6 w-[320px] md:w-[60vw] whitespace-break-spaces lg:w-[500px] md:text-base md:leading-7'>
							Track your progress, build and showcase projects, manage time,
							increase productivity and get job offers with Devvie.
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
