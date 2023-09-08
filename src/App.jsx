import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import { LandingPage, SignIn, NotFound, SignUp, ForgotPassword, ResetPassword } from "./landing/pages";
import ComingSoon from "./careers/ComingSoon";
import AppLayout from "./app/layout/AppLayout";
import { Dashboard } from "./app/pages";
import ProtectedRoute from "./app/ProtectedRoute";

// Lazy
// const LazyDashboard = React.lazy

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<LandingPage />} />
				<Route path='signin' element={<SignIn />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='hire-developers' element={<ComingSoon />} />
				<Route path='discover-projects' element={<ComingSoon />} />
				<Route path="forgot-password" element={<ForgotPassword />} />
				<Route path="reset-password" element={<ResetPassword/> } />
				<Route path='*' element={<NotFound />} />
				<Route
					path='user/'
					element={
						<ProtectedRoute>
							<AppLayout />
						</ProtectedRoute>
					}
				>
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
