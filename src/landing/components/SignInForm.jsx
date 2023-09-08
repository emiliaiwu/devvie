import { useContext} from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { SignInContext } from "../context";

const SignInForm = () => {
	const {
		email,
		password,
		handleSignIn,
		rememberPassword,
		setRememberPassword,
		isPasswordVisible,
		setIsPasswordVisible,
		error,
		emailErr,
		passwordErr,
		handleEmailChange,
		handlePasswordChange,
		isSubmitting,
		handleGoogleSignIn,
	} = useContext(SignInContext);

	const navigate = useNavigate();

	return (
		<div className='w-full pt-24 pb-12 px-6 flex flex-col justify-between items-left gap-8 '>
			<div className='mt-2'>
				<h1 className='font-Inter text-3xl font-[800] tracking-tight mb-1 text-center'>
					Welcome Back!
				</h1>
				<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
					Enter your details below
				</p>
			</div>

			<form
				className='flex flex-col gap-6'
				onSubmit={(e) => handleSignIn(e, navigate)}
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
							className='w-full py-3 pl-11 pr-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input'
						/>
						<AiOutlineUser className='absolute ml-4 text-gray-400 text-xl' />
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
							className='w-full py-3 pl-11 pr-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input '
						/>
						<AiOutlineLock className='absolute ml-4 text-gray-400 text-xl' />
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
						<label className='flex'>
							<input
								type='checkbox'
								checked={rememberPassword}
								onChange={() => setRememberPassword(!rememberPassword)}
								className='mr-2 cursor-pointer accent-green-600'
							/>{" "}
							Remember Me
						</label>

						<div>
							<Link
								to={"/forgot-password"}
								className='text-green-600 cursor-pointer border-b border-green-600 hover:text-green-700 hover:border-green-700'
							>
								Forgot Password?
							</Link>
						</div>
					</div>

					{/* SUBMIT BUTTON */}
					<button
						type='submit'
						disabled={!(email && password)}
						className={`${
							email && password ? "bg-green-500" : "bg-landingPrimary"
						} h-12 w-full rounded-md text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer flex justify-center items-center`}
					>
						{isSubmitting ? (
							<ClipLoader loading={true} color={"#B6FF9C"} size={32} />
						) : (
							"sign in"
						)}
					</button>
				</div>
			</form>

			<div className='w-full flex justify-center items-center relative'>
				<div className='w-full h-[1px] bg-gray-300 '></div>
				<span className='absolute text-sm font-DMSans text-gray-400 px-3 bg-white'>
					Or sign in with
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

export default SignInForm;
