import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { EmailIcon } from './icons/EmailIcon';


const Contact: React.FC<{ sectionRef: React.RefObject<HTMLDivElement> }> = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} id="contact" className="py-24 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-slate-100 fade-in-section">
                    Let's Build Something{' '}
                    <span className="text-gradient">Visionary</span>
                </h2>
                <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto fade-in-section" style={{transitionDelay: '150ms'}}>
                    I'm currently seeking new opportunities and am always open to collaborating on ambitious projects. Have an idea or just want to connect? Feel free to reach out.
                </p>

                <div className="mt-12 fade-in-section" style={{transitionDelay: '300ms'}}>
                     <a
                        href={SOCIAL_LINKS.email}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-medium text-white bg-slate-800/60 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-indigo-500/50 hover:bg-slate-800"
                    >
                        <span className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative flex items-center">
                            <EmailIcon className="w-6 h-6 mr-3" />
                            Say Hello
                        </span>
                    </a>
                </div>

                <div className="mt-16 flex items-center justify-center gap-8 fade-in-section" style={{transitionDelay: '450ms'}}>
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
            </div>
        </section>
    );
};

export default Contact;