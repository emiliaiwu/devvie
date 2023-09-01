import { styles } from "../../style/reusableStyles";
import Form from "./Form";
import Button from "../components/Button";

const Login = () => {
	const { container, flexCenter } = styles;

	return (
		<section className={`${container} bg-black min-h-screen`}>
			<div className={`${flexCenter} `}>
				<div className=' my-10 py-10 w-full max-w-[500px]'>
					<div className='sign-box relative w-full'>
						<div className=' bg-white rounded-[40px] w-full'>
							<Form paragraph={"Enter your login details below"}  welcomeText={"Welcome Back!"} moreInfo={"Or sign in with"} buttonText={"sign me in"}/>
						</div>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 100 100'
							className='absolute right-[131px] top-0 w-[30px] rotate-90'
						>
							<path
								d='m100,0H0v100C0,44.77,44.77,0,100,0Z'
								fill='#000000'
							></path>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 100 100'
							className='absolute right-0 top-[84px] w-[30px] rotate-90'
						>
							<path
								d='m100,0H0v100C0,44.77,44.77,0,100,0Z'
								fill='#000000'
							></path>
						</svg>
						<div className='bg-black p-5 absolute right-0 top-0 rounded-bl-[40px] '>
							<Button
								url={"/signup"}
								text={"Sign up"}
								className={" text-black bg-landingPrimary block  px-10"}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
