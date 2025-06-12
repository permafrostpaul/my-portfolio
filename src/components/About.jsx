// FILE: src/components/About.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.1,    // Trigger when 10% of the section is visible
    });

    return (
        <section 
            id="about" 
            ref={ref}
            className={`py-24 bg-white transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
                    <p className="mt-4 text-lg text-slate-600">Passionate about creating digital solutions that make a difference</p>
                </div>
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2 relative">
                        <img src="https://placehold.co/400x500/E2E8F0/475569?text=John+Smith" alt="John Smith" className="rounded-2xl shadow-2xl w-full" />
                        <span className="absolute bottom-4 right-4 flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-green-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Available for work
                        </span>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="text-3xl font-semibold text-slate-800">Ready to launch my tech career</h3>
                        <p className="mt-4 text-slate-600 text-lg">
                            As a graduating Computer Engineering student, I have a strong foundation in software development and web technologies. Throughout my studies, I've built multiple projects using modern frameworks and best practices.
                        </p>
                        <p className="mt-4 text-slate-600 text-lg">
                            I'm excited to bring my academic knowledge, personal projects, and fresh perspective to a dynamic team. Always curious about emerging technologies and committed to writing clean, efficient code.
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-bold text-blue-600">15+</p>
                                <p className="mt-1 text-slate-500">Academic Projects</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-blue-600">2025</p>
                                <p className="mt-1 text-slate-500">Graduating Student</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a href="#" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                Download Resume <ExternalLink size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
