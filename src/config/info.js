import { BsStackOverflow } from "react-icons/bs";
import { DiAws, DiCodepen } from "react-icons/di";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { 
  SiJavascript, SiTypescript, SiReact, SiAngular, SiNodedotjs, 
  SiExpress, SiNestjs, SiJest, SiWebpack, SiJquery, SiMongodb,
  SiMysql, SiPostgresql, SiPhp, SiLaravel, SiGit, SiAmazonaws,
  SiDigitalocean, SiDocker, SiKubernetes, SiNginx, SiYarn,
  SiMaterialdesign, SiTailwindcss, SiCodeigniter, SiCakephp,
  SiNpm
} from 'react-icons/si';
import Badge from "../components/Badge";

export const iconMap = {
    'Javascript': <SiJavascript className="mr-1 text-yellow-500" />,
    'ES6': <SiJavascript className="mr-1 text-yellow-500" />,
    'Angular': <SiAngular className="mr-1 text-red-500" />,
    'React': <SiReact className="mr-1" />,
    'Node.js': <SiNodedotjs className="mr-1" />,
    'TypeScript': <SiTypescript className="mr-1" />,
    'Express.js': <SiExpress className="mr-1" />,
    'Nest.js': <SiNestjs className="mr-1" />,
    'Jest': <SiJest className="mr-1" />,
    'Webpack': <SiWebpack className="mr-1" />,
    'jQuery': <SiJquery className="mr-1" />,
    'MongoDB': <SiMongodb className="mr-1" />,
    'MySQL': <SiMysql className="mr-1" />,
    'PostgreSQL': <SiPostgresql className="mr-1" />,
    'Laravel': <SiLaravel className="mr-1" />,
    'Git': <SiGit className="mr-1" />,
    'AWS (EC2 + S3)': <DiAws className="mr-1" />,
    'DigitalOcean': <SiDigitalocean className="mr-1" />,
    'Docker': <SiDocker className="mr-1" />,
    'Kubernetes (Basic)': <SiKubernetes className="mr-1" />,
    'Nginx (Basic)': <SiNginx className="mr-1" />,
    'Yarn': <SiYarn className="mr-1" />,
    'Material UI': <SiMaterialdesign className="mr-1" />,
    'Tailwind CSS': <SiTailwindcss className="mr-1" />
};


