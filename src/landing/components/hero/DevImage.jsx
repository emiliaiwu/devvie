import { PiCodeFill } from "react-icons/pi";

const DevImage = ({ className, image, bgColor, textColor, label, dotColor }) => {
	return (
		<div
			className={`${className}  inline-block`}
		>
			<div className='flex flex-col justify-center items-center relative'>
				<div>
					<img
						src={image}
						alt='developer'
						width={65}
						className='rounded-full'
					/>
				</div>
				<div
					className={`${bgColor} ${textColor}  py-1 px-2 text-[12px] font-DMSans tracking-tighter font-[600] rounded-full inline-flex justify-center items-center translate-y-[-20px]`}
				>
					{" "}
					<PiCodeFill size={15} className='mr-1' /> <span>{label}</span>
				</div>
				<div
					className={`${dotColor} w-2 h-2 rounded-full absolute top-[-10px] right-3`}
				></div>
			</div>
		</div>
	);
};

export default DevImage;
