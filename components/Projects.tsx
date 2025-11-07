import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0]; index: number }> = ({ project, index }) => {
    const isReversed = index % 2 !== 0;
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = (y - 0.5) * -20;
        const rotateY = (x - 0.5) * 20;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = '';
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="fade-in-section group relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-24 last:mb-0"
            style={{
                transition: 'opacity 0.6s ease-out, transform 0.3s ease-out',
                transitionDelay: `${index * 150}ms`
            }}
        >
            <div className={`relative lg:col-span-3 rounded-lg overflow-hidden shadow-2xl ${isReversed ? 'lg:order-2' : ''}`}>
                 <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover relative rounded-lg"
                />
            </div>
            <div className={`lg:col-span-2 ${isReversed ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-slate-100 mb-4">
                    {project.title}
                </h3>
                <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-lg shadow-inner border border-slate-800 space-y-4">
                    <div>
                        <h4 className="font-semibold text-indigo-300 mb-1">Problem</h4>
                        <p className="text-slate-400 text-sm">{project.problem}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-indigo-300 mb-1">Solution</h4>
                        <p className="text-slate-400 text-sm">{project.solution}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-sm font-medium text-indigo-300 bg-indigo-900/50 px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center space-x-6 mt-6">
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium"
                    >
                        <GitHubIcon className="w-5 h-5 mr-2" /> View Code
                    </a>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium"
                    >
                        <ExternalLinkIcon className="w-5 h-5 mr-2" /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC<{ sectionRef: React.RefObject<HTMLDivElement> }> = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} id="projects" className="py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 fade-in-section">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto fade-in-section" style={{transitionDelay: '150ms'}}>
                        A selection of projects where I've turned ideas into reality.
                    </p>
                </div>
                <div>
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;