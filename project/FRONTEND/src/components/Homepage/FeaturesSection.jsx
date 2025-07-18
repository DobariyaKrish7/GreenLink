import React from 'react';
import { Globe, Award, Recycle } from 'lucide-react';

const FeaturesSection = () => (
    <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GreenFuel Market?</h2>
                <p className="text-xl text-gray-600">We're revolutionizing the way sustainable materials are traded</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Global Network</h3>
                    <p className="text-gray-600">Connect with verified buyers and sellers worldwide</p>
                </div>
                <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
                    <p className="text-gray-600">All materials meet strict quality standards</p>
                </div>
                <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Recycle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Sustainable Impact</h3>
                    <p className="text-gray-600">Contribute to circular economy goals</p>
                </div>
            </div>
        </div>
    </div>
);

export default FeaturesSection; 