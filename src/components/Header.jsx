// FILE: src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo'; // Correctly imports the Logo component

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);

        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Prevent body scroll when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto'; // Cleanup on component unmount
        };
    }, [isMenuOpen]);
    
    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out 
                ${hasScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'}
                ${isMounted ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#home" className="flex items-center space-x-3">
                            <Logo hasScrolled={hasScrolled} />
                            <span className={`text-xl font-bold hidden sm:inline transition-colors ${hasScrolled ? 'text-white' : 'text-slate-800'}`}>
                                Paul John Bullangay
                            </span>
                        </a>
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    className={`relative transition-colors font-medium group ${hasScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                                </a>
                            ))}
                        </nav>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden z-50 transition-colors ${hasScrolled || isMenuOpen ? 'text-white' : 'text-slate-800'}`}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-2xl transition-transform transform z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <nav className="mt-20 flex flex-col items-start space-y-6">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl text-slate-100 hover:text-blue-400 transition-colors font-semibold">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
