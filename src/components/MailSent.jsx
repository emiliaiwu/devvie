import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";



const MailSent = ({ email, handleCancel, setResetPasswordEmailSent }) => {
	const openEmailClient = () => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<div className='flex justify-between items-center w-full flex-col gap-16 px-5 ss:px-10 lg:px-16'>
			<div className='flex flex-col justify-center items-center gap-8 w-full'>
				<div className='p-6 bg-offwhite rounded-3xl bg-opacity-50 inline-block'>
					<FontAwesomeIcon
						icon={faEnvelopeOpenText}
						className='text-[60px] text-black'
					/>
				</div>
				<div>
					<h1 className='font-Kanit text-3xl sm:text-4xl font-[600] tracking-tight text-center mb-3'>
						Check your mail!
					</h1>
					<p className='text-sm text-gray-400 font-DMSans font-[500] text-center w-[300px]'>
						{"We have sent the password reset instructions to your email."}
					</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-8 w-full'>
					{" "}
					<button
						onClick={openEmailClient}
						className='w-full font-DMSans font-[500] bg-black text-white py-3 rounded-md cursor-pointer '
					>
						Open Email
					</button>
					<div className='text-gray-400 font-DMSans font-[500] block text-center'>
						<span
							onClick={handleCancel}
							className='text-black font-[600] font-DMSans cursor-pointer hover:border-b-[1.5px] hover:border-black '
						>
							Skip
						</span>{" "}
						{"I'll confirm later"}
					</div>
				</div>
			</div>
			<div className='max-w-[320px] text-sm text-gray-400 font-DMSans text-center'>
				{"Didn't receive the email? Check your spam folder, or "}{" "}
				<span
					className='font-[600] text-black cursor-pointer hover:border-b-[1.5px] hover:border-black '
					onClick={() => setResetPasswordEmailSent(false)}
				>
					Try another email address
				</span>
			</div>
		</div>
	);
};

export default MailSent;
