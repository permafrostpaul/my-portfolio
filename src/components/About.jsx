// FILE: src/components/About.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { ExternalLink, Briefcase, Code, Award } from 'lucide-react';

// A helper component for the animated stat cards
const StatCard = ({ icon: Icon, end, label, inView, noSeparator }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4">
            <Icon size={24} />
        </div>
        <div>
            <p className="text-3xl font-bold text-slate-800">
                {inView && <CountUp end={end} duration={3} separator={noSeparator ? '' : ','} />}
                {label.includes('Projects') && '+'}
                 {label.includes('Internships') && '+'}
            </p>
            <p className="text-slate-500 text-sm">{label}</p>
        </div>
    </div>
);


export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section 
            id="about" 
            ref={ref}
            className="py-24 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
                        <p className="mt-4 text-lg text-slate-600">Passionate about creating digital solutions that make a difference</p>
                    </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                    {/* Image Section with decorative elements */}
                    <div className={`relative transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="absolute -top-4 -left-4 w-full h-full bg-slate-100 rounded-2xl transform -rotate-3 z-0"></div>
                        <img src="PaulPicture.JPG" alt="Paul John Bullangay" className="relative rounded-2xl shadow-2xl w-full z-10" />
                        <div className="absolute bottom-4 right-4 z-20">
                            <span className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-green-600 shadow-md">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Available for work
                            </span>
                        </div>
                    </div>

                    {/* Text and Stats Section */}
                    <div className={`space-y-8 transition-all duration-700 ease-out delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div>
                            <h3 className="text-3xl font-semibold text-slate-800">Crafting Digital Solutions</h3>
                            <p className="mt-4 text-slate-600 text-lg">
                                As a graduating Computer Engineering student, I've discovered my passion lies in the world of software development. I enjoy using my analytical foundation to build efficient, scalable web solutions that solve real-world problems.
                            </p>
                            <p className="mt-4 text-slate-600 text-lg">
                               My hands-on experience building full-stack applications during internships and academic projects has solidified my commitment to writing clean, maintainable code. I am eager to contribute to a dynamic team and am always excited to learn and master emerging technologies.
                            </p>
                        </div>
                        
                        {/* Animated Stat Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <StatCard icon={Code} end={15} label="Academic Projects" inView={inView} />
                            <StatCard icon={Briefcase} end={2} label="Internships" inView={inView} />
                            <StatCard icon={Award} end={2025} label="Graduating Student" inView={inView} noSeparator={true} />
                        </div>

                        <div className="pt-4">
                            <a 
                                href="/Paul-John-Bullangay-CV.pdf"
                                download
                                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group"
                            >
                                Download Resume 
                                <ExternalLink size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
