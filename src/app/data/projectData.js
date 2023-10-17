export const mainProjects = [
	{
		projectName: "BioLink App",
		url: "personal/biolink-app",
		category: "personal",
	},
	{
		projectName: "Weather App",
		url: "personal/weather-app",
		category: "personal",
	},
	{ projectName: "Quiz App", url: "personal/quiz-app", category: "personal" },
	{
		projectName: "Tik Tac Toe",
		url: "personal/tic-tac-toe",
		category: "personal",
	},
];

export const finishedProjects = [
	{
		projectName: "Recipe generator",
		url: "personal/recipe-generator",
		category: "personal",
	},
	{
		projectName: "Weather App",
		url: "personal/weather-app",
		category: "personal",
	},
	{ projectName: "Quiz App", url: "personal/quiz-app", category: "personal" },
	{
		projectName: "Tic Tac Toe",
		url: "personal/tic-tac-toe",
		category: "personal",
	},
];

export const allProjects = [...mainProjects, ...finishedProjects];

export const projectNavLinks = [
	{ nav: "Board", url: "/user/project" },
	{ nav: "Project Ideas", url: "user/project/project-ideas" },
	{ nav: "Notes", url: "/user/project/notes" },
];
