import {
	ramani,
	MongoDB,
	SQL,
	MySQL,
	Excel,
	R,
	Python,
	Tableau,
	Powerpoint,
	GoogleSheets,
	BigQuery,
	OracleDB,
	Herman,
	Gideon,
	Debbie,
	LondonBiking,
	HrAnalytics,
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
		title: 'Full Stack Developer',
		company_name: 'Ramani Corporation',
		icon: ramani,
		iconBg: '#383E56',
		date: 'April 2021 - June 2023',
		points: [
			'Maintained and updated a dynamic web-based SaaS dashboard and public website with React JS, TypeScript, Redux, Google Maps, Highcharts, React Beautiful DND, and various UI libraries',
			'Collaborated with the design team in the creation of Figma wireframes',
			'Worked with an international team of 12 developers, designers and QA in an Agile environment',
			'Created REST APIs with Node.js, Express.js, and other modules with MongoDB as the database',
			'Migrated the server to AWS, utilizing EC2 for scalable compute resources and S3 for secure data storage',
			'Refactored the application to improve the Lighthouse Performance score by 10%, while achieving a Best Practices score of 100%, and SEO of 92% ',
			'Conducted code/pull request reviews',
			'Created and progressed stories with Jira, and used Bitbucket for version control',
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
	}
];

export { experiences, testimonials, projects, skills };

export const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;
