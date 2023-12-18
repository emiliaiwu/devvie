import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import {
	AuthContextProvider,
	SignInContextProvider,
	SignUpContextProvider,
	ThemeContextProvider,
	UserPreferencesProvider,
	UserContextProvider,
} from "./context";

import { MobileMenuProvider } from "./landing/context";
import { AppContextProvider } from "./app/context/AppContext.jsx";
import {
	ProjectContextProvider,
	TaskProvider,
	DashboardContextProvider,
	LibraryContextProvider,
} from "./app/context/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SignInContextProvider>
				<SignUpContextProvider>
					<UserContextProvider>
						<UserPreferencesProvider>
							<ThemeContextProvider>
								<MobileMenuProvider>
									<AppContextProvider>
										<ProjectContextProvider>
											<TaskProvider>
												<DashboardContextProvider>
													<LibraryContextProvider>
														<App />
													</LibraryContextProvider>
												</DashboardContextProvider>
											</TaskProvider>
										</ProjectContextProvider>
									</AppContextProvider>
								</MobileMenuProvider>
							</ThemeContextProvider>
						</UserPreferencesProvider>
					</UserContextProvider>
				</SignUpContextProvider>
			</SignInContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
