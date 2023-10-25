import {
	BsFillCircleFill,
	BsFillTriangleFill,
	BsFillPatchCheckFill,
	BsFillRocketTakeoffFill,
} from "react-icons/bs";
import { FaSquare, FaPause, FaBug } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { useAlphanumericID } from "../../hooks";

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
	{ nav: "Commits", url: "/user/project/commits" },
];

export const projectStatus = [
	{ status: "backlog", color: "#808080", shape: FaSquare },
	{ status: "to build", color: "#007FFF", shape: BsFillTriangleFill },
	{
		status: "in development",
		color: "rgb(255, 191, 0)",
		shape: BsFillCircleFill,
	},
	{ status: "paused", color: "#c34fff", shape: FaPause },
	{ status: "testing", color: "rgb(255, 49, 49)", shape: FaBug },
	{
		status: "completed",
		color: "rgb(11, 218, 81)",
		shape: BsFillPatchCheckFill,
	},
	{
		status: "deployed",
		color: "#F01BF4",
		shape: BsFillRocketTakeoffFill,
	},
	{
		status: "abandoned",
		color: "rgb(255, 95, 31)",
		shape: GoAlertFill,
	},
];

export const priorityTags = [
	{ tag: "🎯High Priority", color: "rgb(255, 49, 49)" },
	{ tag: "Medium Priority", color: "rgb(255, 95, 31)" },
	{ tag: "Low Priority", color: "rgb(255, 191, 0)" },
	{ tag: "Critical", color: "rgb(255, 95, 31)" },
	{ tag: "ASAP", color: "rgb(255, 95, 31)" },
];

export const techStack = [
	{
		name: "React",
		type: "Framework",
		iconLink: "https://reactjs.org/logo-og.png",
	},
	{
		name: "Angular",
		type: "Framework",
		iconLink: "https://angular.io/assets/images/logos/angular/angular.png",
	},
	{
		name: "Vue.js",
		type: "Framework",
		iconLink: "https://vuejs.org/images/logo.png",
	},
	{
		name: "Express.js",
		type: "Framework",
		iconLink: "https://expressjs.com/images/express-facebook-share.png",
	},
	{
		name: "Ruby on Rails",
		type: "Framework",
		iconLink: "https://rubyonrails.org/images/rails-logo.svg",
	},
	{
		name: "Django",
		type: "Framework",
		iconLink:
			"https://www.djangoproject.com/s/img/logos/django-logo-negative.png",
	},

	{
		name: "jQuery",
		type: "Library",
		iconLink:
			"https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery.png",
	},

	{
		name: "Firebase",
		type: "Backend",
	},
	{
		name: "Bootstrap",
		type: "Library",
		iconLink:
			"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png",
	},
	{
		name: "Tailwind",
		iconLink:
			"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
	},
	{
		name: "TensorFlow",
		type: "Library",
		iconLink:
			"https://www.gstatic.com/devrel-devsite/prod/v2f67f86ef9de7b20de1c5d7c671b6486fe3a0af4d3d7f3909fc0f997799481822/tensorflow/images/lockup.png",
	},
	{
		name: "PyTorch",
		type: "Library",
		iconLink: "https://pytorch.org/assets/images/pytorch-nav-icon-5a46459c.png",
	},
	{
		name: "Redux",
		type: "Library",
		iconLink: "https://redux.js.org/img/redux.svg",
	},
	{
		name: "Lodash",
		type: "Library",
		iconLink: "https://lodash.com/assets/img/lodash.svg",
	},

	{
		name: "JavaScript",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg",
	},
	{
		name: "Python",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg",
	},
	{
		name: "Java",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg",
	},
	{
		name: "C++",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg",
	},
	{
		name: "C#",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/csharp/csharp-original.svg",
	},

	{
		name: "Swift",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/swift/swift-original.svg",
	},
	{
		name: "Go",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/go/go-original.svg",
	},
	{
		name: "Ruby",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/ruby/ruby-original.svg",
	},

	{
		name: "HTML",
		type: "Markup Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg",
	},
	{
		name: "CSS",
		type: "Style Sheet Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg",
	},
	{
		name: "Java",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg",
	},
	{
		name: "TypeScript",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg",
	},
	{
		name: "Perl",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/perl/perl-original.svg",
	},
	{
		name: "R",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/r/r-original.svg",
	},
	{
		name: "SQL",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg",
	},
	{
		name: "PHP",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg",
	},

	{
		name: "C",
		type: "Language",
		iconLink:
			"https://devicons.github.io/devicon/devicon.git/icons/c/c-original.svg",
	},
];



export const projectTags = [
	{ tag: "Web App", color: "#00b287" },
	{ tag: "Frontend", color: "#dc0cd3" },
	{ tag: "Backend", color: "#3914fe" },
	{ tag: "iOS", color: "#fe0039" },
	{ tag: "Android", color: "#00A9FF" },
	{ tag: "Mobile", color: "#b30000" },
	{ tag: "Website", color: "#640cc9" },
	{ tag: "Landing", color: "#0000ff" },
	{ tag: "SAAS", color: "#B9005B" },
	{ tag: "E-learning", color: "#8f2ffc" },
	{ tag: "CMS", color: "#fe8b00" },
	{ tag: "AWS", color: "#008000" },
	{ tag: "Fullstack", color: "#a30ca3" },
	{ tag: "Open source", color: "#F24C3D" },
];
