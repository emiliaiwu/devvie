import { AuthContext, SignInContext } from "../../../context";
import { useContext } from "react";



const Dashboard = () => {
	const { isSubmitting, handleSignOut } = useContext(SignInContext);
	const { user } = useContext(AuthContext);
	
	console.log(user.displayName)

	const getUsernameOrEmail = () => {
		if (!user) {
			return "User is not logged in.";
		}

		if (user.displayName !== null) {
			return `${user.displayName}`;
		} 
	};

	return (
		<section className="mx-auto">
			<div>
				<div>
					<h1>Hello </h1>
				</div>
			</div>

		</section>
	);
};

export default Dashboard;
