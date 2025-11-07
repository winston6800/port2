import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface HeroProps {
    onNavigate: () => void;
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, sectionRef }) => {
    return (
        <section ref={sectionRef} id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative pt-20">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-100 mb-4 tracking-tightest fade-in-section">
                    Winston Zhang
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6 fade-in-section" style={{transitionDelay: '150ms'}}>
                    Product Engineer & Aspiring Founder
                </h2>
                <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto fade-in-section" style={{transitionDelay: '300ms'}}>
                    I transform ambitious ideas into scalable, user-centric products. My passion lies at the intersection of robust engineering and intuitive design to create meaningful digital experiences.
                </p>
                <div className="mt-10 flex items-center justify-center gap-6 fade-in-section" style={{transitionDelay: '450ms'}}>
                     <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                    >
                        <LinkedInIcon className="w-8 h-8"/>
                    </a>
                     <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                    >
                        <GitHubIcon className="w-8 h-8"/>
                    </a>
                </div>
                 <div className="mt-12 fade-in-section" style={{transitionDelay: '600ms'}}>
                    <button
                        onClick={onNavigate}
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-slate-800/60 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-indigo-500/50 hover:bg-slate-800"
                    >
                        <span className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative">
                            Let's Build Together
                        </span>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-10 animate-bounce fade-in-section" style={{transitionDelay: '750ms'}}>
                <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
        </section>
    );
};

export default Hero;