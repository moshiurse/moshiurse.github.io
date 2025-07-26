import { iconMap } from "../config/info";

const textMap = {
    'Javascript': "bg-yellow-500",
    'ES6': "bg-yellow-500",
    'Angular': "bg-yellow-500",
    'React': "bg-yellow-500",
    'Node.js': "bg-yellow-500",
    'TypeScript': "bg-yellow-500",
    'Express.js': "bg-yellow-500",
    'Nest.js': "bg-yellow-500",
    'Jest': "bg-yellow-500",
    'Webpack': "bg-yellow-500",
    'jQuery': "bg-yellow-500",
    'MongoDB': "bg-yellow-500",
    'MySQL': "bg-yellow-500",
    'PostgreSQL': "bg-yellow-500",
    'Laravel': "bg-yellow-500",
    'Git': "bg-yellow-500",
    'AWS (EC2 + S3)': "bg-yellow-500",
    'DigitalOcean': "bg-yellow-500",
    'Docker': "bg-yellow-500",
    'Kubernetes (Basic)': "bg-yellow-500",
    'Nginx (Basic)': "bg-yellow-500",
    'Yarn': "bg-yellow-500",
    'Material UI': "bg-yellow-500",
    'Tailwind CSS': "bg-yellow-500",
}

const Badge = ({name}) => {

  return (

    <span
        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${textMap[name]} dark:bg-gray-700 text-gray-800 dark:text-gray-200 inline-flex items-center gap-1`}
    >
        {iconMap[name] || null}
        {name}
    </span>

    );
};

export default Badge;