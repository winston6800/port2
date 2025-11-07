import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC<{ sectionRef: React.RefObject<HTMLDivElement> }> = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} id="skills" className="py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 fade-in-section">
                        My Toolkit & Principles
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto fade-in-section" style={{ transitionDelay: '150ms' }}>
                        The technologies I use and the philosophies that guide my work.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Technologies Column */}
                    <div className="fade-in-section" style={{ transitionDelay: '300ms' }}>
                        <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center lg:text-left">Technology Stack</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {SKILLS.technologies.map((tech, index) => (
                                <div key={tech.name} className="flex items-center space-x-4 p-4 bg-slate-900/70 border border-slate-800 rounded-lg">
                                    <tech.icon className="w-8 h-8 text-indigo-400" />
                                    <span className="font-medium text-slate-300">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Principles Column */}
                    <div className="fade-in-section" style={{ transitionDelay: '450ms' }}>
                        <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center lg:text-left">My Principles</h3>
                        <div className="space-y-6">
                            {SKILLS.principles.map((principle, index) => (
                                <div key={principle.title} className="p-4 bg-slate-900/70 border border-slate-800 rounded-lg">
                                    <h4 className="font-bold text-lg text-indigo-300 mb-2">{principle.title}</h4>
                                    <p className="text-slate-400">{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
