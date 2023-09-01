import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const createUser = ({email, password}) => {
  return createUserWithEmailAndPassword(auth, email, password)
}


	return <AuthContext.Provider value={{createUser}}>{children}</AuthContext.Provider>;
};

// export default AuthContext;

export const UserAuth = () => {
	return useContext(AuthContext);
};
