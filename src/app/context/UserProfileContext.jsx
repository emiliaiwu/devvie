import { createContext, useState } from "react";

const UserProfileContext = createContext();

export const UserProfileContextProvider = ({ children }) => {
	const [cover, setCover] = useState(null);
	const [avatar, setAvatar] = useState(null);
	const [checked, setChecked] = useState({
		hireMe: false,
		remotely: false,
	});

	return (
		<UserProfileContext.Provider value={{ cover, setCover, avatar, setAvatar, checked, setChecked }}>
			{children}
		</UserProfileContext.Provider>
	);
};

export default UserProfileContext;
