import { developerTestimonials } from "../data/db";

const DevTestimonials = () => {
	return (
		<div className='flex gap-5'>
			{developerTestimonials.map((item, index) => (
				<div
					key={index}
					className='bg-offwhite bg-opacity-10 w-[300px] p-4 rounded-2xl'
				>
					<p className='text-offwhite font-DMSans text-[13px] mb-4'>
						{item.message}
					</p>
					<div className='flex items-center gap-3'>
						<div className='overflow-hidden'>
							<img
								src={item.image}
								width={35}
								height={35}
								className='rounded-lg'
							/>
						</div>
						<div>
							<h4 className='text-white font-DMSans text-[12px] font-[600]'>
								{item.name}
							</h4>
							<p className='text-offwhite font-DMSans text-[11px] '>
								{item.profile}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default DevTestimonials;
