import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollLinks = [
    { label: 'Beranda', to: 'hero' },
    { label: 'Tentang', to: 'about' },
    { label: 'Blog', to: 'blog' },
    { label: 'Project', to: 'projects' },
    { label: 'Kontak', to: 'contact' },
  ];

  // Scroll handler untuk shadow navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 96; // Sesuaikan tinggi navbar
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const isActive = (id) => {
    return location.hash === `#${id}`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-md'} bg-white`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <RouterLink
          to="/"
          className="text-xl font-bold hover:text-green-400 transition-colors"
        >
          Bima Wiryadi Praja
        </RouterLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          title={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {scrollLinks.map(({ label, to }) => (
            <li key={to}>
              <button
                onClick={() => handleNavClick(to)}
                aria-current={isActive(to) ? 'page' : undefined}
                className={`transition-colors ${
                  isActive(to) ? 'text-green-500 font-semibold' : 'hover:text-green-400'
                }`}
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            {scrollLinks.map(({ label, to }) => (
              <li key={to}>
                <button
                  onClick={() => handleNavClick(to)}
                  aria-current={isActive(to) ? 'page' : undefined}
                  className={`transition-colors ${
                    isActive(to) ? 'text-green-500 font-semibold' : 'hover:text-green-400'
                  }`}
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
