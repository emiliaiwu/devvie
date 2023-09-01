import { createContext, useContext, useState } from "react";
import { UserAuth } from "./AuthContext";

const SignContext = createContext();

export const SignProvider = ({ children }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { createUser } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await createUser(email, password);
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<SignContext.Provider
			value={{
				setEmail,
				setPassword,
				setError,
				email,
				password,
				error,
				handleSubmit,
			}}
		>
			{children}
		</SignContext.Provider>
	);
};

export const SignAuth = () => {
    return useContext(SignContext);
}
