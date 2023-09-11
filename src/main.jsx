import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import {
	AuthContextProvider,
	SignInContextProvider,
	SignUpContextProvider,
} from "./context";

import { MobileMenuProvider } from "./landing/context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SignInContextProvider>
				<SignUpContextProvider>
					<MobileMenuProvider>
						<App />
					</MobileMenuProvider>
				</SignUpContextProvider>
			</SignInContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
