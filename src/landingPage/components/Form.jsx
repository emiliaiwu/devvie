import { useContext } from "react";
import { FaLock, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { SignupAndSigninContext } from "../../context";
import { Link, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = ({ paragraph, welcomeText, moreInfo, buttonText }) => {
	const {
		setEmail,
		handleSubmit,
		setPassword,
		agreeToTerms,
		setAgreeToTerms,
		rememberPassword,
		setRememberPassword,
		passwordVisible,
		setPasswordVisible,
	} = useContext(SignupAndSigninContext);

	const location = useLocation();

	return (
		<div className='w-full pt-24 pb-12 px-6 flex flex-col justify-between items-left gap-10 '>
			<div className='mt-2'>
				<h1 className='font-Inter text-3xl font-[800] tracking-tight mb-1 text-center'>
					{welcomeText}
				</h1>
				<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
					{paragraph}
				</p>
			</div>

			<form className='flex flex-col gap-7' onSubmit={handleSubmit}>
				<label
					htmlFor='email'
					className='relative flex justify-left items-center w-full'
				>
					<input
						type='email'
						placeholder='example@gmail.com'
						onChange={(e) => setEmail(e.target.value)}
						className='w-full py-4 pl-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input'
					/>
					<MdEmail className='absolute ml-4 text-gray-400 text-lg' />
				</label>
				<label
					htmlFor='paswword'
					className='relative flex justify-left items-center w-full mb-2'
				>
					<input
						type={passwordVisible ? "text" : "password"}
						placeholder='8+ strong characters'
						onChange={(e) => setPassword(e.target.value)}
						className='w-full py-4 pl-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input '
					/>
					<FaLock className='absolute ml-4 text-gray-400 text-base' />
					<button
						type='button'
						onClick={() => setPasswordVisible(!passwordVisible)}
						className='absolute right-0 mr-4 text-gray-400 text-lg'
					>
						{!passwordVisible ? <FaEyeSlash /> : <FaEye />}
					</button>
				</label>

				<div>
					<div className='flex justify-between text-sm font-DMSans font-semibold text-black mb-5'>
						{location.pathname === "/signup" ? (
							<label
								htmlFor='agreeToTerms'
								className='font-DMSans text-black text-sm font-semibold flex'
							>
								<input
									type='checkbox'
									id='agreeToTerms'
									name='agreeToTerms'
									checked={agreeToTerms}
									onChange={() => setAgreeToTerms(!agreeToTerms)}
									className='mr-2 cursor-pointer accent-green-600'
								/>
								I agree to the{" "}
								<Link className='ml-1 text-green-600 border-b border-green-600 cursor-pointer hover:text-green-700 hover:border-green-700'>
									Terms and Privacy
								</Link>
							</label>
						) : (
							<label className='flex'>
								<input
									type='checkbox'
									checked={rememberPassword}
									onChange={() => setRememberPassword(!rememberPassword)}
									className='mr-2 cursor-pointer accent-green-600'
								/>{" "}
								Remember Me
							</label>
						)}
						{location.pathname === "/signin" && (
							<div>
								<Link className='text-green-600 cursor-pointer border-b border-green-600 hover:text-green-700 hover:border-green-700'>
									Forgot Password?
								</Link>
							</div>
						)}
					</div>
					<button
						type='submit'
						disabled={location.pathname === "/signup" && !agreeToTerms}
						className='py-4 w-full bg-landingPrimary rounded-[40px] text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer'
					>
						{buttonText}
					</button>
				</div>
			</form>

			<div className='w-full flex justify-center items-center relative'>
				<div className='w-full h-[1px] bg-gray-300 '></div>
				<span className='absolute text-sm font-DMSans text-gray-400 px-3 bg-white'>
					{moreInfo}
				</span>
			</div>

			<div className='w-full flex justify-between gap-8'>
				<button className='w-1/2 border   border-gray-300 py-3 rounded-md flex justify-center items-center font-Inter font-[800] text-base glow-input cursor-pointer'>
					<FcGoogle size={25} className='mr-2' /> Google
				</button>
				<button className='w-1/2 border  border-gray-300 py-3 rounded-md flex justify-center items-center font-Inter font-[800] text-base glow-input cursor-pointer'>
					<FaGithub size={25} className='mr-2' /> Github
				</button>
			</div>
		</div>
	);
};

export default Form;
