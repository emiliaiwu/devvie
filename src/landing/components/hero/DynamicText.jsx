import { useState, useMemo, useRef, useEffect } from "react";

const DynamicText = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentColor, setCurrentColor] = useState(0);
	const cursorRef = useRef(null); // Ref to the cursor element

	const textArray = useMemo(
		() => ["Software", "Backend", "Frontend", "Mobile", "Game", "Fullstack"],
		[]
	);

	const colors = useMemo(
		() => ["#F01BF4", "#47CB5B", "#F5B314", "#3CDAF6"],
		[]
	);

	const handleAnimationEnd = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
	};

	useEffect(() => {
		setCurrentColor((prevIndex) => (prevIndex + 1) % colors.length);
	}, [currentIndex]);

	return (
		<span className='bg-changing-text text-left mx-2 overflow-hidden '>
			<span
				style={{ backgroundColor: colors[currentColor] }}
				className='changing-text inline-block px-3'
			>
				<span
					ref={cursorRef}
					className='wipe-text'
					onAnimationIteration={handleAnimationEnd}
				></span>
				{textArray[currentIndex]}
			</span>
		</span>
	);
};

export default DynamicText;
