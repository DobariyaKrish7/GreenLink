import React from 'react';

const badges = [
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
        label: 'ISO 14001 Certified'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913461.png',
        label: 'Green Certified'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913467.png',
        label: 'Secure Payments'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
        label: 'Award Winner 2024'
    }
];

const TrustBadgesSection = () => (
    <div className="py-16 bg-gray-50 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Certifications &amp; Trust Badges</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {badges.map((badge, idx) => (
                    <div key={badge.label} className="flex flex-col items-center bg-white rounded-xl shadow p-6 w-48 hover:shadow-lg transition">
                        <img src={badge.icon} alt={badge.label} className="h-12 mb-3" />
                        <span className="text-green-800 font-semibold text-center">{badge.label}</span>
                    </div>
                ))}
            </div>
        </div>
        <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.23,1.01,.32,1) both; }
        `}</style>
    </div>
);

export default TrustBadgesSection; 