export const information = {
    name: 'A.H.M. Mosiur Rahaman',
    shortName: 'Mosiur',
    title: 'Software Engineer',
    description: 'Skilled Software Engineer with a strong track record in building high-quality, scalable full-stack applications. Experienced in both frontend and backend development, database optimization, and system design. Effective team collaborator with solid problem-solving skills, committed to continuous learning and delivering impactful solutions.',
    email: 'moshiur.swe@gmail.com',
    phone: '+880 1810-767-703',
    address: 'Mirpur 1, Dhaka, Bangladesh',
    profiles: [
        {
            url: 'https://github.com/moshiurse',
            icon: FiGithub,
            name: 'GitHub'
        },
        {
            url: 'https://www.linkedin.com/in/a-h-m-mosiur-rahaman-98a103107/',
            icon: FiLinkedin,
            name: 'LinkedIn'
        },
        {
            url: 'https://x.com/moshiurse',
            icon: FiTwitter,
            name: 'X'
        },
        {
            url: 'https://stackoverflow.com/users/6666051/moshiur-rahman',
            icon: BsStackOverflow,
            name: 'StackOverflow'
        },
        {
            url: 'https://leetcode.com/moshiurse',
            icon: SiLeetcode,
            name: 'Leetcode'
        },
        {
            url: 'https://codepen.io/moshiurse',
            icon: DiCodepen,
            name: 'CodePen'
        }
    ],
    resume: 'https://flowcv.com/resume/b0ph2n8thj',
    skills: {
        professional: [
            { 
                name: 'Javascript', 
                items: [
                    <Badge name="ES6" />,
                    <Badge name="Angular" />,
                    <Badge name="React" />,
                    <Badge name="Node.js" />,
                    <Badge name="Nest.js" />,
                    <Badge name="Adonis.js" />,
                    <Badge name="Express.js" />,
                    <Badge name="TypeScript" />,
                    <Badge name="Jest" />,
                    <Badge name="Webpack" />,
                    <Badge name="jQuery" />,
                    <Badge name="KendoUI" />
                ]
            },
            { 
                name: 'Package Manager', 
                items: [
                    <Badge name="Npm" />,
                    <Badge name="Yarn" />
                ] 
            },
            { 
                name: 'PHP', 
                items: [
                    <Badge name="Laravel" />,
                    <Badge name="CodeIgniter" />,
                    <Badge name="CakePHP" />,
                    <Badge name="Slim" />
                ] 
            },
            {
                name: 'Database',
                items: [
                    <Badge name="MongoDB" />,
                    <Badge name="MySQL" />,
                    <Badge name="PostgreSQL" />
                ]
            },
            {
                name: 'Version Control',
                items: [
                    <Badge name="Git" />
                ]
            },
            {
                name: 'Cloud',
                items: [
                    <Badge name="AWS (EC2 + S3)" />,
                    <Badge name="DigitalOcean" />
                ]
            },
            {
                name: 'DevOps',
                items: [
                    <Badge name="Linux" />,
                    <Badge name="Server Setup" />,
                    <Badge name="Docker" />,
                    <Badge name="Kubernetes (Basic)" />,
                    <Badge name="Nginx (Basic)" />
                ]
            },
            {
                name: 'UI Frameworks',
                items: [
                    <Badge name="Material UI" />,
                    <Badge name="Tailwind CSS" />
                ]
            }
        ],
        language: [
            { name: 'English', level: 'Fluent' },
            { name: 'Bengali', level: 'Native' },
        ]
    },
    projects: [
        {
            title: 'My Robi My Airtel SingleApp',
            description: 'One of the top telco companies in Bangladesh. Worked on backend with multiple microservices like authentication, OTP, billing, notification etc.',
            tags: ['NestJS', 'AdonisJS', 'Express', 'PostgreSQL', 'Microservices', 'REST APIs', 'Redis', 'Docker', 'Kubernetes', 'EFK stack', 'CI/CD', 'Jenkins', 'Dynatrace'],
            link: '#',
            responsibilities: 'Developed and maintained microservices, implemented authentication system, optimized database queries'
        },
        {
            title: 'CartDrawer Upsell Volume App',
            description: 'A Shopify app for creating upsell offers and volume offers for clients and show to storefront. Also provides a customized cart drawer functionality to users.',
            tags: ['Laravel', 'React', 'Redux', 'MySQL', 'Redis'],
            link: '#',
            responsibilities: 'Implemented cart drawer functionality, developed upsell offer system',
        },
        {
            title: 'Car Auction System for Japan',
            description: 'A system for Japanese car auction. Users are vendors/car sellers who bid for cars in auction. If they win, the car shipping process starts.',
            tags: ['Schedulers', 'Complex Queries', 'Role-based Access Control'],
            link: '#',
            responsibilities: 'Developed auction logic, implemented shipping tracking system',
        },
        {
            title: 'Task Visual',
            description: 'Task Management application similar to Jira with features like task assignment, progress tracking, comments, chat, time estimation etc.',
            tags: ['PHP (Laravel)', 'Node.js', 'Socket.io', 'MySQL', 'AngularJS', 'KendoUI'],
            link: '#',
            responsibilities: 'Built real-time chat system, implemented task time tracking',
        },
        {
            title: 'Bangladesh Army (MGO Branch Automation)',
            description: 'Complex inventory system managing the whole inventory of MGO Branch which manages all Depot and Unit stores. Contains about 15 modules and sub-modules.',
            tags: ['PHP (CodeIgniter)', 'MySQL', 'jQuery (EasyUI)'],
            link: '#',
            responsibilities: 'Developed inventory modules, implemented reporting system',
        },
        {
            title: 'BMDC Accounts',
            description: 'Accounting system for Bangladesh Medical & Dental Council with modules for fees collection, payments, and accounting reports.',
            tags: ['PHP (CodeIgniter)', 'MySQL', 'jQuery (EasyUI)'],
            link: '#',
            responsibilities: 'Developed fees collection module, implemented financial reports',
        },
        {
            title: 'FBC (Friends Book Corner)',
            description: 'Library management system with modules for invoices, purchases, quotations, accounts, and reporting.',
            tags: ['PHP (CodeIgniter)', 'MySQL', 'jQuery (EasyUI)'],
            link: '#',
            responsibilities: 'Implemented inventory tracking, developed reporting features',
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website showcasing my projects and skills.',
            tags: ['React', 'Tailwind CSS', 'Framer Motion'],
            link: '#',
            responsibilities: 'Designed and developed the entire website',
        }
    ],
    experiences: [
        {
            role: 'Software Engineer',
            company: 'Portonics Limited',
            duration: '08/2024 – Present',
            description: 'Played a key backend role in revamping major telecom application in Bangladesh (MyRobi MyAirtel SingleApp) under a tight MVP timeline of 3 months. Delivered high-quality microservice-based solutions that have since gone into production with full user adoption across all platforms (~100% of users migrated). Worked collaboratively with cross-functional teams to ensure API scalability, reliability, and performance under real-world telecom traffic.',
            technologies: ['NestJS', 'AdonisJS', 'Express', 'Slim (PHP)', 'PostgreSQL', 'Microservices Architecture', 'REST APIs', 'Redis', 'Docker', 'Kubernetes', 'EFK stack', 'CI/CD', 'Jenkins', 'Dynatrace'],
            websiteLink: '#'
        },
        {
            role: 'Software Engineer (II)',
            company: 'Zepto Apps',
            duration: '02/2023 – 07/2024',
            description: 'Developing scalable SAAS based app for modern ecommerce platform Shopify. Worked with Shopify API and integrated and aligned with Shopify requirements. Also worked on some SAAS based apps.',
            technologies: ['VanillaJS', 'Node.js', 'React', 'Redux', 'Laravel', 'MySQL', 'Redis', 'AWS', 'DigitalOcean'],
            websiteLink: '#'
        },
        {
            role: 'Software Engineer',
            company: 'Schertech GMBH (SCT Bangla Ltd.)',
            duration: '03/2020 – 01/2023',
            description: 'Developed Industry 4.0 and ERP apps for project management and reporting. Built reusable modules and scalable components.',
            technologies: ['Angular', 'Laravel', 'MySQL', 'Socket.IO'],
            websiteLink: '#'
        },
        {
            role: 'Junior Developer',
            company: 'Promiti Computers & Networks Pvt Ltd.',
            duration: '08/2018 – 02/2020',
            description: 'Developed government/NGO web apps. Specialized in SQL optimization and advanced DB queries.',
            technologies: ['PHP (CodeIgniter)', 'MySQL', 'jQuery'],
            websiteLink: '#'
        }
    ],
    educations: [
        {
            degree: 'BSc in Software Engineering',
            institution: 'Daffodil International University',
            duration: '2014 – 2018'
        },
        {
            degree: 'HSC',
            institution: 'Gouripur Govt College, Gouripur, Mymensingh',
            duration: '2014'
        },
        {
            degree: 'SSC',
            institution: 'Gouripur R.K Govt High School, Gouripur, Mymensingh',
            duration: '2012'
        }
    ],

}