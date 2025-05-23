export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 border-t mt-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <nav aria-label="Footer Navigation" className="flex justify-center space-x-8 mb-4">
          <a href="#about" aria-label="Navigasi ke bagian Tentang" className="text-gray-300 hover:text-green-400 transition-colors">
            Tentang
          </a>
          <a href="#projects" aria-label="Navigasi ke bagian Proyek" className="text-gray-300 hover:text-green-400 transition-colors">
            Proyek
          </a>
          <a href="#contact" aria-label="Navigasi ke bagian Kontak" className="text-gray-300 hover:text-green-400 transition-colors">
            Kontak
          </a>
          <a href="#blog" aria-label="Navigasi ke bagian Blog" className="text-gray-300 hover:text-green-400 transition-colors">
            Blog
          </a>
        </nav>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bima Wiryadi Praja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
