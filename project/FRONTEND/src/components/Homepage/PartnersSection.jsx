import React from 'react';

const partners = [
    { name: 'BioFuel Solutions', logo: 'https://cdn-icons-png.flaticon.com/512/2909/2909765.png', bg: 'bg-green-100' },
    { name: 'EcoLogix', logo: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', bg: 'bg-lime-100' },
    { name: 'GreenLeaf Energy', logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913461.png', bg: 'bg-emerald-100' },
    { name: 'HydroGenix', logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913467.png', bg: 'bg-cyan-100' },
    { name: 'SunPower Partners', logo: 'https://cdn-icons-png.flaticon.com/512/869/869869.png', bg: 'bg-yellow-100' },
    { name: 'BioFuel Solutions', logo: 'https://cdn-icons-png.flaticon.com/512/2909/2909765.png', bg: 'bg-green-100' },
    { name: 'EcoLogix', logo: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', bg: 'bg-lime-100' },
    { name: 'GreenLeaf Energy', logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913461.png', bg: 'bg-emerald-100' },
    { name: 'HydroGenix', logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913467.png', bg: 'bg-cyan-100' },
    { name: 'SunPower Partners', logo: 'https://cdn-icons-png.flaticon.com/512/869/869869.png', bg: 'bg-yellow-100' }
];

const PartnersSection = () => (
    <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Partners</h2>
            <div className="relative w-full overflow-x-hidden">
                <div className="flex items-center space-x-12 animate-partner-marquee will-change-transform">
                    {partners.map((p, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl shadow-md flex flex-col items-center justify-center h-28 w-44 ${p.bg} hover:shadow-xl transition duration-300`}
                            title={p.name}
                        >
                            <img
                                src={p.logo}
                                alt={p.name}
                                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300 hover:scale-110 cursor-pointer drop-shadow-md"
                                style={{ maxWidth: '120px' }}
                            />
                            <span className="mt-2 text-green-900 font-medium text-sm text-center truncate w-36" title={p.name}>{p.name}</span>
                        </div>
                    ))}
                </div>
                <style>{`
                    @keyframes partner-marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-partner-marquee {
                        animation: partner-marquee 30s linear infinite;
                        min-width: 200%;
                    }
                `}</style>
            </div>
        </div>
    </div>
);

export default PartnersSection; 