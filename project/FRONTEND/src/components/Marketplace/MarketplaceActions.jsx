import React from 'react';
import { ShoppingBag, DollarSign } from 'lucide-react';

const actions = [
    {
        icon: <ShoppingBag className="h-20 w-20 text-green-800 mb-8 drop-shadow-lg" />,
        title: 'Buy Materials',
        desc: 'Browse and purchase sustainable materials.',
        cta: 'Explore Now',
        bg: 'bg-gradient-to-br from-green-50 via-green-100 to-green-200',
        btn: 'bg-green-700 hover:bg-green-800',
        shadow: 'shadow-green-100',
        to: '/marketplace/buy',
    },
    {
        icon: <DollarSign className="h-20 w-20 text-yellow-700 mb-8 drop-shadow-lg" />,
        title: 'Sell Materials',
        desc: 'List your materials for thousands of buyers.',
        cta: 'Start Selling',
        bg: 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200',
        btn: 'bg-yellow-500 hover:bg-yellow-600',
        shadow: 'shadow-yellow-100',
        to: '/marketplace/sell',
    },
];

const MarketplaceActions = ({ navigate }) => (
    <div className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Marketplace Actions</h2>
            <p className="text-gray-600 text-xl">Choose your next step</p>
        </div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            {actions.map((action) => (
                <div
                    key={action.title}
                    onClick={() => navigate(action.to)}
                    tabIndex={0}
                    role="button"
                    aria-label={action.title}
                    className={`${action.bg} ${action.shadow} rounded-3xl p-16 cursor-pointer hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 group flex flex-col items-center outline-none focus:ring-4 focus:ring-green-200 border-4 border-black`}
                >
                    {action.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-green-900 transition">{action.title}</h3>
                    <p className="text-gray-700 mb-8 text-center text-lg">{action.desc}</p>
                    <button className={`w-full py-4 text-lg font-semibold text-white rounded-xl shadow transition ${action.btn}`}>{action.cta}</button>
                </div>
            ))}
        </div>
    </div>
);

export default MarketplaceActions; 