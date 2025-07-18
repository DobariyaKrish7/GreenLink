import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const team = [
    {
        name: "Malay Virpariya",
        role: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        linkedin: "https://linkedin.com/in/malayvirpariya",
        github: "https://github.com/malayvirpariya",
        twitter: "https://twitter.com/malayvirpariya"
    },
    {
        name: "Divy Vaghani",
        role: "Head of Operations",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        linkedin: "https://linkedin.com/in/divyvaghani",
        github: "https://github.com/divyvaghani",
        twitter: "https://twitter.com/divyvaghani"
    },
    // Add more team members as needed
];

const TeamSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow group">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100 group-hover:border-green-400 transition"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-700 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800"><FaLinkedin size={22} /></a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800"><FaGithub size={22} /></a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800"><FaTwitter size={22} /></a>
                </div>
            </div>
        ))}
    </div>
);

export default TeamSection; 