// FILE: src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Facebook, Mail, Instagram } from 'lucide-react';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Trigger the animation shortly after the component mounts
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 100); // A small delay to ensure the transition is visible
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            id="home" 
            className={`pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-br from-white to-slate-100 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                        <span className="absolute -inset-1 bg-yellow-300 transform -skew-y-3 z-0"></span>
                        <span className="relative z-10">Aspiring</span>
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Software Engineer',
                            2000,
                            'Web Developer',
                            2000,
                            'Frontend Developer',
                            2000,
                            'Full Stack Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
                    Graduating Computer Engineering student passionate about web solutions and development. Eager to apply my skills in HTML, CSS, JavaScript, React, and Laravel.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                        View My Work
                    </a>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 border border-slate-200">
                        <Mail size={18} className="mr-2" /> Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
