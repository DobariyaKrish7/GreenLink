import React from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        image: "https://images.pexels.com/photos/1933382/pexels-photo-1933382.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Green Fuel Marketplace",
        subtitle: "Buy and sell biofuels, hydrogen, and other renewable energy sources."
    },
    {
        image: "https://images.pexels.com/photos/1192032/pexels-photo-1192032.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Sustainable Energy Trading",
        subtitle: "Connect with suppliers and buyers of eco-friendly fuels."
    },
    // ... (add more slides as needed)
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[600px] overflow-hidden bg-green-900">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover opacity-20 absolute"
                    />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <div className="text-white max-w-2xl">
                            <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                            <p className="text-xl mb-8">{slide.subtitle}</p>
                            <div className="space-x-4">
                                <button
                                    onClick={() => navigate('/marketplace')}
                                    className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
                                >
                                    Explore Marketplace
                                </button>
                                <button
                                    onClick={() => {
                                        localStorage.getItem("token") ? navigate("/marketplace") : navigate("/signup");
                                    }}
                                    className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-400 transition-colors"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection; 