import { ClipLoader } from "react-spinners";
import { SignInContext, AuthContext } from "../context";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { authErrors } from "../firebase";
import { devvieboard } from "../assets";
import PasswordResetDone from "./PasswordResetDone";

const ResetPasswordForm = () => {
	const {
		isSubmitting,
		isPasswordVisible,
		setIsPasswordVisible,
		error,
		setError,
		setIsSubmitting,
	} = useContext(SignInContext);

	function useQuery() {
		const location = useLocation();
		return new URLSearchParams(location.search);
	}

	const query = useQuery();
	const { resetPassword } = useContext(AuthContext);
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [confirmError, setConfirmError] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
		useState(false);
	const [passwordChanged, setPasswordChanged] = useState(false);

	const handlePasswordChange = (e) => {
		setNewPassword(e.target.value);
		setError(" ");
		setConfirmError(" ");
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmNewPassword(e.target.value);
		setConfirmError(" ");
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();
		setError("");
		setConfirmError("");
		setIsSubmitting(true);
		setPasswordChanged(false);

		if (!newPassword) {
			setError("Enter your new password");
			setIsSubmitting(false);
			return;
		}

		if (!confirmNewPassword) {
			setConfirmError("Confirm your new password");
			setIsSubmitting(false);
			return;
		}

		if (newPassword !== confirmNewPassword) {
			setConfirmError("Passwords don't match");
			setIsSubmitting(false);
			return;
		} else {
			setPasswordConfirmed(newPassword);
		}

		try {
			await resetPassword(query.get("oobCode"), passwordConfirmed);
			setIsSubmitting(false);
			setPasswordChanged(true);
		} catch (err) {
			setIsSubmitting(false);
			const errorCode = err.code;
			let errorMessage =
				authErrors[errorCode] ||
				"An unknown error occurred. Please try again later.";
			setError(errorMessage);
		}
	};

	return (
		<div className='w-full pt-20 pb-12 px-6 flex flex-col justify-between items-center '>
			{passwordChanged ? (
				<PasswordResetDone />
			) : (
				<div className='flex justify-center items-center flex-col gap-10 w-full'>
					<div>
						<img src={devvieboard} width={50} height={50} alt='logo' />
					</div>
					<div className='mt-2'>
						<h1 className='font-Kanit text-3xl sm:text-4xl font-[800] tracking-tight mb-3 text-center'>
							Reset password
						</h1>
						<p className='text-sm text-gray-400 font-DMSans font-[500] text-center max-w-[300px]'>
							Your new password must be different from your previously used
							passwords.
						</p>
					</div>
					<form
						className='flex flex-col justify-between gap-6 w-full'
						onSubmit={handleResetPassword}
					>
						<div>
							<div className='mb-4'>
								<label
									htmlFor='password'
									className='relative flex justify-left items-center w-full mb-2'
								>
									<input
										type={isPasswordVisible ? "text" : "password"}
										value={newPassword}
										placeholder='6+ strong characters'
										onChange={handlePasswordChange}
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
								{error && (
									<p className='text-red-500 font-DMSans text-sm font-bold mt-2'>
										{error}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor='password'
									className='relative flex justify-left items-center w-full mb-2'
								>
									<input
										type={isConfirmPasswordVisible ? "text" : "password"}
										value={confirmNewPassword}
										placeholder='Confirm password'
										onChange={handleConfirmPasswordChange}
										className='w-full py-3 pl-11 pr-10 font-DMSans outline-none border-[1.5px] border-gray-300 text-base rounded-md glow-input '
									/>
									<AiOutlineLock className='absolute ml-4 text-gray-400 text-xl' />
									<button
										type='button'
										onClick={() =>
											setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
										}
										className='absolute right-0 mr-4 text-gray-400 text-lg outline-none'
									>
										{!isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
									</button>
								</label>
								{confirmError && (
									<p className='text-red-500 font-DMSans text-sm font-bold mt-2'>
										{confirmError}
									</p>
								)}
							</div>
						</div>
						<button
							type='submit'
							className='
					 h-12 w-full button-hover rounded-md text-base font-DMSans font-[600] bg-black text-white hover:bg-black transition-all duration-200 ease cursor-pointer flex justify-center items-center'
						>
							{isSubmitting ? (
								<ClipLoader loading={true} color={"#FFFFFF"} size={32} />
							) : (
								"Reset Password"
							)}
						</button>
					</form>
					<div className='max-w-[320px] text-sm text-gray-400 font-[500] font-DMSans text-center mt-10'>
						Remember password?{" "}
						<Link
							to={"/signin"}
							className='font-[600] text-black cursor-pointer hover:border-b-[1.5px] hover:border-black '
						>
							Login
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResetPasswordForm;
