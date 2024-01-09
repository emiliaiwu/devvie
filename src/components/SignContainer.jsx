import { styles } from "../style/reusableStyles";
import { signImg } from "../assets";
import { useScrollToTop } from "../hooks";

const SignContainer = ({ children, paragraph, welcomeText }) => {
	const { container, flexCenter } = styles;

	useScrollToTop();

	return (
		<section
			className={` ${flexCenter} bg-offwhite lg:py-24 px-3 py-6 min-h-screen `}
		>
			<div className='max-w-[1000px] w-full flex justify-center items-center rounded-2xl p-3 backdrop border border-white'>
				<div className='w-full bg-white rounded-2xl lg:flex overflow-hidden gap-4'>
					<div className='hidden lg:flex bg-black backdrop-blur-xl w-[50%] flex-col justify-between gap-16 relative'>
						{/* <div className='w-[350px] overflow-hidden'>
							<h1 className='font-DMSans text-white text-4xl leading-[50px] font-[600] mb-6 whitespace-normal'>
								{welcomeText}
							</h1>
							<p className='text-gray-400 font-DMSans text-base whitespace-normal'>
								{paragraph}
							</p>
						</div> */}

						<div className='w-full h-full'>
							<img src={signImg} className='w-full h-full object-cover' />
						</div>
					</div>
					<div className='w-full lg:w-[50%] flex justify-center items-center'>
						{children}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignContainer;
