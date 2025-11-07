import React, { useState, useEffect } from 'react';

type Section = 'home' | 'projects' | 'about' | 'skills' | 'contact';

interface HeaderProps {
    onNavigate: (section: Section) => void;
    activeSection: string;
}

const NavLink: React.FC<{
    section: Section;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ section, label, isActive, onClick }) => (
    <li>
        <button
            onClick={onClick}
            className={`capitalize group text-slate-300 transition-all duration-300 ease-in-out text-lg`}
        >
            <span
                className={`bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1 ${
                    isActive ? 'text-indigo-400 font-semibold bg-[length:100%_2px]' : ''
                }`}
            >
                {label}
            </span>
        </button>
    </li>
);

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ] as const;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                scrolled ? 'bg-slate-950/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <button onClick={() => onNavigate('home')} className="text-3xl font-bold tracking-tighter text-white">
                            W<span className="text-indigo-400">Z</span>
                        </button>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="ml-10 flex items-baseline space-x-10">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.id}
                                    section={item.id}
                                    label={item.label}
                                    isActive={activeSection === item.id}
                                    onClick={() => onNavigate(item.id)}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;