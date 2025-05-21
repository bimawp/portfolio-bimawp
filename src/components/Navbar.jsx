import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

const scrollLinks = [
  { label: 'Beranda', to: '#' },
  { label: 'Tentang', to: '#tentang' },
  { label: 'Projek', to: '#projects' },
  { label: 'Blog', to: '#blog' },
  { label: 'Kontak', to: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (to) => {
    // Simple check: active if current location.hash === to or if no hash and to === '#'
    return location.hash === to || (location.hash === '' && to === '#');
  };

  const handleNavClick = (to) => {
    setIsOpen(false);
    if (to === '#') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = to.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -60; // height navbar offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Close mobile menu on route/hash change (optional)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer" onClick={() => handleNavClick('#')}>
          LogoSaya
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {scrollLinks.map(({ label, to }) => (
            <li key={to}>
              <button
                onClick={() => handleNavClick(to)}
                className={`hover:text-green-600 transition-colors ${
                  isActive(to) ? 'text-green-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Menu Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX /> : <HiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg py-4 space-y-4 text-center font-medium">
          {scrollLinks.map(({ label, to }) => (
            <li key={to}>
              <button
                onClick={() => handleNavClick(to)}
                className="block w-full py-2 hover:text-green-600 transition-colors text-gray-800"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
