import { img2, img3, img4, img5, img6 } from "../../../assets";

const HeroImages = () => {
	return (
		<div>
			<div className='absolute xxl:top-[60%] top-[30%] left-[0%] xxl:left-[10%] '>
				<img
					src={img2}
					className='w-[90px] xxl:w-[150px] xxl:h-[150px] h-[90px]  rounded-full object-cover'
				/>
			</div>

		

			{/* RIGHT */}
			<div className='absolute top-[8%] xxl:top-[25%] right-[2%] xxl:right-[10%] xl:top-[25%] '>
				<img
					src={img5}
					className='w-[100px] h-[100px] xxl:w-[130px] xxl:h-[130px] rounded-full object-cover'
				/>
			</div>

			<div className='absolute top-[50%] xxl:top-[75%] xxl:right-[25%] right-[5%] xl:top-[60%] xl:right-[18%]'>
				<img
					src={img3}
					className='w-[80px] xxl:w-[110px] h-[80px] xxl:h-[110px] rounded-full object-cover'
				/>
			</div>
		</div>
	);
};

export default HeroImages;
