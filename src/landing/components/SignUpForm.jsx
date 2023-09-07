import { useContext} from "react";
import { FaLock, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { SignUpContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const SignUpForm = () => {
	const {
		handleSignUp,
		agreeToTerms,
		setAgreeToTerms,
		isPasswordVisible,
		setIsPasswordVisible,
		error,
		emailErr,
		passwordErr,
		handleEmailChange,
		handlePasswordChange,
		isSubmitting,
		handleGoogleSignIn,
	} = useContext(SignUpContext);

	const navigate = useNavigate();

	return (
		<div className='w-full pt-24 pb-12 px-6 flex flex-col justify-between items-left gap-10 '>
			<div className='mt-2'>
				<h1 className='font-Inter text-3xl font-[800] tracking-tight mb-1 text-center'>
					Welcome to Devvie!
				</h1>
				<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
					Create a free account below
				</p>
			</div>

			<form
				className='flex flex-col gap-6'
				onSubmit={(e) => handleSignUp(e, navigate)}
			>
				<div>
					<label
						htmlFor='email'
						className='relative flex justify-left items-center w-full'
					>
						<input
							type='email'
							placeholder='example@gmail.com'
							name='email'
							onChange={(e) => handleEmailChange(e.target.value)}
							className='w-full py-3 pl-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input'
						/>
						<MdEmail className='absolute ml-4 text-gray-400 text-lg' />
					</label>
					{emailErr && (
						<p className='text-red-500 font-DMSans text-sm font-bold pt-2'>
							{emailErr}
						</p>
					)}

					{error && (
						<div className='text-red-500 font-DMSans text-sm font-bold mt-2'>
							{error}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor='password'
						className='relative flex justify-left items-center w-full mb-2'
					>
						<input
							type={isPasswordVisible ? "text" : "password"}
							placeholder='6+ strong characters'
							onChange={(e) => handlePasswordChange(e.target.value)}
							className='w-full py-3 pl-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input '
						/>
						<FaLock className='absolute ml-4 text-gray-400 text-base' />
						<button
							type='button'
							onClick={() => setIsPasswordVisible(!isPasswordVisible)}
							className='absolute right-0 mr-4 text-gray-400 text-lg outline-none'
						>
							{!isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
						</button>
					</label>
					{passwordErr && (
						<p className='text-red-500 font-DMSans text-sm font-bold mt-2'>
							{passwordErr}
						</p>
					)}
				</div>

				<div>
					<div className='flex justify-between text-sm font-DMSans font-semibold text-black mb-5'>
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
					</div>
					{/* SUBMIT BUTTON */}
					<button
						type='submit'
						disabled={location.pathname === "/signup" && !agreeToTerms}
						className={`${
							location.pathname === "/signup" && agreeToTerms
								? "bg-green-500"
								: "bg-landingPrimary"
						} h-14 w-full rounded-[40px] text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer`}
					>
						{isSubmitting ? (
							<ClipLoader loading={true} color={"#ffffff"} size={30} />
						) : (
							"sign up"
						)}
					</button>
				</div>
			</form>

			<div className='w-full flex justify-center items-center relative'>
				<div className='w-full h-[1px] bg-gray-300 '></div>
				<span className='absolute text-sm font-DMSans text-gray-400 px-3 bg-white'>
					Or sign up with
				</span>
			</div>

			{/* GOOGLE AND GITHUB */}
			<div className='w-full flex justify-between gap-8'>
				<button
					onClick={(e) => handleGoogleSignIn(e, navigate)}
					className='w-1/2 border   border-gray-300 py-3 rounded-md flex justify-center items-center font-Inter font-[800] text-base glow-input cursor-pointer'
				>
					<FcGoogle size={25} className='mr-2' /> Google
				</button>
				<button className='w-1/2 border  border-gray-300 py-3 rounded-md flex justify-center items-center font-Inter font-[800] text-base glow-input cursor-pointer'>
					<FaGithub size={25} className='mr-2' /> Github
				</button>
			</div>
		</div>
	);
};

export default SignUpForm;
