import { accentColors } from "./themeData";
import { RoundCheck } from "../../data/icon";
import { useState } from "react";

const AccentColor = () => {
	const [selectedColor, setSelectedColor] = useState("#EABE10");

	const handleColorClick = (color) => {
		setSelectedColor(color);
		console.log(selectedColor);
	};

	return (
		<div>
			<div className='mb-3'>
				<h3 className='text-white text-base font-DMSans'>Accent Color</h3>
				<p className='text-sm font-DMSans text-[#828282]'>
					Choose your accent color
				</p>
			</div>
			<div className='grid grid-cols-12 gap-2'>
				{accentColors.map((color, index) => (
					<button
						key={index}
						onClick={() => handleColorClick(color)}
						style={{ border: color }}
						className={`
						  w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-[${color}]`}
					>
						<span
							className={`${
								selectedColor === color
									? "border-2 border-white"
									: "border border-[${color}]"
							} w-7 h-7 rounded-full`}
							style={{ backgroundColor: color }}
						></span>
					</button>
				))}

				{/* {accentColors.map((color, index) => (
					<button
						key={index}
						className={`color-button ${
							selectedColor === color ? "selected" : ""
						}`}
						style={{ backgroundColor: color }}
						onClick={() => handleColorClick(color)}
					></button>
				))} */}
			</div>
		</div>
	);
};

export default AccentColor;
