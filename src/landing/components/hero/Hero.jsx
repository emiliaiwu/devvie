import { styles } from "../../../style/reusableStyles";
import DevImage from "./DevImage";
import { devImages } from "../../data/db";
import Button from "../Button";
import DynamicText from "./DynamicText";

const Hero = () => {
	const { container, boxWidth, flexCenter } = styles;

	const positions = [
		"left-top",
		"left-middle",
		"left-bottom",
		"right-top",
		"right-middle",
		"right-bottom",
	];

	return (
		<section
			className={`${container} bg-black h-screen flex items-center justify-center`}
		>
			<div className={`${boxWidth} ${flexCenter} w-full h-full`}>
				<div className='relative w-full h-full'>
					{devImages.map((item, index) => (
						<DevImage
							key={index}
							className={`absolute ${positions[index]} hidden lg:block`}
							bgColor={item.bgColor}
							textColor={item.textColor}
							image={item.image}
							label={item.label}
							dotColor={item.dotColor}
						/>
					))}

					<div className='flex flex-col justify-between items-center gap-8 z-[-1]'>
						<div>
							<p className='bg-landingGrey text-white font-DMSans text-sm text-center inline-block py-2 px-4 rounded-full'>
								From Newbie to Ninja 🎉
							</p>
						</div>
						<div>
							<h1 className='text-white w-[320px] font-DMSans text-[45px] text-center leading-[55px] font-[800] sm:w-[70vw] md:text-[55px] lg:text-[65px] xl:text-[70px] md:leading-[70px] xl:w-[900px] tracking-tight xl:leading-[80px] overflow-hidden'>
								The Best Tool for Aspiring
								<DynamicText />
								Developers
							</h1>
						</div>
						<div className='mb-5'>
							<p className='text-landingGreyText text-sm text-center leading-6 w-[320px] md:w-[60vw] lg:w-[500px] md:text-base md:leading-7'>
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
			</div>
		</section>
	);
};

export default Hero;
