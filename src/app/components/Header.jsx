import { img6 } from "../../assets"
import HamburgerMenu from "./HamburgerMenu"

const Header = () => {
  return (
		<header className='bg-[#060408] h-16 py-3 px-5'>
			<div className='flex justify-between items-center w-full'>
				<div>
					<HamburgerMenu />
				</div>
				<div>
					<img src={img6} className='max-w-[40px] rounded-full' />
				</div>
			</div>
		</header>
	);
}

export default Header