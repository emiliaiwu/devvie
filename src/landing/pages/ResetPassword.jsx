import { SignCard } from "../components";
import { ClipLoader } from "react-spinners";
import { SignInContext, AuthContext } from "../context";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { authErrors } from "../../firebase";

const ResetPassword = () => {
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
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
	const navigate = useNavigate();

	const handleResetPassword = async (e) => {
		e.preventDefault();
		setError("");
		setConfirmError("");
		setIsSubmitting(true);

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
			navigate("/signin");
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
		<SignCard>
			<div className='w-full pt-24 pb-10 px-6 flex flex-col justify-between items-left gap-8 '>
				<div className='mt-2'>
					<h1 className='font-Inter text-3xl font-[800] tracking-tight mb-1 text-center'>
						Reset Password
					</h1>
					<p className='text-sm text-gray-400 font-DMSans font-[500] text-center'>
						Enter your new password
					</p>
				</div>
				<form
					className='flex flex-col justify-between gap-6'
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
									placeholder='Enter new password'
									onChange={(e) => setNewPassword(e.target.value)}
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
									onChange={(e) => setConfirmNewPassword(e.target.value)}
									className='w-full py-3 pl-11 pr-10 font-DMSans outline-none border border-gray-300 text-base rounded-md glow-input '
								/>
								<AiOutlineLock className='absolute ml-4 text-gray-400 text-xl' />
								<button
									type='button'
									onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
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
						className={`${
							newPassword && confirmNewPassword
								? "bg-green-500"
								: "bg-landingPrimary"
						} h-12 w-full rounded-md text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer flex justify-center items-center`}
					>
						{isSubmitting ? (
							<ClipLoader loading={true} color={"#B6FF9C"} size={32} />
						) : (
							"Reset Password"
						)}
					</button>
				</form>
			</div>
		</SignCard>
	);
};

export default ResetPassword;
