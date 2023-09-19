import { AuthContext, SignInContext } from "../../context";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";


const Dashboard = () => {
	const { isSubmitting, handleSignOut } = useContext(SignInContext);
	const { user} = useContext(AuthContext);

	const getUsernameOrEmail = () => {
		if (!user) {
			return "User is not logged in.";
		}

		if (user.displayName !== null) {
			return `${user.displayName}`;
		} 
	};

	return (
		<div className='flex justify-center items-center bg-gray-700 flex-col gap-4 h-full'>
			<h1 className='font-Inter font-[800] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black text-center'>
				Welcome{""} {getUsernameOrEmail()}
			</h1>
			<h2 className='font-DMSans text-black md:text-3xl font-semibold text-center text-2xl'>
				This is your dashboard
			</h2>
			<button
				onClick={handleSignOut}
				className='bg-white px-10 py-3 rounded-md text-base font-DMSans font-[600] text-black hover:bg-green-500 transition-all duration-200 ease cursor-pointer flex justify-center items-center'
			>
				{isSubmitting ? (
					<ClipLoader loading={true} color={"#B6FF9C"} size={32} />
				) : (
					"Log out"
				)}
			</button>
		</div>
	);
};

export default Dashboard;
