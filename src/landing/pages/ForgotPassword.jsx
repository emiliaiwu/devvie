import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignCard } from "../components";
import { SignInContext } from "../context";
import { AiOutlineUser } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BsSendCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const ForgotPassword = () => {
	const {
		error,
		email,
		isSubmitting,
		handleForgotPassword,
		setEmail,
		resetPasswordEmailSent,
		setResetPasswordEmailSent,
		setError,
	} = useContext(SignInContext);
	const navigate = useNavigate();
	const handleEmailChange = (newEmail) => {
		setEmail(newEmail);
		setError(" ");
	};

	const handleCancel = () => {
		setResetPasswordEmailSent(false);
		navigate("/signin");
	};

	return (
		<SignCard>
			<div className='w-full pt-24 pb-12 px-6 flex flex-col justify-between items-left gap-8 '>
				{resetPasswordEmailSent && (
					<div className='bg-black fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center'>
						<div className='relative z-[1001] flex flex-col justify-center items-center w-[300px] py-16 bg-white rounded-2xl'>
							<div className='bg-landingPrimary w-32 h-32 rounded-full flex justify-center items-center'>
								<BsSendCheck size={80} className='text-green-500' />
							</div>

							<div className='mt-5 flex justify-center items-center flex-col'>
								<h1 className='font-Inter text-3xl font-[800] mb-3 text-center'>
									Email Sent!
								</h1>
								<p className='text-sm text-gray-400 font-DMSans font-[500] text-center px-10'>
									Please check your Inbox and follow the instructions.
								</p>
							</div>
							<button
								onClick={handleCancel}
								className='absolute top-3 right-3 cursor-pointer group  hover:bg-green-500 rounded-full transition-all duration-200 ease p-1'
							>
								<RxCross2
									size={25}
									className='text-black group-hover:text-white '
								/>
							</button>
						</div>
					</div>
				)}
				<div className='mt-2'>
					<h1 className='font-Inter text-3xl font-[800] tracking-tight mb-1 text-center'>
						Forgot Password?
					</h1>
					<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
						Enter email to receive reset instructions
					</p>
				</div>
				<form
					onSubmit={handleForgotPassword}
					className='flex flex-col justify-between gap-5'
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
							<AiOutlineUser className='absolute ml-4 text-gray-400 text-xl' />
						</label>
						{error && (
							<div className='text-red-500 font-DMSans text-sm font-bold mt-2'>
								{error}
							</div>
						)}
					</div>
					<button
						type='submit'
						// disabled={!email}
						className={`${
							email && error ? "bg-green-500" : "bg-landingPrimary"
						} h-12 w-full rounded-md text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer flex justify-center items-center`}
					>
						{isSubmitting ? (
							<ClipLoader loading={true} color={"#B6FF9C"} size={32} />
						) : (
							"Reset Password"
						)}
					</button>
					<Link
						to={"/signin"}
						className='h-12 border border-gray-300 w-full rounded-md text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer flex justify-center items-center'
					>
						<BsArrowLeft className='mr-2' /> Back to Login
					</Link>
				</form>
			</div>
		</SignCard>
	);
};

export default ForgotPassword;
