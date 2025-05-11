import {
	ramani,
	BeyondWeb,
	MongoDB,
	SQL,
	MySQL,
	Excel,
	R,
	Python,
	Tableau,
	PowerBI,
	Powerpoint,
	GoogleSheets,
	BigQuery,
	OracleDB,
	Herman,
	Gideon,
	Debbie,
	LondonBiking,
	HrAnalytics,
	Relay,
} from '../assets';

export const navLinks = {
	1: {
		id: 'about',
		title: 'About',
		index: 1,
	},
	2: {
		id: 'projects',
		title: 'Projects',
		index: 2,
	},
	3: {
		id: 'experience',
		title: 'Experience',
		index: 3,
	},
	4: {
		id: 'testimonials',
		title: 'Testimonials',
		index: 4,
	},
	5: {
		id: 'contact',
		title: 'Contact',
		index: 5,
	},
};

const experiences = [
	{
		title: 'Front End Devloper',
		companyName: 'Relay Financial Technologies Inc.',
		companyNameColor: 'text-[#004822]',
		companyLocation: 'Toronto, ON',
		workType: 'Hybrid',
		icon: Relay,
		iconBg: '#004822',
		date: 'Mar 2025 - current',
		points: [
			'Work closely with the marketing, design and engineering teams to drive Relay’s 2025 website re-design.',
			'Develop high-quality, accessible, and visually striking web experiences.',
		],
	},
	{
		title: 'React Three Fiber Developer',
		companyName: 'BeyondWeb Technologies',
		companyNameColor: 'text-white',
		companyLocation: 'Brampton, ON',
		workType: 'Remote',
		icon: BeyondWeb,
		iconBg: '#000000',
		date: 'Oct 2024 - Jan 2025',
		points: [
			'Created and optimized 3D models in Blender, implementing custom shaders and materials for enhanced realism',
			'Developed interactive 3D experiences using React Three Fiber and integrated Blender models into React.',
			'Generated user interfaces within 3D environments, ensuring smooth performance and responsiveness across devices',
			'Created an interactive 3D tour of a virtual art gallery, which featured realistic lighting',
		],
	},
	{
		title: 'Full Stack Developer',
		companyName: 'Ramani Corporation',
		companyNameColor: 'text-green-600',
		companyLocation: 'Dar Es Salaam, TZ',
		workType: 'Remote',
		icon: ramani,
		iconBg: '#000000',
		date: 'Apr 2021 - Jun 2023',
		points: [
			'Managed a supply chain management SaaS program for over 100 micro-distribution centers (MDCs), enabling real-time management of procurement, inventory, and POS activities, reducing operational costs by 10%',
			'Migrated the server to AWS, leveraging scalable compute resources (EC2) and secure data storage (S3), resulting in a 25% improvement in system uptime and reliability',
			'Engineered and maintained RESTful APIs using Node.js and Express.js, integrating them seamlessly with MongoDB for efficient data storage and retrieval',
			'Utilized CircleCI for CI/CD',
			'Collaborated with the design team and frontend to ensure a seamless integration of Figma wireframes that lead to higher quality completed stories, which reduced sprint times',
			'Conducted code/pull request reviews to ensure high-quality code and adherence to best practices',
			'Refactored the application to improve performance, SEO, and best practice scores, while, leading to a 15% increase in application speed',
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Whether it's bringing designs to life or tackling complex backend challenges, Carl consistently exceeds expectations and delivers outstanding results.\nWhat sets Carl apart is his dedication to going above and beyond. He's not only mastered front-end development but also expanded his skills to become a proficient backend engineer. This versatility is invaluable to our team as he seamlessly transitions between tasks and consistently achieves exceptional results.",
		name: 'Herman Kwayu',
		designation: 'Sr.Project Manager',
		company: 'Ramani Corp.',
		image: Herman,
		linkedIn: 'https://tz.linkedin.com/in/herman-kwayu-044733135',
	},
	{
		testimonial:
			'I find working with Carl to be enjoyable due to his qualities as an owner, his keen eye for detail, and his adeptness at asking clarifying questions.',
		name: 'Gideon Bamuleseyo',
		designation: 'Lead Web Developer',
		company: 'Ramani Corp.',
		image: Gideon,
		linkedIn: 'https://www.linkedin.com/in/gideon-bamuleseyo-07b574119',
	},
	{
		testimonial: `As a Product Designer, Carl has been one of the best Front-End Engineers I've had the privilege to work with. Carl's attention to detail is remarkable. He is able to effortlessly transform design specifications into flawless code with speed & accuracy. Carl has the amazing ability to absorb feedback and implement changes seamlessly. Carl is a true team player, and any product & engineering team would be incredibly fortunate to have him on their side! `,
		name: 'Debbie Adejumo',
		designation: 'UX Design Lead',
		company: 'Ramani Corp.',
		image: Debbie,
		linkedIn: 'https://www.linkedin.com/in/debbie-adejumo',
	},
];

const aboutCards = [
	{
		title: 'Databases',
		images: [
			{
				img: MySQL,
				skill: 'MySQL',
				color: 'rgba(30,144,255,0.2)',
				level: '90%',
			},
			{
				img: BigQuery,
				skill: 'BigQuery',
				color: 'rgba(30,144,255,0.2)',
				level: '90%',
			},
			{
				img: OracleDB,
				skill: 'Oracle DB',
				color: 'rgba(0,0,0,0.3)',
				level: '95%',
			},
		],
		subtext:
			'Powerhouses that provide a structured way to store, manage, and query large datasets efficiently. They streamline the entire process, making data analysis more reliable and scalable.',
	},
	{
		title: 'Spreadsheets',
		images: [
			{
				img: Excel,
				skill: 'Excel',
				color: 'rgba(50,205,50,0.2)',
				level: '80%',
			},
			{
				img: GoogleSheets,
				skill: 'Sheets',
				color: 'rgba(50,205,50,0.2)',
				level: '80%',
			},
		],
		subtext:
			'Ideal for working with small datasets and make it easy to organize and manipulate data with tools for sorting, filtering, and creating pivot tables. Built-in visualization features that help to represent data insights clearly.',
	},
	{
		title: 'Languages',
		images: [
			{
				img: SQL,
				skill: 'SQL',
				color: 'rgba(30,144,255,0.2)',
				level: '90%',
			},
			{
				img: R,
				skill: 'R',
				color: 'rgba(30,144,255,0.2)',
				level: '90%',
			},
			{
				img: Python,
				skill: 'Python',
				color: 'rgba(255,165,0,0.3)',
				level: '95%',
			},
		],
		subtext:
			'Great tools for data cleaning and modification. R and Python have extensive library packages available for analysis and visualizations.',
	},
	{
		title: 'Presentation',
		images: [
			{
				img: Tableau,
				skill: 'Tableau',
				color: 'rgba(0,0,0,0.3)',
				level: '95%',
			},
			{
				img: PowerBI,
				skill: 'Power BI',
				color: 'rgba(255,165,0,0.3)',
				level: '75%',
			},
			{
				img: Powerpoint,
				skill: 'Powerpoint',
				color: 'rgba(255,0,0,0.2)',
				level: '95%',
			},
		],
		subtext:
			'Tableau and Power BI excel at transforming complex datasets into interactive, visually compelling dashboards and reports. PowerPoint is the old reliable presentation generator.',
	},
];

const projects = [
	{
		name: 'London Biking Trends',
		description:
			'This study examines biking trends in London, England, from January 2015 to January 2017. The analysis focuses on the total number of rides and investigates how temperature and wind speed influenced cycling activity.',
		tags: [
			{
				name: 'python',
				color: 'text-blue-600',
			},
			{
				name: 'kaggle',
				color: 'text-cyan-500',
			},
			{
				name: 'tableau',
				color: 'text-white',
			},
			{
				name: 'pxfuel',
				color: 'text-red-500',
			},
			{
				name: 'photoshop',
				color: 'text-blue-600',
			},
		],
		image: LondonBiking,
		url: 'https://public.tableau.com/views/LondonBikingAnalysis/LondonBiking?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
		source_code_link: 'https://github.com/moods-1/moods-u-online',
	},
	{
		name: 'HR Analytics',
		description:
			'A presentation that addresses job satisfaction within departments and the attrition rates. Following this presentation, a comprehensive survey can be conducted to focus on ways to improve employee retention and over-all job satisfaction.',
		tags: [
			{
				name: 'excel',
				color: 'text-green-600',
			},
			{
				name: 'tableau',
				color: 'text-white',
			},
		],
		image: HrAnalytics,
		url: 'https://public.tableau.com/views/HRDashboard-2_17279624428270/HRANALYTICSDASHBOARD?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
		source_code_link: 'https://github.com/moods-1/mbank.git',
	},
];

const skills = [
	{
		img: SQL,
		skill: 'SQL',
		color: 'rgba(30,144,255,0.2)',
		level: '90%',
	},
	{
		img: MySQL,
		skill: 'MySQL',
		color: 'rgba(30,144,255,0.2)',
		level: '90%',
	},
	{
		img: BigQuery,
		skill: 'BigQuery',
		color: 'rgba(30,144,255,0.2)',
		level: '90%',
	},
	{
		img: OracleDB,
		skill: 'Oracle DB',
		color: 'rgba(0,0,0,0.3)',
		level: '95%',
	},
	{
		img: MongoDB,
		skill: 'MongoDB',
		color: 'rgba(50,205,50,0.2)',
		level: '80%',
	},
	{
		img: Excel,
		skill: 'Excel',
		color: 'rgba(50,205,50,0.2)',
		level: '80%',
	},
	{
		img: GoogleSheets,
		skill: 'Sheets',
		color: 'rgba(50,205,50,0.2)',
		level: '80%',
	},
	{
		img: R,
		skill: 'R',
		color: 'rgba(30,144,255,0.2)',
		level: '90%',
	},
	{
		img: Python,
		skill: 'Python',
		color: 'rgba(255,165,0,0.3)',
		level: '95%',
	},
	{
		img: Tableau,
		skill: 'Tableau',
		color: 'rgba(0,0,0,0.3)',
		level: '95%',
	},

	{
		img: Powerpoint,
		skill: 'Powerpoint',
		color: 'rgba(255,0,0,0.2)',
		level: '95%',
	},
];

export { experiences, testimonials, projects, skills, aboutCards };

export const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;
