import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useContext } from "react";
import { DevvieLoader } from "../components";

function ProtectedRoute({ children}) {
	const { user, loading } = useContext(AuthContext); 

	if (loading) {
		return <DevvieLoader />;
	}

	if (!user) {
		return <Navigate to='/signin' />;
	}

	return children;
}

export default ProtectedRoute;