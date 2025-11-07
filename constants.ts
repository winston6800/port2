import { FigmaIcon } from "./components/icons/FigmaIcon";
import { JavaScriptIcon } from "./components/icons/JavaScriptIcon";
import { NextJSIcon } from "./components/icons/NextJSIcon";
import { ReactIcon } from "./components/icons/ReactIcon";
import { TypeScriptIcon } from "./components/icons/TypeScriptIcon";
import { NodeJSIcon } from "./components/icons/NodeJSIcon";

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/winston-zhang-29aa5b28b',
    github: 'https://github.com/winston6800',
    email: 'mailto:winston.zhang.dev@email.com'
};

export const PROJECTS = [
    {
        title: 'Tabby',
        problem: 'Students struggle with maintaining focus during long study sessions, leading to decreased productivity and burnout.',
        solution: 'I led a 6-person team to develop Tabby, a productivity tool that gamifies focus. We validated our direction with 20+ user interviews and delivered a functional MVP in 10 weeks, creating a simple and effective tool to help students stay on track.',
        tags: ['Product Management', 'UX Research', 'Agile', 'Figma'],
        image: 'https://picsum.photos/seed/tabby-pro/800/600',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        title: 'Loops',
        problem: 'Many professionals and freelancers struggle to accurately track time spent on tasks, leading to inefficient workflows and difficulty in valuing their work.',
        solution: 'I built Loops, a time-tracking app using Next.js, to help users focus on single tasks, visualize their progress with dynamic charts, and understand the value of their time. The app features a hydration-safe design and a clean, intuitive interface.',
        tags: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Vercel'],
        image: 'https://picsum.photos/seed/loops-app/800/600',
        liveUrl: '#',
        codeUrl: '#',
    },
     {
        title: 'Portfolio V1',
        problem: 'As an aspiring developer, I needed a way to showcase my skills and projects to potential employers and collaborators in a tangible way.',
        solution: 'This portfolio was my first foray into web development, built from scratch with HTML, CSS, and JavaScript. It served as a foundational project that taught me the core principles of responsive design and front-end development, paving the way for my work with modern frameworks.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        image: 'https://picsum.photos/seed/portfolio-v1/800/600',
        liveUrl: '#',
        codeUrl: '#',
    },
];


export const SKILLS = {
    technologies: [
        { name: 'JavaScript (ES6+)', icon: JavaScriptIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'Next.js', icon: NextJSIcon },
        { name: 'Node.js', icon: NodeJSIcon },
        { name: 'Figma', icon: FigmaIcon },
    ],
    principles: [
        {
            title: 'User-Centric Design',
            description: 'I prioritize the user experience above all, ensuring that every feature and design choice is intuitive, accessible, and solves a real problem.'
        },
        {
            title: 'Agile & Iterative',
            description: 'I believe in rapid iteration and continuous feedback loops. Building, measuring, and learning allows for flexible adaptation and a better final product.'
        },
        {
            title: 'Scalable Architecture',
            description: 'I write clean, maintainable code and design systems with future growth in mind, ensuring long-term stability and performance.'
        },
        {
            title: 'Data-Informed Decisions',
            description: 'I leverage analytics and user research to make informed decisions, validating assumptions and measuring the impact of new features.'
        }
    ]
}