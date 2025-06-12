// FILE: src/components/Skills.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, Database, Wrench } from 'lucide-react';

const skillsData = [
    { category: "Frontend", icon: Code, skills: ["HTML/CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"], color: "blue" },
    { category: "Backend", icon: Briefcase, skills: ["Node.js", "Express.js", "Laravel", "Java", "REST APIs"], color: "green" },
    { category: "Database", icon: Database, skills: ["MySQL", "MongoDB", "SQLite", "Database Design", "SQL"], color: "purple" },
    { category: "Tools & Others", icon: Wrench, skills: ["Git/GitHub", "VS Code", "Postman", "Linux", "Problem Solving"], color: "orange" },
];

const colorMap = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
};
  
export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <section 
            id="skills" 
            ref={ref}
            className={`py-24 bg-white transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Skills & Technologies</h2>
                <p className="mt-4 text-lg text-slate-600">A comprehensive toolkit for building modern web applications</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.map((category) => {
                    const colors = colorMap[category.color];
                    return (
                        <div key={category.category} className="bg-slate-50/50 p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`inline-flex items-center justify-center p-4 ${colors.bg} rounded-full mb-6`}>
                                <category.icon className={colors.text} size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{category.category}</h3>
                            <ul className="space-y-3">
                            {category.skills.map((skill) => (
                                <li key={skill} className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow-sm">{skill}</li>
                            ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            </div>
        </section>
    );
}
