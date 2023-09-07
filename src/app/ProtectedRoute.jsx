import { Navigate } from "react-router-dom";
import { AuthContext } from "../landing/context";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
	const { user } = useContext(AuthContext);

	if (!user) {
		return <Navigate to={"/signin"} />;
	}
	return children;
};

export default ProtectedRoute;
