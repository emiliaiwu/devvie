import { useEffect } from "react";

const useScrollToDropdown = (stateVariable, dropdownRef) => {
	useEffect(() => {
		if (stateVariable && dropdownRef.current) {
			const dropdownPosition = dropdownRef.current.offsetTop;
			window.scrollTo({
				top: dropdownPosition,
				behavior: "smooth",
			});
		}
	}, [stateVariable]);
};

export default useScrollToDropdown;
