import { createContext, useContext, } from "react";
import { AuthContext } from "../../context";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
const {user} = useContext(AuthContext)


    const userPhoto = user?.photoURL;
    const displayName = user?.displayName;



	return <UserContext.Provider value={{userPhoto, displayName}}>{children}</UserContext.Provider>;
};

export default UserContext;
