// FILE: src/components/Contact.jsx

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import {
  Send,
  Mail,
  Briefcase,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

// A simple animated checkmark component
function SuccessIcon() {
  return (
    <svg
      className="w-16 h-16 text-green-500 mx-auto mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    emailjs
      .sendForm(
        "service_lwqes4h", // Replace with your EmailJS Service ID
        "template_jxpl54m", // Replace with your EmailJS Template ID
        form.current,
        "dC2G2ouziyGJ9E35L" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleNewMessage = () => {
    setIsSent(false);
    setError("");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
           Have an opportunity that aligns with my skills? I'd love to discuss how I can contribute to your team and help you achieve your goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
            {isSent ? (
              <div className="text-center flex flex-col justify-center items-center h-full">
                <SuccessIcon />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600 mb-6">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={handleNewMessage}
                  className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your First Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    id="from_email"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Example: Project Inquiry"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your project or inquiry here..."
                    required
                  ></textarea>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-400 disabled:scale-100"
                  >
                    <Send size={18} className="mr-2" />{" "}
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                  {error && (
                    <p className="mt-4 text-center text-sm text-red-600">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-800">
                Get in Touch
              </h3>
              <p className="mt-4 text-slate-600">
                I'm actively seeking entry-level positions and internship
                opportunities in software development. As a fresh graduate, I'm
                eager to learn, grow, and contribute to meaningful projects.
                Let's connect and discuss how I can add value to your team.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate-800 font-semibold">Email</h4>
                    <a
                      href="mailto:mr.pauljohn12@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      mr.pauljohn12@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <Briefcase size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate-800 font-semibold">Location</h4>
                    <p className="text-slate-600">
                      Parañaque City, Philippines
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-24 w-24 rounded-full object-cover shadow-lg"
                    src="/profile-pic.JPG" // Make sure this path is correct
                    alt="Paul John Bullangay"
                  />
                </div>
                <div>
                  <h4 className="text-slate-800 font-semibold">
                    Ready to Connect?
                  </h4>
                  <p className="text-slate-600 mt-1">
                    I'm looking forward to hearing about your project or
                    opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
