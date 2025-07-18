import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = () => (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white pt-0 pb-12 mt-12 overflow-hidden animate-footerFadeIn">
        {/* Decorative SVG Wave - truly full width */}
        <div className="fixed top-auto bottom-[100%] left-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
                <path d="M0,0V46.29c47.29,22,104.09,29,158,17.39C267.85,44.15,327.29,0,385,0s117.15,44.15,227,63.68C666.91,80.29,723.71,73.29,770,51.68c53.91-24.29,110.71-17.29,158,5.61V0Z" opacity=".25" fill="#22d3ee" />
                <path d="M0,0V15.81C47.29,37.81,104.09,44.81,158,33.2C267.85,10.96,327.29,0,385,0s117.15,10.96,227,29.49C666.91,46.1,723.71,39.1,770,17.49c53.91-24.29,110.71-17.29,158,5.61V0Z" opacity=".5" fill="#16a34a" />
                <path d="M0,0V5.81C47.29,27.81,104.09,34.81,158,23.2C267.85,0.96,327.29,0,385,0s117.15,0.96,227,19.49C666.91,36.1,723.71,29.1,770,7.49c53.91-24.29,110.71-17.29,158,5.61V0Z" fill="#22c55e" />
            </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10 z-20 relative pt-20">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
                <Leaf className="h-10 w-10 text-green-300 animate-spin-slow" />
                <span className="text-3xl font-extrabold tracking-wide font-display">GreenFuel Market</span>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline hover:text-cyan-300 transition">Home</Link></li>
                        <li><Link to="/marketplace" className="hover:underline hover:text-cyan-300 transition">Marketplace</Link></li>
                        <li><Link to="/about" className="hover:underline hover:text-cyan-300 transition">About</Link></li>
                        <li><Link to="/contact" className="hover:underline hover:text-cyan-300 transition">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Contact</h4>
                    <ul className="space-y-2 text-base">
                        <li>Nutan Park Society, Nadiad, Gujarat, India</li>
                        <li>+91 8141424177</li>
                        <li>+91 7567563355</li>
                        <li>mpcvirpariya@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <div className="flex space-x-4 mb-2">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-3 shadow-lg hover:shadow-cyan-400/40 hover:bg-cyan-400/20 transition transform hover:scale-110 backdrop-blur-md">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-3 shadow-lg hover:shadow-cyan-400/40 hover:bg-cyan-400/20 transition transform hover:scale-110 backdrop-blur-md">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-3 shadow-lg hover:shadow-cyan-400/40 hover:bg-cyan-400/20 transition transform hover:scale-110 backdrop-blur-md">
                        <FaTwitter size={28} />
                    </a>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-10">
            <div className="border-t border-white/20 mb-4" />
        </div>
        <div className="text-center text-cyan-200 text-base mt-2 z-20 relative tracking-wide">&copy; {new Date().getFullYear()} GreenFuel Market. All rights reserved.</div>
        <style>{`
            @keyframes footerGradient {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            .animate-footerGradient {
                background: linear-gradient(90deg, #22c55e, #16a34a, #22d3ee, #facc15, #22c55e);
                background-size: 400% 400%;
                animation: footerGradient 8s linear infinite;
            }
            @keyframes footerFadeIn {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-footerFadeIn { animation: footerFadeIn 1s cubic-bezier(.23,1.01,.32,1) both; }
            @keyframes spin-slow {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        `}</style>
    </footer>
);

export default FooterSection; 