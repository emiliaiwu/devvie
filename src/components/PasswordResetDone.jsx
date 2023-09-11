import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PasswordResetDone = () => {
	return (
		<div className='flex justify-between items-center w-full flex-col gap-16 ss:px-10 lg:px-16 pb-14'>
			<div className='flex flex-col justify-center items-center gap-10 w-full'>
				<div className='p-6 bg-offwhite rounded-3xl bg-opacity-50 inline-block'>
					<RiLockPasswordFill className='text-[60px] text-black' />
				</div>
				<div>
					<h1 className='font-Kanit text-3xl sm:text-4xl font-[600] tracking-tight text-center mb-3'>
						Well done!
					</h1>
					<p className='text-sm text-gray-400 font-DMSans font-[500] text-center max-w-[300px] w-full'>
						{
							"Your password has been changed successfully. Login to access your Devvie account. Happy Coding!"
						}
					</p>
				</div>
				<div className='flex justify-center items-center w-full'>
					<Link className='w-full button-hover font-DMSans font-[500] bg-black text-white py-3 rounded-md cursor-pointer text-center'>
						Login to continue
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PasswordResetDone;
