import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState('home');

    const refs = {
        home: heroRef,
        projects: projectsRef,
        about: aboutRef,
        skills: skillsRef,
        contact: contactRef,
    };

    const scrollToSection = (section: keyof typeof refs) => {
        refs[section].current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const pointer = document.getElementById('pointer');
        if (pointer) {
            const handleMouseMove = (e: MouseEvent) => {
                pointer.style.left = `${e.clientX}px`;
                pointer.style.top = `${e.clientY}px`;
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    useEffect(() => {
        // Observer for animations
        const animationObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elementsToAnimate = document.querySelectorAll('.fade-in-section');
        elementsToAnimate.forEach(el => animationObserver.observe(el));
        
        // Observer for active navigation link
        const navObserver = new IntersectionObserver(
            (entries) => {
                 entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }, { rootMargin: '-30% 0px -70% 0px' }
        );
        
        const sectionsForNav = Object.values(refs).map(ref => ref.current).filter(Boolean);
        sectionsForNav.forEach(section => navObserver.observe(section as Element));

        return () => {
            elementsToAnimate.forEach(el => animationObserver.unobserve(el));
            sectionsForNav.forEach(section => {
                if(section) navObserver.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header onNavigate={scrollToSection} activeSection={activeSection} />
            <main className="flex-grow container mx-auto px-6 lg:px-8">
                <Hero sectionRef={heroRef} onNavigate={() => scrollToSection('contact')} />
                <Projects sectionRef={projectsRef} />
                <About sectionRef={aboutRef} />
                <Skills sectionRef={skillsRef} />
                <Contact sectionRef={contactRef} />
            </main>
            <Footer />
        </div>
    );
};

export default App;