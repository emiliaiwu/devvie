import { styles } from "../style/reusableStyles";
import { devvieboard } from "../assets";
import DevTestimonials from "./DevTestimonials";


const SignContainer = ({ children, paragraph, welcomeText }) => {
	const { container, flexCenter } = styles;

	return (
		<section className={`${container} ${flexCenter} bg-offwhite py-24 px-3 min-h-screen`}>
			<div className='w-[1000px] flex justify-center items-center rounded-2xl p-3 backdrop border border-white'>
				<div className='w-full bg-white rounded-2xl lg:flex overflow-hidden gap-4'>
					<div className='hidden lg:flex bg-black backdrop-blur-xl w-[50%] p-7 pb-10 flex-col justify-between gap-20'>
						<div>
							<img src={devvieboard} width={50} height={50} alt='logo' />
						</div>

						<div className='w-[380px]'>
							<h1 className='font-Syne text-white text-4xl leading-[45px] font-[500] mb-6'>
								{welcomeText}
							</h1>
							<p className='text-gray-400 font-DMSans text-base'>
								{paragraph}
							</p>
						</div>
						<div className='w-full flex justify-center items-center overflow-hidden'>
							<DevTestimonials />
						</div>
					</div>
					<div className='w-full lg:w-[50%] flex justify-center items-center'>{children}</div>
				</div>
			</div>
		</section>
	);
};

export default SignContainer;
