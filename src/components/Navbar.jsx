import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md text-gray-100 py-4 fixed w-full top-0 z-50 font-poppins">
      <div className="container mx-auto flex justify-between items-center px-6">
        <span className="font-bold text-2xl tracking-wide text-gray-200 hover:scale-105 transition-transform duration-300">
          Bima WP
        </span>
        <ul className="flex gap-6 text-base font-medium">
          {['hero','about','projects','blog','contact'].map((sec) => (
            <li key={sec}>
              <Link
                to={sec}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}