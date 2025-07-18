import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const MarketplaceFeatureDetails = ({ feature, onClose }) => {
    if (!feature) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-10 relative animate-fadeInUp">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-green-600 text-2xl font-bold"
                    aria-label="Close"
                >
                    <X size={28} />
                </button>
                <div className="text-5xl mb-4 text-center">{feature.emoji}</div>
                <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">{feature.title}</h2>
                <p className="text-gray-700 mb-6 text-center">{feature.longDescription}</p>
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    {feature.stats && feature.stats.map((stat, idx) => (
                        <div key={idx} className="bg-green-50 rounded-lg px-6 py-4 text-center shadow">
                            <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                        {feature.benefits && feature.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <style>{`
        .animate-fadeIn { animation: fadeIn 0.2s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeInUp { animation: fadeInUp 0.4s cubic-bezier(.23,1.01,.32,1) both; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
        </div>
    );
};

export default MarketplaceFeatureDetails; 