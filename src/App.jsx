import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import { LandingPage, NotFound } from "./landing/pages";
import {
	SignUpPage,
	SignInPage,
	ForgotPasswordPage,
	ResetPasswordPage,
} from "./pages";
import ComingSoon from "./careers/ComingSoon";
import AppLayout from "./app/layout/AppLayout";
import { Dashboard, Theme, Settings } from "./app/pages";
import ProtectedRoute from "./app/ProtectedRoute";
import "./style/devvieLoader.css";
import "./style/app.css";

// Lazy
// const LazyDashboard = React.lazy

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<LandingPage />} />
				<Route path='signin' element={<SignInPage />} />
				<Route path='signup' element={<SignUpPage />} />
				<Route path='hire-developers' element={<ComingSoon />} />
				<Route path='discover-projects' element={<ComingSoon />} />
				<Route path='forgot-password' element={<ForgotPasswordPage />} />
				<Route path='reset-password' element={<ResetPasswordPage />} />
				<Route path='*' element={<NotFound />} />
				<Route
					path='user'
					element={
						<ProtectedRoute>
							<AppLayout />
						</ProtectedRoute>
					}
				>
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='settings' element={<Settings />}>
						<Route path='appearance' element={<Theme />} />
					</Route>
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
