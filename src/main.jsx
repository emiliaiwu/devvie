import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import {
	AuthContextProvider,
	SignInContextProvider,
	SignUpContextProvider,
	ThemeContextProvider,
	UserPreferencesProvider
} from "./context";

import { MobileMenuProvider } from "./landing/context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SignInContextProvider>
				<SignUpContextProvider>
					<UserPreferencesProvider>
						<ThemeContextProvider>
							<MobileMenuProvider>
								<App />
							</MobileMenuProvider>
						</ThemeContextProvider>
					</UserPreferencesProvider>
				</SignUpContextProvider>
			</SignInContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
