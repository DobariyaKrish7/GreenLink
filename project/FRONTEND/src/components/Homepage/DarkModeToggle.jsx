import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
    const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <button
            className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
        >
            {dark ? <Sun size={22} /> : <Moon size={22} />}
        </button>
    );
};

export default DarkModeToggle; 