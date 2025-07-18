import React from 'react';
import { ShoppingBag, CheckCircle } from 'lucide-react';

const MarketplaceCategories = ({ categories, navigate }) => {
    const categoryMap = {
        'Raw Materials': { section: 'raw', category: 'all' },
        'Organic Waste': { section: 'raw', category: 'Organic' },
        'Industrial Materials': { section: 'raw', category: 'Metals' }, // adjust as needed
    };

    return (
        <div id="categories" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">Explore Our Categories</h2>
                <p className="text-xl text-gray-600 animate-slideUp">Find the sustainable materials you need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                    <div key={category.title} className={`animate-[slideUp_500ms_ease-out_${index * 200}ms]`}>
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="relative h-48">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-30">
                                    <category.icon className="h-12 w-12 text-white transform transition-transform duration-300 hover:scale-110" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {category.items.map((item) => (
                                        <li key={item} className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate('/marketplace/buy')}
                                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                                >
                                    <ShoppingBag className="h-5 w-5 mr-2" /> Browse Category
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.23,1.01,.32,1) both; }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
        </div>
    );
};

export default MarketplaceCategories; 