import { developerTestimonials } from "../data/db";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

const DevTestimonials = () => {

	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
			}}
			effect={"cards"}
			grabCursor={true}
			spaceBetween={30}
			centeredSlides={true}
			modules={[Autoplay, EffectCards, Pagination]}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			className='mySwiper'
		>
			{developerTestimonials.map((item, index) => (
				<SwiperSlide key={index}>
					<div className={`${item.color} rounded-3xl w-[300px] h-[180px] p-5 flex flex-col justify-center`}>
						<p className='text-black font-DMSans text-sm mb-4'>
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
								<h4 className='text-black font-DMSans text-[12px] font-[600]'>
									{item.name}
								</h4>
								<p className='text-black font-DMSans text-[11px] '>
									{item.profile}
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default DevTestimonials;
