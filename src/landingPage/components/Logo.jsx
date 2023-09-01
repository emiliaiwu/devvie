import { Link } from "react-router-dom";
import { devvie } from "../../assets/index";

const Logo = () => {
	return (
		<Link
			to={"/"}
			className='cursor-pointer hover:translate-y-[-5px] transition-all duration-200 ease-in-out'
		>
			<div className='flex items-end gap-1'>
				<img src={devvie} alt='logo' width={40} />
				<h1
					className={`font-DMSans text-3xl font-[700] tracking-tighter logo-name `}
				>
					Devvie
				</h1>
			</div>
		</Link>
	);
};

export default Logo;
