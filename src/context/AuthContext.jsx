import { createContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail,
	sendEmailVerification,
	confirmPasswordReset,
	updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();

	const updateDisplayName = (userName) => {
		return updateProfile(auth.currentUser, { displayName: userName });
	};

	const signUpUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signOutUser = () => {
		return signOut(auth);
	};

	const forgotPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	const verifyEmail = (email) => {
		return sendEmailVerification(auth, email);
	};

	const resetPassword = (oobCode, newPassword) => {
		return confirmPasswordReset(auth, oobCode, newPassword);
	};

	const googleSignIn = () => {
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signUpUser,
				user,
				signIn,
				signOutUser,
				googleSignIn,
				forgotPassword,
				verifyEmail,
				resetPassword,
				updateDisplayName,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
