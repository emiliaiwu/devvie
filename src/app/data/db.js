import {
	DashboardIcon,
	ProjectIcon,
	LibraryIcon,
	TaskIcon,
	AccountIcon,
	ThemeIcon,
	SecurityIcon,
} from "./icon";

export const menuLeftTop = [
	{
		title: "Dashboard",
		url: "/user/dashboard",
		icon: DashboardIcon,
	},

	{
		title: "Projects",
		url: "/user/projects",
		icon: ProjectIcon,
	},

	{
		title: "Task",
		url: "/user/tasks",
		icon: TaskIcon,
	},

	{
		title: "Devmark",
		url: "/user/devmark",
		icon: LibraryIcon,
	},

	{
		title: "Appearance",
		url: "/user/appearance",
		icon: ThemeIcon,
	},

	{
		title: "Profile",
		url: "/user/profile",
		icon: AccountIcon,
	},
];

export const menuLeftBottom = [
	{
		title: "Password",
		url: "/user/password",
		icon: SecurityIcon,
	},
];
