import { styles } from "../style/reusableStyles";
import { devvieboard } from "../assets";
import DevTestimonials from "./DevTestimonials";


const SignContainer = ({ children, paragraph, welcomeText }) => {
	const { container, flexCenter } = styles;

	return (
		<section className={`${container} ${flexCenter} bg-offwhite lg:py-24 px-3 py-6 min-h-screen `}>
			<div className='max-w-[900px] w-full flex justify-center items-center rounded-2xl p-3 backdrop border border-white'>
				<div className='w-full bg-white rounded-2xl lg:flex overflow-hidden gap-4'>
					<div className='hidden lg:flex bg-black backdrop-blur-xl w-[50%] p-10 pb-10 flex-col justify-between gap-16'>
						<div>
							<img src={devvieboard} width={50} height={50} alt='logo' />
						</div>

						<div className='w-[350px]'>
							<h1 className='font-DMSans text-white text-4xl leading-[45px] font-[600] mb-6'>
								{welcomeText}
							</h1>
							<p className='text-gray-400 font-DMSans text-base'>
								{paragraph}
							</p>
						</div>
						<div className='w-full flex justify-center items-center overflow-hidden '>
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
