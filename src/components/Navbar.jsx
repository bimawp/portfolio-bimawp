import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollLinks = [
    { label: 'Beranda', to: 'hero' },
    { label: 'Tentang', to: 'about' },
    { label: 'Blog', to: 'blog' },
    { label: 'Project', to: 'projects' },
    { label: 'Kontak', to: 'contact' },
  ];

const handleNavClick = (id) => {
  setIsOpen(false);
  if (location.pathname !== '/') {
    // Navigasi ke halaman utama dengan query scroll
    navigate(`/?scrollTo=${id}`);
  } else {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  }
};

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <RouterLink
          to="/"
          className="text-xl font-bold hover:text-green-400 transition-colors"
        >
          Bima Wiryadi Praja
        </RouterLink>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden md:flex space-x-6 font-medium">
          {scrollLinks.map(({ label, to }) => (
            <li key={to}>
              <button
                onClick={() => handleNavClick(to)}
                className="hover:text-green-400 transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <RouterLink to="/tugas" className="hover:text-green-400 transition-colors">
              Tugas
            </RouterLink>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            {scrollLinks.map(({ label, to }) => (
              <li key={to}>
                <button
                  onClick={() => handleNavClick(to)}
                  className="hover:text-green-400 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <RouterLink
                to="/tugas"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-400 transition-colors"
              >
                Tugas
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
