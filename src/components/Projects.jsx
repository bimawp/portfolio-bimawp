import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold">Projek Saya</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Proyek 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <picture>
              <source srcSet="/projek1.webp" type="image/webp" />
              <img
                src="/projek1.webp"
                alt="Tampilan Website MA As Shiroji"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </picture>
            <h3 className="text-2xl font-semibold">Proyek 1</h3>
            <p className="text-gray-600 mb-4">
              Website MA As Shiroji menyajikan informasi akademik dan non-akademik, termasuk publikasi berita, PPDB online, galeri kegiatan, kalender akademik, dan profil sekolah, dengan tampilan responsif dan mudah diakses di berbagai perangkat.
            </p>
            <a
              href="https://www.maassiroji.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat proyek Website MA As Shiroji"
              className="text-primary hover:text-primary-light"
            >
              Lihat Proyek
            </a>
          </div>

          {/* Proyek 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <picture>
              <source srcSet="/projek2.webp" type="image/webp" />
              <img
                src="/projek2.webp"
                alt="Aplikasi AppSheet dari PT GAP"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </picture>
            <h3 className="text-2xl font-semibold">Proyek 2</h3>
            <p className="text-gray-600 mb-4">
              Aplikasi AppSheet untuk mengurus dan mengendalikan data dari 3800 lembaga di Indonesia. Projek ini merupakan program dari PT. GAP untuk mengurus lembaga yang mendapatkan bantuan pembangunan.
            </p>
            <a
              href="https://gapappsheets.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat aplikasi AppSheet PT GAP"
              className="text-primary hover:text-primary-light"
            >
              Lihat Proyek
            </a>
          </div>

          {/* Proyek 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <picture>
              <source srcSet="/projek3.webp" type="image/webp" />
              <img
                src="/projek3.webp"
                alt="Website Komunitas Bentang Dataran Tinggi"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </picture>
            <h3 className="text-2xl font-semibold">Proyek 3</h3>
            <p className="text-gray-600 mb-4">
              Website komunitas Bentang Dataran Tinggi menyajikan informasi berita, kegiatan, dan program untuk meningkatkan kualitas dan pelestarian lingkungan di dataran tinggi.
            </p>
            <a
              href="https://bentangdatarantinggi.web.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat website komunitas Bentang Dataran Tinggi"
              className="text-primary hover:text-primary-light"
            >
              Lihat Proyek
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
