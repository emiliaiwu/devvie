import { useEffect } from "react";

const useScrollToDropdown = (stateVariable, dropdownRef) => {
	useEffect(() => {
		if (stateVariable && dropdownRef.current) {
			const dropdownElement = dropdownRef.current;
			// const dropdownPosition = dropdownRef.current.offsetTop;
			const dropdownBottomPosition =
				dropdownElement.getBoundingClientRect().bottom;

			// Determine the amount of scroll necessary to show the bottom of the dropdown
			const scrollAmount =
				window.scrollY + dropdownBottomPosition - window.innerHeight;
			window.scrollTo({
				top: scrollAmount,
				behavior: "smooth",
			});
		}
	}, [stateVariable]);
};

export default useScrollToDropdown;
