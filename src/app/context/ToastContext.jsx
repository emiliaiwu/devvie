import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
	const [toast, setToast] = useState({
		type: "",
		title: "",
		message: "",
	});
	const [toasting, setToasting] = useState(false);

	const showToast = (type, title, message) => {
		setToasting(true);
		setToast({
			type: type,
			title: title,
			message: message,
		});
	};

	return (
		<ToastContext.Provider
			value={{ toast, toasting, setToasting, setToast, showToast }}
		>
			{children}
		</ToastContext.Provider>
	);
};
