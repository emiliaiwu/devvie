import { Link } from "react-router-dom";
import { devvieboard } from "../../assets/index";

const Logo = () => {
	return (
		<Link
			to={"/"}
			className='cursor-pointer hover:translate-y-[-5px] transition-all duration-200 ease-in-out'
		>
			<div className='flex items-center gap-1'>
				<img src={devvieboard} alt='logo' width={30} height={30} />
				<h1
					className={`font-DMSans text-3xl font-[700] ml-1 text-white`}
				>
					Devvie
				</h1>
			</div>
		</Link>
	);
};

export default Logo;
