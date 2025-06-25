// FILE: src/components/Contact.jsx

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Briefcase, Github, Linkedin, Facebook, Instagram, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: 'sending', message: 'Sending...' });

        emailjs
            .sendForm(
                'service_lwqes4h',
                'template_jxpl54m',
                form.current,
                'dC2G2ouziyGJ9E35L'
            )
            .then(
                () => {
                    setStatus({ type: 'success', message: 'Message sent successfully!' });
                    form.current.reset();
                    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
                },
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section
            id="contact"
            ref={ref}
            className={`py-24 bg-white transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Status Message Toast */}
            <div className={`fixed bottom-5 right-5 transition-transform duration-500 ease-in-out ${status.message ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className={`flex items-center gap-4 p-4 rounded-lg shadow-2xl text-white ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {status.type === 'success' ? <CheckCircle /> : <AlertTriangle />}
                    <span>{status.message}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's Work Together</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
                        Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
                    </p>
                </div>
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                    <input type="text" name="first_name" id="first_name" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                    <input type="text" name="last_name" id="last_name" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="from_email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" name="from_email" id="from_email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@email.com" required />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <input type="text" name="subject" id="subject" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Project Inquiry" required />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea name="message" id="message" rows="5" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} className="mr-2" />
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
                            <h3 className="text-2xl font-bold text-slate-800">Get in Touch</h3>
                            <p className="mt-4 text-slate-600">
                                I'm actively seeking entry-level positions and internship opportunities in software development. As a fresh graduate, I'm eager to learn, grow, and contribute to meaningful projects. Let's connect and discuss how I can add value to your team.
                            </p>
                            <ul className="mt-8 space-y-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                                        <Mail size={20} />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-slate-800 font-semibold">Email</h4>
                                        <a href="mailto:mr.pauljohn12@gmail.com" className="text-blue-600 hover:underline">mr.pauljohn12@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                                        <Briefcase size={20} />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-slate-800 font-semibold">Location</h4>
                                        <p className="text-slate-600">Parañaque City, Philippines</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h4 className="text-slate-800 font-semibold">Follow Me</h4>
                                <div className="mt-4 flex space-x-4">
                                    <a href="https://github.com/permafrostpaul" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href="https://www.linkedin.com/in/permafrostpaul12/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
                                    <a href="https://www.facebook.com/permafrostpaul/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={20} /></a>
                                    <a href="https://www.instagram.com/permafrostpaul/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Instagram size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
