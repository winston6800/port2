import React from 'react';

const About: React.FC<{ sectionRef: React.RefObject<HTMLDivElement> }> = ({ sectionRef }) => {
    return (
        <section ref={sectionRef} id="about" className="py-24">
            <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 fade-in-section">
                        About Me
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 fade-in-section">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        <div className="relative w-full h-full bg-slate-800 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                           {/* Placeholder for an image */}
                           <img src="https://picsum.photos/seed/winston-profile/400/400" alt="Winston Zhang" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-6 text-lg text-slate-400 fade-in-section" style={{transitionDelay: '150ms'}}>
                        <p>
                           Hello! I'm Winston, a product-focused engineer driven by a passion for building things that matter. My journey in tech began with a simple curiosity about how digital products come to life, which has since evolved into a career dedicated to creating scalable and valuable systems.
                        </p>
                        <p>
                            I believe the best products emerge from a blend of technical excellence and a deep understanding of user needs. My philosophy is grounded in rapid iteration and relentless execution. I thrive on turning a bold vision into a tangible reality that improves how people live and work.
                        </p>
                         <p>
                            When I'm not coding or designing, I'm likely exploring new technologies, contributing to open-source projects, or planning my next big idea.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;