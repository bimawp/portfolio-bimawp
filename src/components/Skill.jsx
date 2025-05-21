import { FaReact, FaLaravel, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import SEO from './SEO';

export default function Skill() {
  const skills = [
    { name: 'React', icon: <FaReact size={40} className="text-gray-600" /> },
    { name: 'Laravel 10', icon: <FaLaravel size={40} className="text-gray-600" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-gray-600" /> },
    { name: 'HTML', icon: <FaHtml5 size={40} className="text-gray-600" /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} className="text-gray-600" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-gray-600" /> },
  ];
  return (
    <>
      <SEO
        title="Skill – Bima Wiryadi Praja"
        description="Daftar skill dan teknologi yang dikuasai Bima Wiryadi Praja, mulai dari React, Laravel, Node.js, HTML, CSS, hingga JavaScript."
        url="https://www.bimawiryadipraja.my.id/skills"
        image="https://www.bimawiryadipraja.my.id/profil1.jpg"
      />
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Skill Saya</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center hover:scale-105 transition-transform">
                {skill.icon}
                <p className="mt-2 font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}