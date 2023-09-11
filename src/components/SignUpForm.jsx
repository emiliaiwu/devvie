import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { SignUpContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { devvieboard } from "../assets";

const SignUpForm = () => {
	const {
		email,
		password,
		handleSignUp,
		isPasswordVisible,
		setIsPasswordVisible,
		error,
		emailErr,
		passwordErr,
		handleEmailChange,
		handlePasswordChange,
		isSubmitting,
		handleGoogleSignIn,
		userName,
		handleUserNameChange,
		nameError,
	} = useContext(SignUpContext);

	const navigate = useNavigate();

	return (
		<div className='w-full py-20 px-4 sm:px-6 flex flex-col justify-between items-left gap-10 '>
			<div className='flex justify-center items-center flex-col'>
				<div className='lg:hidden mb-8'>
					<img src={devvieboard} width={50} height={50} alt='logo' />
				</div>

				<h1 className='font-Kanit sm:text-4xl text-3xl font-[700] mb-2 text-center'>
					Hello Dev!
				</h1>
				<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
					Create a free account below
				</p>
			</div>

			<form
				className='flex flex-col gap-5'
				onSubmit={(e) => handleSignUp(e, navigate)}
			>
				{error && (
					<div className='text-red-500 font-DMSans text-sm font-bold mt-2'>
						{error}
					</div>
				)}
				<div>
					<label
						htmlFor='userName'
						className='relative flex justify-left items-center w-full'
					>
						<input
							type='text'
							placeholder='Enter your full name'
							name='userName'
							required
							value={userName}
							onChange={(e) => handleUserNameChange(e.target.value)}
							className='w-full pr-10  py-3 pl-11 font-DMSans outline-none border-[1.5px] border-gray-300 text-base rounded-md glow-input'
						/>
						<AiOutlineUser className='absolute ml-4 text-gray-400 text-xl' />
					</label>
					{nameError && (
						<div className='text-red-500 font-DMSans text-sm font-bold mt-2'>
							{nameError}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor='email'
						className='relative flex justify-left items-center w-full'
					>
						<input
							type='email'
							placeholder='Enter your email'
							name='email'
							onChange={(e) => handleEmailChange(e.target.value)}
							className='w-full pr-10  py-3 pl-11 font-DMSans outline-none border-[1.5px] border-gray-300 text-base rounded-md glow-input'
						/>
						<AiOutlineMail className='absolute ml-4 text-gray-400 text-xl' />
					</label>
					{emailErr && (
						<p className='text-red-500 font-DMSans text-sm font-bold pt-2'>
							{emailErr}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='password'
						className='relative flex justify-left items-center w-full mb-2'
					>
						<input
							type={isPasswordVisible ? "text" : "password"}
							value={password}
							name='password'
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
					{/* SUBMIT BUTTON */}
					<button
						type='submit'
						disabled={!(email && password && userName)}
						className={`${
							email && password && userName ? "bg-black" : "bg-gray-400"
						} h-12 w-full rounded-md text-base font-DMSans font-[500] text-white transition-all duration-200 ease cursor-pointer flex justify-center items-center`}
					>
						{isSubmitting ? (
							<ClipLoader loading={true} color={"#FFFFFF"} size={32} />
						) : (
							"create a free account"
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
					className='w-1/2 border-[1.5px]   border-gray-300 py-3 rounded-md flex justify-center items-center font-Syne font-[800] text-base glow-input cursor-pointer'
				>
					<FcGoogle size={25} className='mr-2' />{" "}
					<span className='hidden ss:inline-block'>Google</span>
				</button>
				<button className='w-1/2 border-[1.5px]  border-gray-300 py-3 rounded-md flex justify-center items-center font-Syne font-[800] text-base glow-input cursor-pointer'>
					<FaGithub size={25} className='mr-2' />{" "}
					<span className='hidden ss:inline-block'>Google</span>
				</button>
			</div>
			<div className='text-gray-400 font-DMSans text-sm text-center'>
				Already have an account?{" "}
				<Link to={"/signin"} className='font-bold text-black hover:text-blue'>
					Login
				</Link>
			</div>
		</div>
	);
};

export default SignUpForm;
