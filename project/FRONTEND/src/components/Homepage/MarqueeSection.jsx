import React, { useState } from 'react';
import { X } from 'lucide-react';

const items = [
  '🌱 50,000+ Tons of Materials Traded',
  '🚀 10,000+ Active Users',
  '🌍 Global Network of Buyers & Sellers',
  '♻️ 30% Carbon Reduction Achieved',
  '🏆 Awarded Best Green Startup 2024',
  '🔒 Secure & Transparent Transactions',
  '💡 AI-Driven Pricing & Analytics',
];

const MarqueeSection = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="w-full bg-green-100 py-3 overflow-hidden relative flex items-center">
      <div className="whitespace-nowrap animate-marquee flex items-center flex-1">
        {items.map((item, idx) => (
          <span key={idx} className="mx-8 text-green-800 font-semibold text-lg">
            {item}
          </span>
        ))}
      </div>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-green-800 hover:text-green-900 p-1 rounded-full bg-green-200 hover:bg-green-300 transition"
        onClick={() => setVisible(false)}
        aria-label="Close marquee"
      >
        <X size={20} />
      </button>
      <style>{`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        display: inline-block;
        min-width: 100%;
        animation: marquee 30s linear infinite;
      }
    `}</style>
    </div>
  );
};

export default MarqueeSection; 