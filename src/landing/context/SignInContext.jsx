import { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { authErrors } from "../../firebase";

const SignInContext = createContext();

export const SignInContextProvider = ({ children }) => {
	const { signIn, googleSignIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [passwordErr, setPasswordErr] = useState("");
	const [emailErr, setEmailErr] = useState("");
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [rememberPassword, setRememberPassword] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [rememberMe, setRememberMe] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);

	// handle email change
	const handleEmailChange = (newEmail) => {
		setEmail(newEmail);
		setEmailErr("");
	};

	// handle password change
	const handlePasswordChange = (newPassword) => {
		setPassword(newPassword);
		setPasswordErr(""); // Clear email error when the email input changes
	};

	// SignIn function
	const handleSignIn = async (e, navigate) => {
		e.preventDefault();
		setError("");
		setIsPasswordVisible(false);
		setIsSubmitting(true);

		try {
			await signIn(email, password);
			setIsSubmitting(false);
			navigate("/user/dashboard");
		} catch (err) {
			// Handle authentication errors
			setIsSubmitting(false);
			const errorCode = err.code;
			let errorMessage = "An unknown error occurred. Please try again later.";

			if (errorCode.includes("password")) {
				errorMessage =
					authErrors[errorCode] ||
					"An unknown error occurred. Please try again later.";
				setPasswordErr(errorMessage);
			} else if (errorCode.includes("user") || errorCode.includes("email")) {
				errorMessage =
					authErrors[errorCode] ||
					"An unknown error occurred. Please try again later.";
				setEmailErr(errorMessage);
			} else {
				setError(errorMessage);
			}
		}
	};

	// Google sign
	const handleGoogleSignIn = async (e, navigate) => {
		e.preventDefault();
		try {
			await googleSignIn();
			navigate("/user/dashboard");
		} catch (err) {
			setError(err.message);
			console.log(error);
		}
	};

	return (
		<SignInContext.Provider
			value={{
				setEmail,
				setPassword,
				setError,
				email,
				password,
				error,
				agreeToTerms,
				setAgreeToTerms,
				rememberPassword,
				setRememberPassword,
				isPasswordVisible,
				setIsPasswordVisible,
				passwordErr,
				emailErr,
				handleEmailChange,
				handlePasswordChange,
				handleSignIn,
				isSubmitting,
				setEmailErr,
				setPasswordErr,
				handleGoogleSignIn,
			}}
		>
			{children}
		</SignInContext.Provider>
	);
};

export default SignInContext;
