import { iconMap } from "../config/info";

const textMap = {
    'Javascript': "bg-green-500",
    'ES6': "bg-gray-200",
    'Angular': "bg-gray-100",
    'React': "bg-blue-200",
    'Node.js': "bg-red-200",
    'TypeScript': "bg-red-100",
    'Express.js': "bg-gray-300",
    'Adonis.js': "bg-black !text-white",
    'KendoUI': "bg-green-300",
    'Nest.js': "!text-red-500 bg-white",
    'Jest': "bg-yellow-500",
    'Webpack': "bg-yellow-500",
    'jQuery': "bg-yellow-500",
    'MongoDB': "bg-teal-200",
    'MySQL': "bg-blue-400 !text-white",
    'PostgreSQL': "bg-blue-500 !text-white",
    'Laravel': "bg-red-400",
    'CodeIgniter': "bg-orange-500",
    'CakePHP': "bg-red-300",
    'Slim': "bg-red-300",
    'Npm': "bg-red-400  !text-white",
    'Git': "bg-orange-500",
    'Linux': "bg-orange-300",
    'Server Setup': "bg-teal-500 !text-white",
    'AWS (EC2 + S3)': "bg-black !text-white",
    'DigitalOcean': "bg-blue-500 !text-white",
    'Docker': "bg-blue-500 !text-white",
    'Kubernetes (Basic)': "bg-blue-500 !text-white",
    'Nginx (Basic)': "bg-green-500 !text-white",
    'Yarn': "bg-blue-300",
    'Material UI': "bg-blue-400 !text-white",
    'Tailwind CSS': "bg-white text-sky-500",
}

const Badge = ({name}) => {

  return (

    <span
        className={`text-xs font-medium px-2 py-0.5 rounded-full border  text-gray-800 dark:text-gray-200 ${textMap[name]} inline-flex items-center gap-1 font-semibold`}
    >
        {iconMap[name] || null}
        {name}
    </span>

    );
};

export default Badge;