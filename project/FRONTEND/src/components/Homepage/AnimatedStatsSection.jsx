import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Leaf, ShieldCheck } from 'lucide-react';

const stats = [
    { icon: <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />, label: 'Tons Traded', value: 50000 },
    { icon: <Users className="h-8 w-8 text-green-600 mx-auto" />, label: 'Active Users', value: 10000 },
    { icon: <Leaf className="h-8 w-8 text-green-600 mx-auto" />, label: 'Carbon Saved (tons)', value: 15000 },
    { icon: <ShieldCheck className="h-8 w-8 text-green-600 mx-auto" />, label: 'Verified Partners', value: 120 },
];

function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const interval = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(interval);
    }, [target, duration]);
    return count;
}

const AnimatedStatsSection = () => (
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, idx) => {
                    const count = useCountUp(stat.value);
                    return (
                        <div key={idx} className="bg-green-50 rounded-xl shadow p-8 hover:shadow-lg transition">
                            <div>{stat.icon}</div>
                            <div className="text-4xl font-bold text-green-700 my-2">{count.toLocaleString()}</div>
                            <div className="text-gray-700 text-lg font-medium">{stat.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export default AnimatedStatsSection; 