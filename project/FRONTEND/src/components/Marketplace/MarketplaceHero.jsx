import React from 'react';

const MarketplaceHero = ({ onCTAClick }) => (
    <div className="relative bg-green-600 py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                alt="Marketplace Background"
                className="w-full h-full object-cover opacity-20 transform scale-110 motion-safe:animate-[slowZoom_20s_ease-in-out_infinite]"
            />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Sustainable Materials Marketplace</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 font-medium drop-shadow">Buy, sell, and discover eco-friendly materials for a greener tomorrow.</p>
            <button
                onClick={onCTAClick}
                className="bg-white text-green-700 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-green-100 hover:text-green-900 transition animate-glow"
            >
                Explore Categories
            </button>
        </div>
        <style>{`
      @keyframes slowZoom {
        0%, 100% { transform: scale(1.1); }
        50% { transform: scale(1.2); }
      }
      .animate-glow {
        animation: glow 2s infinite alternate;
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); }
        50% { box-shadow: 0 0 24px 8px rgba(34,197,94,0.5); }
      }
    `}</style>
    </div>
);

export default MarketplaceHero; 