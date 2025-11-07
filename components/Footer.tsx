import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800/50 mt-20">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="text-center sm:text-left">
                     <p className="text-slate-400">&copy; {new Date().getFullYear()} Winston Zhang</p>
                     <p className="text-sm text-slate-500">Designed & Built with Passion</p>
                </div>
                <div className="flex items-center gap-6">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-indigo-400 transition-colors">
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                     <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-indigo-400 transition-colors">
                        <LinkedInIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;