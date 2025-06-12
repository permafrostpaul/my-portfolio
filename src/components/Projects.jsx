// FILE: src/components/Projects.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
    { title: "Personal Portfolio Website", description: "A responsive portfolio website built with React and Tailwind CSS, featuring modern animations and a contact form with backend integration.", tags: ["React", "Tailwind CSS", "Node.js"], type: "Personal Project", image: "https://placehold.co/600x400/334155/FFFFFF?text=Portfolio" },
    { title: "University Course Scheduler", description: "A web application to help students plan their course schedules with conflict detection and GPA calculation. Built as a final year project.", tags: ["Laravel", "PHP", "MySQL"], type: "Academic Project", image: "https://placehold.co/600x400/94a3b8/FFFFFF?text=Scheduler" },
    { title: "Weather Dashboard", description: "A clean weather application that displays current conditions and forecasts using OpenWeatherMap API with location-based services.", tags: ["React", "API Integration", "CSS"], type: "Learning Project", image: "https://placehold.co/600x400/38bdf8/FFFFFF?text=Weather" },
    { title: "Simple Todo App", description: "A full-stack todo application with user authentication, CRUD operations, and local storage. My first complete web application.", tags: ["HTML", "JavaScript", "Local Storage"], type: "First Project", image: "https://placehold.co/600x400/facc15/FFFFFF?text=Todo" },
    { title: "Student Grade Calculator", description: "A Java application built during Object-Oriented Programming course to calculate student grades with different grading schemes and statistics.", tags: ["Java", "OOP", "JavaFX"], type: "Academic Project", image: "https://placehold.co/600x400/fca5a5/FFFFFF?text=Grades" },
    { title: "Recipe Finder App", description: "A mobile-responsive web app that helps users find recipes based on available ingredients. Built during a web development bootcamp.", tags: ["Vue.js", "API", "Bootstrap"], type: "Bootcamp Project", image: "https://placehold.co/600x400/4ade80/FFFFFF?text=Recipes" },
];

const tagColorMap = {
    "React": "bg-sky-100 text-sky-800",
    "Tailwind CSS": "bg-cyan-100 text-cyan-800",
    "Node.js": "bg-green-100 text-green-800",
    "JavaScript": "bg-yellow-100 text-yellow-800",
    "Express": "bg-gray-100 text-gray-800",
    "MySQL": "bg-blue-100 text-blue-800",
    "API Integration": "bg-indigo-100 text-indigo-800",
    "CSS": "bg-blue-100 text-blue-800",
    "HTML": "bg-orange-100 text-orange-800",
    "Local Storage": "bg-slate-100 text-slate-800",
    "Java": "bg-red-100 text-red-800",
    "OOP": "bg-red-200 text-red-900",
    "JavaFX": "bg-orange-200 text-orange-900",
    "Vue.js": "bg-emerald-100 text-emerald-800",
    "API": "bg-indigo-100 text-indigo-800",
    "Bootstrap": "bg-purple-100 text-purple-800",
    "Laravel": "bg-red-100 text-red-800",
    "PHP": "bg-indigo-100 text-indigo-800",
    "default": "bg-slate-100 text-slate-800"
};
  
export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <section 
            id="projects" 
            ref={ref}
            className={`py-24 bg-slate-50 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Projects</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">Academic projects and personal learning experiences that showcase my growing skills</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="relative">
                        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">{project.type}</div>
                    </div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                    <p className="mt-2 text-slate-600">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => {
                            const colorClass = tagColorMap[tag] || tagColorMap.default;
                            return (
                                <span key={i} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>{tag}</span>
                            );
                        })}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <a href="#" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800">
                        Live Demo <ExternalLink size={16} className="ml-1.5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-600">
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
