import React from 'react';
import { Globe, Award, Recycle, ShieldCheck, BarChart3, Users } from 'lucide-react';

const features = [
    {
        icon: <Globe className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Global Network',
        desc: 'Connect with verified partners worldwide for sustainable trading.'
    },
    {
        icon: <Award className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Quality Assured',
        desc: 'All materials meet strict international standards.'
    },
    {
        icon: <Recycle className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Eco-Friendly',
        desc: 'Support the circular economy and reduce environmental impact.'
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Secure Trading',
        desc: 'Safe, transparent transactions with escrow and verified payments.'
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Market Intelligence',
        desc: 'Access real-time pricing, trends, and analytics.'
    },
    {
        icon: <Users className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Expert Support',
        desc: 'Get help from our team of industry professionals.'
    }
];

const MarketplaceFeatures = () => (
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Trade on GreenFuel Market?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((f, idx) => (
                    <div key={idx} className="bg-green-50 rounded-xl shadow p-8 text-center hover:shadow-lg transition">
                        <div>{f.icon}</div>
                        <h3 className="text-xl font-semibold mb-4 mt-4">{f.title}</h3>
                        <p className="text-gray-700">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MarketplaceFeatures; 