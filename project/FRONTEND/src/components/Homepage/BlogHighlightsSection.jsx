import React, { useState } from 'react';

const blogs = [
    {
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
        title: 'How Biofuels Are Powering a Greener Future',
        desc: 'Biofuels are transforming the energy landscape. Learn how they reduce emissions and support sustainability.',
        full: 'Biofuels are derived from renewable resources and are helping to reduce our reliance on fossil fuels. By using biofuels, companies and individuals can significantly cut down on greenhouse gas emissions, making a positive impact on the environment. Discover the latest innovations and how you can be part of the green revolution.'
    },
    {
        image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=400&q=80',
        title: 'Top 5 Sustainable Materials for 2024',
        desc: 'Explore the most promising sustainable materials that are shaping the future of eco-friendly industries.',
        full: 'From recycled plastics to advanced biocomposites, sustainable materials are at the forefront of green innovation. These materials not only reduce waste but also offer new opportunities for businesses to operate responsibly. Learn which materials are trending and how they can benefit your projects.'
    },
    {
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
        title: 'Trading Green: How Our Marketplace Works',
        desc: 'A step-by-step guide to buying and selling sustainable materials on GreenFuel Market.',
        full: 'GreenFuel Market connects buyers and sellers of sustainable materials in a secure, transparent environment. Our platform makes it easy to list, discover, and trade eco-friendly products. Find out how you can get started and make a positive impact today.'
    }
];

const BlogHighlightsSection = () => {
    const [openIdx, setOpenIdx] = useState(null);
    return (
        <div className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Latest from Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col">
                            <img src={blog.image} alt={blog.title} className="rounded-lg h-40 w-full object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">{blog.title}</h3>
                            <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1">{blog.desc}</p>
                            <button
                                onClick={() => setOpenIdx(idx)}
                                className="text-green-600 dark:text-green-300 hover:underline font-medium mt-auto"
                            >
                                Read More &rarr;
                            </button>
                        </div>
                    ))}
                </div>
                {/* Modal for full blog content */}
                {openIdx !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-lg w-full p-8 relative animate-fadeIn">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-green-600 text-2xl font-bold"
                                onClick={() => setOpenIdx(null)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <img src={blogs[openIdx].image} alt={blogs[openIdx].title} className="rounded-lg h-40 w-full object-cover mb-4" />
                            <h3 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-300">{blogs[openIdx].title}</h3>
                            <p className="text-gray-700 dark:text-gray-200 mb-4">{blogs[openIdx].full}</p>
                        </div>
                        <style>{`
                            .animate-fadeIn { animation: fadeIn 0.2s; }
                            @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
                        `}</style>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogHighlightsSection; 