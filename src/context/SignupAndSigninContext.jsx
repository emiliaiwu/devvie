import { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";

const SignupAndSigninContext = createContext();

export const SignupAndSigninProvider = ({ children }) => {
	const { signUp } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [rememberPassword, setRememberPassword] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password );
		
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<SignupAndSigninContext.Provider
			value={{
				setEmail,
				setPassword,
				setError,
				email,
				password,
				error,
				handleSubmit,
				agreeToTerms,
				setAgreeToTerms,
				rememberPassword,
				setRememberPassword,
				passwordVisible,
				setPasswordVisible,
			}}
		>
			{children}
		</SignupAndSigninContext.Provider>
	);
};

export default SignupAndSigninContext;
