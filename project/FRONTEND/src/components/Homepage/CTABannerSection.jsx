import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTABannerSection = () => {
    const navigate = useNavigate();
    return (
        <div className="relative py-16 my-12 mx-2 flex justify-center items-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-green-400 via-green-600 to-green-700 opacity-90 blur-2xl" />
            {/* Floating Circles */}
            <div className="absolute -top-10 left-1/4 w-32 h-32 bg-green-300 opacity-30 rounded-full animate-float1" />
            <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-green-700 opacity-20 rounded-full animate-float2" />
            <div className="relative z-10 text-center animate-fadeInUp">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Join the Green Revolution!</h2>
                <p className="text-lg md:text-xl mb-8 text-green-100 font-medium drop-shadow">Be part of a sustainable future. Buy, sell, and trade eco-friendly materials with ease.</p>
                <button
                    onClick={() => navigate('/signup')}
                    className="bg-white text-green-700 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-green-100 hover:text-green-900 transition relative animate-glow"
                >
                    Get Started
                    <span className="absolute inset-0 rounded-lg pointer-events-none animate-pulse-glow" />
                </button>
            </div>
            <style>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease-in-out infinite;
                }
                @keyframes float1 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float1 { animation: float1 6s ease-in-out infinite; }
                @keyframes float2 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(20px); }
                }
                .animate-float2 { animation: float2 7s ease-in-out infinite; }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(.23,1.01,.32,1) both; }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); }
                    50% { box-shadow: 0 0 24px 8px rgba(34,197,94,0.5); }
                }
                .animate-glow { animation: glow 2s infinite alternate; }
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.2); }
                    50% { box-shadow: 0 0 16px 4px rgba(34,197,94,0.3); }
                }
                .animate-pulse-glow { animation: pulseGlow 1.5s infinite alternate; }
            `}</style>
        </div>
    );
};

export default CTABannerSection; 