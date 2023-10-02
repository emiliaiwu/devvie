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
	GithubAuthProvider,
	browserLocalPersistence,
	browserSessionPersistence,
	setPersistence,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const updateDisplayName = (userName) => {
		return updateProfile(auth.currentUser, { displayName: userName });
	};

	// sign up
	const signUpUser = async (email, password) => {
		await setPersistence(auth, browserSessionPersistence);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in
	const signIn = async (email, password, rememberMe) => {
		const persistence = rememberMe
			? browserLocalPersistence
			: browserSessionPersistence;

		await setPersistence(auth, persistence);

		return signInWithEmailAndPassword(auth, email, password);
	};

	// sign out
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

	const googleSignIn = async () => {
		await setPersistence(auth, browserLocalPersistence);
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider);
	};

	const githubSignIn = async () => {
		await setPersistence(auth, browserLocalPersistence);
		const githubAuthProvider = new GithubAuthProvider();
		return signInWithPopup(auth, githubAuthProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// setLoading(false);
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signUpUser,
				loading,
				setLoading,
				user,
				signIn,
				signOutUser,
				googleSignIn,
				githubSignIn,
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
