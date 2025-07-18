import React from 'react';

const testimonials = [
    {
        name: 'Amit S.',
        role: 'Biofuel Buyer',
        quote: 'GreenFuel Market made it so easy to find reliable suppliers. The process was seamless and transparent!',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Priya V.',
        role: 'Material Seller',
        quote: 'I sold my recycled materials quickly and got great support from the team. Highly recommended!',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Rahul D.',
        role: 'Sustainability Officer',
        quote: 'The platform helps us track our carbon reduction and connect with new partners.',
        avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
];

const TestimonialsSection = () => (
    <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                        <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                        <p className="text-lg italic text-gray-700 mb-4">"{t.quote}"</p>
                        <div className="font-semibold text-green-700">{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.role}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default TestimonialsSection; 