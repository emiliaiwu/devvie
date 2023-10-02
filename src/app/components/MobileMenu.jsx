import { devvieboard } from "../../assets";
import { ArrowCollaspse } from "../data/icon";
import { menuLeftBottom, menuLeftTop, menuLeftMiddle } from "../data/db";
import { AppLayoutContext } from "../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
	const { isMenuOpen, setIsMenuOpen } = useContext(AppLayoutContext);

	return (
		<nav
			className={`${
				isMenuOpen ? "left-0" : "left-[-300px]"
			} bg-[#060408] h-screen fixed px-3 pb-2 top-0 flex flex-col lg:left-0 transition-all duration-200 ease w-[250px] lg:hidden `}
		>
			<header className='flex items-center relative h-16 py-3'>
				<div className='flex justify-center items-center min-w-[55px] '>
					<img
						src={devvieboard}
						alt='logo'
						className='object-contain transition-none max-w-[30px]'
					/>
				</div>

				<h1 className='text-white font-DMSans font-[600] text-2xl w-full whitespace-nowrap'>
					Devvie
				</h1>

				<div
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className='absolute p-1 text-black transition-all duration-200 ease -right-5 bg-white rounded-full'
				>
					<ArrowCollaspse
						className={`${!isMenuOpen && "rotate-180"} w-6 h-6 `}
					/>
				</div>
			</header>

			<div className='flex-1 flex flex-col justify-between mt-6 pb-6'>
				<ul className='flex flex-col gap-1'>
					{menuLeftTop.map((menu, index) => (
						<li
							key={index}
							className='h-10 font-DMSans flex items-center relative group'
						>
							<Link to={menu.url} className='flex items-center h-full w-full'>
								<div className=' text-white flex justify-center items-center h-full min-w-[55px]'>
									{<menu.icon className='w-6 h-8' />}
								</div>

								<span className='menu-title text-base text-[#b3b3b3] h-full flex items-center flex-1'>
									{menu.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex flex-col gap-1'>
					{menuLeftMiddle.map((menu, index) => (
						<li
							key={index}
							className='h-10 font-DMSans flex items-center relative group'
						>
							<Link to={menu.url} className='flex items-center h-full w-full'>
								<div className=' text-white flex justify-center items-center h-full min-w-[55px]'>
									{<menu.icon className='w-6 h-8' />}
								</div>

								<span className='menu-title text-base text-[#b3b3b3] h-full flex items-center flex-1'>
									{menu.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex flex-col gap-1'>
					{menuLeftBottom.map((menu, index) => (
						<li
							key={index}
							className='h-10 font-DMSans flex items-center relative group'
						>
							<Link to={menu.url} className='flex items-center h-full w-full'>
								<div className=' text-white flex justify-center items-center h-full min-w-[55px]'>
									{<menu.icon className='w-6 h-8' />}
								</div>

								<span className='menu-title text-base text-[#b3b3b3] h-full flex items-center flex-1'>
									{menu.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default MobileMenu;
