// FILE: src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo'; // Import the new Logo component

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

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <header className={`bg-slate-50/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isMounted ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="flex items-center space-x-3">
                        <Logo />
                        <span className="text-xl font-bold text-slate-900 hidden sm:inline">
                            Paul John Bullangay
                        </span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className="relative text-slate-600 hover:text-blue-600 transition-colors font-medium group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                            </a>
                        ))}
                    </nav>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-slate-900/50 backdrop-blur-lg z-40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-xl transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="mt-24 flex flex-col items-center space-y-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-700 hover:text-blue-600 transition-colors font-medium">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
