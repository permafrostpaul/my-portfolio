// FILE: src/components/Projects.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

// This is the updated project data based on your CV and clarifications
const projectsData = [
    { 
        title: "Smart Misting System", 
        description: "As the primary coder for our capstone, I developed the frontend, programmed the ESP32, and integrated it with a FastAPI backend via MQTT for a complete IoT solution.", 
        tags: ["ESP32", "C++", "FastAPI", "MQTT", "IoT"], 
        type: "Capstone Project", 
        image: "https://placehold.co/600x400/16a34a/FFFFFF?text=Smart+Misting+System",
        githubUrl: "https://github.com/permafrostpaul/smart-misting-system"
    },
    {   title: "Weather PH", 
        description: "A sleek, responsive weather application for cities in the Philippines, built with React and Tailwind CSS. It fetches and displays live data from the OpenWeatherMap API, featuring a modern, user-friendly interface.", 
        tags: ["React", "API","Tailwind CSS", "Vite"], 
        type: "Personal Project ", 
        image: "https://placehold.co/600x400/3498db/FFFFFF?text=Weather+App",
        githubUrl: "https://github.com/permafrostpaul/weather-app-ph",
        liveDemoUrl: "https://weather-app-ph.netlify.app/"
    },
    { 
        title: "RFID Logic Game", 
        description: "An interactive academic project where players solve puzzles by placing RFID cards on a reader, demonstrating hardware-software integration.", 
        tags: ["Arduino", "C++", "RFID", "Hardware"], 
        type: "Academic Project", 
        image: "https://placehold.co/600x400/f59e0b/FFFFFF?text=RFID+Game",
        githubUrl: "https://github.com/permafrostpaul/rfid-game"
    },
    { 
        title: "Personal Portfolio Website", 
        description: "This very website, designed and built from scratch to showcase my skills. Features a modern design, animations, and a functional contact form.", 
        tags: ["React", "Vite", "Tailwind CSS"], 
        type: "Personal Project", 
        image: "https://placehold.co/600x400/3b82f6/FFFFFF?text=This+Portfolio",
        githubUrl: "https://github.com/permafrostpaul/my-portfolio"
    },
    { 
        title: "TaskFlow", 
        description: "A modern, full-featured task management application with an integrated calendar view. Built with React and Tailwind CSS, it includes advanced features like filtering, priority levels, and persistent state using localStorage.", 
        tags: ["React", "Vite", "Tailwind CSS", "date-fns"], 
        type: "Personal Project", 
        image: "https://placehold.co/600x400/8b5cf6/FFFFFF?text=TaskFlow",
        githubUrl: "https://github.com/permafrostpaul/taskflow-app",
        liveDemoUrl: "https://taskflow-ph.netlify.app/"
    },
    { 
        title: "Daily Time Record (DTR) System", 
        description: "Developed a complete DTR system during my internship, handling both frontend and backend using Laravel to create an efficient time tracking solution for employees.", 
        tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"], 
        type: "Internship Project", 
        image: "https://placehold.co/600x400/94a3b8/FFFFFF?text=DTR+System",
        githubUrl: "https://github.com/permafrostpaul/dtr-system"
    },
];

// Updated color map for the new technology tags
const tagColorMap = {
    "React": "bg-sky-100 text-sky-800",
    "Vite": "bg-purple-100 text-purple-800",
    "Tailwind CSS": "bg-cyan-100 text-cyan-800",
    "Laravel": "bg-red-100 text-red-800",
    "PHP": "bg-indigo-100 text-indigo-800",
    "MySQL": "bg-blue-100 text-blue-800",
    "JavaScript": "bg-yellow-100 text-yellow-800",
    "Bootstrap": "bg-purple-100 text-purple-800",
    "Arduino": "bg-teal-100 text-teal-800",
    "ESP32": "bg-orange-100 text-orange-800",
    "C++": "bg-blue-200 text-blue-900",
    "FastAPI": "bg-teal-100 text-teal-800",
    "MQTT": "bg-pink-100 text-pink-800",
    "IoT": "bg-green-100 text-green-800",
    "Hardware": "bg-slate-200 text-slate-800",
    "RFID": "bg-amber-100 text-amber-800",
    "Node.js": "bg-green-200 text-green-900",
    "Express": "bg-gray-200 text-gray-900",
    "Database": "bg-rose-100 text-rose-800",
    "default": "bg-slate-100 text-slate-800"
};
  
export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            id="projects" 
            ref={ref}
            className={`py-24 bg-slate-50 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Projects</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">A selection of projects that demonstrate my skills and experience.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                            <div className="relative">
                                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">{project.type}</div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                                <p className="mt-2 text-slate-600 flex-grow">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => {
                                        const colorClass = tagColorMap[tag] || tagColorMap.default;
                                        return (
                                           <span key={i} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>{tag}</span>
                                        );
                                    })}
                                </div>
                                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                                    <a href={project.liveDemoUrl || '#'} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center font-semibold ${project.liveDemoUrl ? 'text-blue-600 hover:text-blue-800' : 'text-slate-400 cursor-not-allowed'}`}>
                                        Live Demo <ExternalLink size={16} className="ml-1.5" />
                                    </a>
                                    <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center font-semibold ${project.githubUrl ? 'text-slate-500 hover:text-blue-600' : 'text-slate-400 cursor-not-allowed'}`}>
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <a href="https://github.com/permafrostpaul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors group">
                        View All Projects on GitHub <Github size={18} className="ml-2 group-hover:animate-pulse" />
                    </a>
                </div>
            </div>
        </section>
    );
}
