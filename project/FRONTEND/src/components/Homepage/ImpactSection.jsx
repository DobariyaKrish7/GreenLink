import React from 'react';

const ImpactSection = () => (
    <div className="bg-white rounded-lg shadow-sm p-12 mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
            </div>
            <div>
                <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600">Tons Materials Traded</div>
            </div>
            <div>
                <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-gray-600">Carbon Reduction</div>
            </div>
        </div>
    </div>
);

export default ImpactSection; 