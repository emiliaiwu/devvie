import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import { MobileMenuProvider, SignProvider, AuthContextProvider } from "./context";




ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SignProvider>
				<MobileMenuProvider>
					<App />
				</MobileMenuProvider>
			</SignProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
