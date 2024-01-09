import { emilia } from "../../../assets";
import { styles } from "../../../style/reusableStyles";

const Founder = () => {
	const { boxWidth, flexCenter } = styles;
	return (
		<section
			id='founder'
			className={`min-h-screen relative flex items-center justify-center bg-white w-full flex-col font-DMSans py-[100px]`}
		>
			<div
				className={`${boxWidth} ${flexCenter} w-full h-full lg:mb-20 text-black flex flex-col gap-[120px] max-w-[1440px]`}
			>
				<div className='max-w-[700px] w-full flex justify-between py-28 relative bg-whiteOff rounded-3xl px-20'>
					<div className='flex flex-col gap-5'>
						<div>
							<div className='text-sm sm:text-base xl:text-lg xl:leading-8 font-semibold py-2 px-5 rounded-full  inline border border-landingPrimary text-landingPrimary'>
								Software Developer
							</div>
						</div>

						<h1 className='text-5xl font-bold'>Emilia Iwu.</h1>
						<p className='text-3xl font-bold whitespace-normal'>
							Hey there, I'm the Software <br /> Developer behind{" "}
							<span className='text-landingPrimary'>Devvie.</span>
						</p>
						<p></p>
					</div>
					<div className='w-[200px] h-[200px] rounded-full overflow-hidden absolute right-16 -top-16'>
						<img src={emilia} className='w-full h-full object-cover' />
					</div>
				</div>
			</div>{" "}
		</section>
	);
};

export default Founder;
