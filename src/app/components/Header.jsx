import { img6 } from "../../assets"
import HamburgerMenu from "./HamburgerMenu"

const Header = ({color}) => {
  return (
		<header style={{backgroundColor: color}} className='h-[70px] py-3 px-5 fixed top-0 right-0 left-0 lg:left-[320px] z-10 sm:h-[80px] sm:py-5'>
			<div className='flex justify-between items-center w-full'>
				<div className="lg:hidden">
					<HamburgerMenu />
				</div>
				<div className="">
					<img src={img6} className='max-w-[40px] rounded-full' />
				</div>
			</div>
		</header>
	);
}

export default Header