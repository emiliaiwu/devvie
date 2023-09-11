import { useContext, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { SignInContext } from "../context";
import { devvieboard } from "../assets";

const SignInForm = () => {
	const {
		email,
		password,
		setPassword,
		setEmail,
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
		setEmailErr,
		setPasswordErr,
		setError,
	} = useContext(SignInContext);

	const navigate = useNavigate();
	const location = useLocation();

	// clear Errors
	useEffect(() => {
		setEmail("");
		setPassword("");
		setEmailErr("");
		setPasswordErr("");
		setError("");
		setIsPasswordVisible(false);
	}, [location]);

	return (
		<div className='w-full py-20 px-3  sm:px-6 flex flex-col justify-between items-left gap-10 '>
			<div className=' flex justify-center items-center flex-col'>
				<div className='lg:hidden mb-8'>
					<img src={devvieboard} width={50} height={50} alt='logo' />
				</div>
				<h1 className='font-Kanit text-4xl font-[800] mb-1 text-center'>
					Hello Again!
				</h1>
				<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
					Enter your details below
				</p>
			</div>

			<form
				className='flex flex-col gap-5'
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
							value={email}
							onChange={(e) => handleEmailChange(e.target.value)}
							className='w-full py-3 pl-11 pr-10 font-DMSans outline-none border-[1.5px] border-gray-300 text-base rounded-md glow-input'
						/>
						<AiOutlineMail className='absolute ml-4 text-gray-400 text-xl' />
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
							className='w-full py-3 pl-11 pr-10 font-DMSans outline-none border-[1.5px] border-gray-300 text-base rounded-md glow-input '
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
								className='mr-2 cursor-pointer accent-black'
							/>{" "}
							Remember Me
						</label>

						<div>
							<Link
								to={"/forgot-password"}
								className='text-red-600 cursor-pointer border-b border-red-600 hover:text-black hover:border-black'
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
							email && password ? "bg-black" : "bg-gray-400"
						} h-12 w-full rounded-md text-base font-DMSans font-[600] text-white hover:bg-black transition-all duration-200 ease cursor-pointer flex justify-center items-center`}
					>
						{isSubmitting ? (
							<ClipLoader loading={true} color={"#FFFFFF"} size={32} />
						) : (
							"Login"
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
					className='w-1/2 border-[1.5px]   border-gray-300 py-3 rounded-md flex justify-center items-center font-Syne font-[800] text-base glow-input cursor-pointer'
				>
					<FcGoogle size={25} className='mr-2' />{" "}
					<span className='hidden sm:inline-block'>Google</span>
				</button>
				<button className='w-1/2 border-[1.5px]  border-gray-300 py-3 rounded-md flex justify-center items-center font-Syne font-[800] text-base glow-input cursor-pointer'>
					<FaGithub size={25} className='mr-2' />{" "}
					<span className='hidden sm:inline-block'>Github</span>
				</button>
			</div>
			<div className='text-gray-400 font-DMSans text-sm text-center'>
				{"Don't have an account?"}{" "}
				<Link to={"/signup"} className='font-bold text-black hover:text-blue'>
					Sign up
				</Link>
			</div>
		</div>
	);
};

export default SignInForm;
