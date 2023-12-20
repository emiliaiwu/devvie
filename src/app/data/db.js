import {
	DashboardIcon,
	ProjectIcon,
	NoteIcon,
	LibraryIcon,
	TaskIcon,
	AccountIcon,
	LogoutIcon,
	ThemeIcon,
	PortfolioIcon,
	SecurityIcon,
	DeleteAccountIcon,
	ChallengeIcon,
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

	{
		title: "Portfolio",
		url: "/emiliaiwu",
		icon: PortfolioIcon,
	},
];

export const menuLeftBottom = [
	{
		title: "Password",
		url: "/user/password",
		icon: SecurityIcon,
	},
	{
		title: "Logout",
		url: "/user/logout",
		icon: LogoutIcon,
	},

	{
		title: "Delete Account",
		url: "/user/delete-account",
		icon: DeleteAccountIcon,
	},
];
