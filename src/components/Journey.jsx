// FILE: src/components/Journey.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Building, Star } from 'lucide-react';


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
            description: "Specializing in software development and hardware integration. Strengthened skills through various Arduino and ESP32-based projects, functional websites, and our 'Smart Misting System' capstone, where I developed the frontend, programmed the ESP32, and connected it to a FastAPI backend via the MQTT protocol.",
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
]

export default function Journey() {
    const { ref, inView } = useInView({ threshold: 0.1 });
    
    return (
        <section 
            id="journey"
            ref={ref}
            className={`py-24 bg-slate-50 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Educational Journey</h2>
                </div>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-300" aria-hidden="true"></div>
                    
                    <div className="space-y-16">
                        {journeyData.map((item, index) => (
                            <div key={index} className="flex items-center justify-center relative">
                                <div className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center ring-8 ring-slate-50
                                    ${item.color === 'blue' && 'bg-blue-500'}
                                    ${item.color === 'yellow' && 'bg-yellow-500'}
                                    ${item.color === 'indigo' && 'bg-indigo-500'}
                                `}>
                                    <item.icon className="text-white" size={16}/>
                                </div>
                                <div className={`w-2/5 ${index % 2 === 0 ? 'text-right pr-16' : 'order-2 pl-16'}`}>
                                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-500 font-medium">{item.institution}</p>
                                    <p className="text-sm text-slate-400">{item.date}</p>
                                </div>
                                <div className={`w-2/5 ${index % 2 === 0 ? 'pl-16' : 'order-1 text-right pr-16'}`}>
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
