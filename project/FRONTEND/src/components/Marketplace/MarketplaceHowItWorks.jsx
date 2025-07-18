import React from 'react';
import { UserPlus, Search, ShoppingBag, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: <UserPlus className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Sign Up',
        desc: 'Create your free account and join the marketplace.'
    },
    {
        icon: <Search className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Browse Materials',
        desc: 'Explore a wide range of sustainable materials.'
    },
    {
        icon: <ShoppingBag className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Buy or Sell',
        desc: 'Easily buy or list materials for sale.'
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />,
        title: 'Track Impact',
        desc: 'Monitor your trades and environmental impact.'
    }
];

const MarketplaceHowItWorks = () => (
    <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Marketplace Trading Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MarketplaceHowItWorks; 