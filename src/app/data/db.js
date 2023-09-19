import {
	DashboardIcon,
	ProjectIcon,
	NoteIcon,
	LibraryIcon,
	TaskIcon,
	SearchIcon,
	CollaborateIcon,
	TeamIcon,
	AccountIcon,
	SettingsIcon,
	LogoutIcon,
	SupportIcon,
	ThemeIcon,
	AnalyticsIcon,
	CollectionIcon,
	ChatroomIcon,
	PortfolioIcon,
	Inspiration,
	SecurityIcon,
	DeleteAccountIcon

} from "./icon";

export const menuLeftTop = [
	{
		title: "Dashboard",
		url: "/user/dashboard",
		icon: DashboardIcon,
	},
	
	{
		title: "Inspiration",
		url: "/user/find-inspiration",
		icon: Inspiration,
	},
	
	{
		title: "CodeRoom",
		url: "/user/coderoom",
		icon: ChatroomIcon,
	},
	
	{
		title: "Analytics",
		url: "/user/analytics",
		icon: AnalyticsIcon,
		spacing: true,
	},
	
];

export const menuLeftBottom = [
	
	{
		title: "Settings",
		url: "/user/settings",
		icon: SettingsIcon,
	},
	{
		title: "Logout",
		url: "/user/logout",
		icon: LogoutIcon,
	},
];

export const menuLeftMiddle = [
	{
		title: "Project",
		url: "/user/project",
		icon: ProjectIcon,
	},
	{
		title: "Task",
		url: "/user/task",
		icon: TaskIcon,
	},
	{
		title: "Library",
		url: "/user/library",
		icon: LibraryIcon,
	},
];




// SETTINGS

export const settingsList = [
	{
		title: "General",
		url: "/user/settings/general",
		icon: SettingsIcon,
	},
	{
		title: "Profile",
		url: "/user/settings/profile",
		icon: AccountIcon,
	},
	{
		title: "Portfolio",
		url: "/user/settings/portfolio",
		icon: PortfolioIcon,
	},
	{
		title: "Appearance",
		url: "/user/settings/appearance",
		icon: ThemeIcon,
	},
	{
		title: "Password",
		url: "/user/settings/password",
		icon: SecurityIcon,
	},
	{
		title: "Delete Account",
		url: "/user/settings/delete-account",
		icon: DeleteAccountIcon,
		spacing: true,
	},
];
