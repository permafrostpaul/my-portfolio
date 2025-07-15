// FILE: src/components/Footer.jsx

import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram, Facebook} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
                <h3 className="text-2xl font-bold text-white">Paul John Bullangay</h3>
                <p className="mt-2 max-w-md mx-auto">Fresh graduate ready to make an impact in tech.</p>
                <div className="mt-6 flex justify-center items-center space-x-6">
                    <a href="https://github.com/permafrostpaul" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/permafrostpaul12/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                    <a href="https://www.facebook.com/permafrostpaul/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Facebook size={24} /></a>
                    <a href="https://www.instagram.com/permafrostpaul/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                </div>
                <p className="mt-8 text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Paul John Bullangay . All rights reserved. 
                </p>
            </div>
        </footer>
    );
}
