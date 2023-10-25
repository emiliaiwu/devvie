import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Navigate
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
import { AppLayout, ProjectLayout } from "./app/layout";
import SettingsLayout from "./app/layout/SettingsLayout";
import { Dashboard, Theme, Settings , General, Profile, Project, CreateNewProjectPage} from "./app/pages";
import ProtectedRoute from "./app/ProtectedRoute";
import "./style/devvieLoader.css";
import "./style/app.css";
import { AppContext } from "./app/context";
import { useContext } from "react";
import MobileSettings from './app/layout/MobileSettings'

// Lazy
// const LazyDashboard = React.lazy

const App = () => {
	const { isMobile } = useContext(AppContext);

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
					<Route path='project' element={<ProjectLayout />}>
						<Route index element={<Project/>}/>
						<Route path="new" element={<CreateNewProjectPage/> } />
					</Route>

					<Route
						path='settings'
						element={isMobile ? <MobileSettings /> : <SettingsLayout />}
					>
						{isMobile && <Route index element={<Settings />} />}
						<Route path='appearance' element={<Theme />} />
						<Route path='general' element={<General />} />
						<Route path='profile' element={<Profile />} />
					</Route>
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
