import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        q: 'What is GreenFuel Market?',
        a: 'GreenFuel Market is a platform for buying, selling, and trading sustainable materials and fuels.'
    },
    {
        q: 'How do I join?',
        a: 'Simply sign up for a free account and start exploring the marketplace.'
    },
    {
        q: 'Is my data secure?',
        a: 'Yes, we use industry-standard security to protect your information and transactions.'
    },
    {
        q: 'How do I contact support?',
        a: 'You can reach us via the contact page or email us at support@greenfuelmarket.com.'
    }
];

const FAQSection = () => {
    const [open, setOpen] = useState(null);
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow p-6">
                            <button
                                className="flex justify-between items-center w-full text-lg font-medium text-left text-green-800 focus:outline-none"
                                onClick={() => setOpen(open === idx ? null : idx)}
                            >
                                <span>{faq.q}</span>
                                {open === idx ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {open === idx && (
                                <div className="mt-4 text-gray-700 text-base border-t pt-4">{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection; 