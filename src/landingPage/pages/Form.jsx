import { FaLock, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { SignAuth } from "../../context/SignContext";

const Form = ({ paragraph, welcomeText, moreInfo, buttonText }) => {
	const { setEmail, email, password, handleSubmit, setPassword } = SignAuth();
	console.log(email, password)



	return (
		<div className='w-full pt-24 pb-12 px-6 flex flex-col justify-between items-left gap-10 '>
			<div>
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
						className='w-full py-4 pl-10 font-DMSans outline-none border border-gray-300 text-base rounded-md hover:border-green-500'
					/>
					<MdEmail className='absolute ml-4 text-gray-400' />
				</label>
				<label
					htmlFor='paswword'
					className='relative flex justify-left items-center w-full'
				>
					<input
						type='password'
						placeholder='8+ strong characters'
						onChange={(e) => setPassword(e.target.value)}
						className='w-full py-4 pl-10 font-DMSans outline-none border border-gray-300 text-base rounded-md hover:border-green-500 '
					/>
					<FaLock className='absolute ml-4 text-gray-400' />
				</label>
				<button className='py-4 w-full bg-landingPrimary rounded-[40px] text-base font-Inter font-[600] text-black hover:bg-green-500 transition-all duration-200 ease'>
					{buttonText}
				</button>
			</form>
			<div className='w-full flex justify-center items-center relative'>
				<div className='w-full h-[1px] bg-gray-300 '></div>
				<span className='absolute text-sm font-DMSans text-gray-400 px-3 bg-white'>
					{moreInfo}
				</span>
			</div>

			<div className='w-full flex justify-between gap-8'>
				<button className='w-1/2 border hover:border-green-500  border-gray-300 py-3 rounded-md flex justify-center items-center font-Inter font-[800] text-base'>
					<FcGoogle size={30} className='mr-2' /> Google
				</button>
				<button className='w-1/2 border hover:border-green-500 border-gray-300 py-3 rounded-md flex justify-center items-center font-Inter font-[800] text-base'>
					<FaGithub size={30} className='mr-2' /> Github
				</button>
			</div>
		</div>
	);
};

export default Form;
