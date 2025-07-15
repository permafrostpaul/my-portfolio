// FILE: src/components/Journey.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Building, Star } from 'lucide-react';

// Data for the timeline items
const journeyData = [
    { 
        title: "Information Technology Intern", 
        institution: "Innovato Information Technology Solutions",
        date: "Aug 2024 - Nov 2024",
        description: "Developed a complete Daily Time Record (DTR) system using Laravel and Tailwind CSS, handling both frontend and backend operations.",
        icon: Building,
        color: "yellow"
    },
    { 
        title: "Bachelor of Science in Computer Engineering", 
        institution: "Polytechnic University of the Philippines - Manila",
        date: "Aug 2021 - Present",
        description: "Specializing in software development with a focus on creating full-stack solutions. I applied these skills in our 'Smart Misting System' capstone, where I developed the responsive frontend and engineered the connection to a FastAPI backend using the MQTT protocol.",
        icon: GraduationCap,
        color: "blue"
    },
    { 
        title: "Frontend Developer Intern", 
        institution: "LexMeet - Pasig City",
        date: "Aug 2023 - Oct 2023",
        description: "Contributed to the development and design of a new company website using ReactJS and Bootstrap, enhancing user experience and modernizing the interface.",
        icon: Star,
        color: "indigo"
    },
];

// Color mapping for Tailwind CSS classes
const colorClasses = {
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
};

export default function Journey() {
    const { ref, inView } = useInView({ 
        threshold: 0.1,
        triggerOnce: true, // Animation will only trigger once
    });
    
    return (
        <section 
            id="journey"
            ref={ref}
            className={`py-24 bg-slate-50 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">My Journey</h2>
                </div>
                
                {/* Timeline Container */}
                <div className="relative">
                    {/* The vertical line: positioned left on mobile, center on desktop */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-300" aria-hidden="true"></div>
                    
                    <div className="space-y-12">
                        {journeyData.map((item, index) => (
                            // A single timeline item container
                            <div key={index} className="relative md:flex md:items-start">
                                {/* Icon: positioned left on mobile, center on desktop */}
                                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center ring-8 ring-slate-50 ${colorClasses[item.color]}`}>
                                    <item.icon className="text-white" size={16}/>
                                </div>

                                {/* --- MOBILE VIEW: A single content block --- */}
                                {/* This block is visible on small screens and hidden on medium screens and up */}
                                <div className="md:hidden ml-14 pl-4">
                                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-500 font-medium">{item.institution}</p>
                                    <p className="text-sm text-slate-400 mb-2">{item.date}</p>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                                
                                {/* --- DESKTOP VIEW: Two alternating content blocks --- */}
                                {/* These blocks are hidden on small screens and visible on medium screens and up */}
                                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-500 font-medium">{item.institution}</p>
                                    <p className="text-sm text-slate-400">{item.date}</p>
                                </div>
                                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
