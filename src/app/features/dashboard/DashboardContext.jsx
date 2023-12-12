import { createContext, useContext, useState } from "react";
import { AuthContext } from "../../../context";

const DashboardContext = createContext();
export const DashboardContextProvider = ({ children }) => {
	const { user } = useContext(AuthContext);
	const name = user?.displayName.split(" ")[0];
	const [firstName, setFirstName] = useState("");

	console.log(firstName);

	return <div value={{}}>{children}</div>;
};

export default DashboardContext;
