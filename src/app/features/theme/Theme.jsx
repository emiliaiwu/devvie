import AccentColor from "./AccentColor";

const Theme = () => {
	return (
		<section className='flex-1 '>
			<div className='mb-8 border-gray-400 border-b border-opacity-20'>
				<h2 className='font-DMSans text-xl py-4 tracking-tight text-white'>
					Appearance
				</h2>
				
			</div>
			<div className=' flex flex-col gap-6'>
				<AccentColor />
				<div>
					<h3 className='text-offwhite text-base font-DMSans mb-2'>
						Choose your preferred font style
					</h3>
					<div></div>
				</div>
				<div>border style</div>
				<div>
					Theme
					<div>THEME shades</div>
				</div>
			</div>
			<div>
				<button>cancel</button> <button>save preferences</button>
			</div>
		</section>
	);
};

export default Theme;
