import { SearchIcon } from "../data/icon";
import { AppLayoutContext } from "../context";
import { useContext } from "react";

const Search = () => {
	const { isSidebarOpen } = useContext(AppLayoutContext);

	return (
		<div className='rounded-2xl flex items-center h-10 overflow-hidden transition-width duration-200 ease bg-gray-600 bg-opacity-40'>
			<button className='text-white h-full flex justify-center items-center min-w-[55px]'>
				<SearchIcon className='w-5 h-5' />
			</button>

			<input
				type='text'
				id='searchInput'
				placeholder='Search...'
				className={`${
					!isSidebarOpen && "hidden"
				}  text-sm text-white outline-none h-full bg-transparent whitespace-nowrap flex-1 `}
			/>
		</div>
	);
};

export default Search;
