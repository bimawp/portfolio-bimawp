export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold">Projek Saya</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Proyek 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <picture>
              <source srcSet="projek1.webp" type="image/webp" />
              <img
                src="projek1.jpg"
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
              <source srcSet="projek2.webp" type="image/webp" />
              <img
                src="projek2.jpg"
                alt="Aplikasi AppSheet dari PT GAP"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </picture>
            <h3 className="text-2xl font-semibold">Proyek 2</h3>
            <p className="text-gray-600 mb-4">
              Aplikasi Appsheet untuk mengurus dan mengendalikan data dari 3800 lembaga di Indonesia. Projek ini merupakan program dari PT. GAP untuk mengurus lembaga yang mendapatkan bantuan pembangunan.
            </p>
            <a
              href="https://www.appsheet.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat proyek AppSheet dari PT GAP"
              className="text-primary hover:text-primary-light"
            >
              Lihat Proyek
            </a>
          </div>

          {/* Proyek 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <picture>
              <source srcSet="projek3.webp" type="image/webp" />
              <img
                src="projek3.jpg"
                alt="Dashboard stok buku CV Al Karomah"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </picture>
            <h3 className="text-2xl font-semibold">Proyek 3</h3>
            <p className="text-gray-600 mb-4">
              Projek dari CV Al Karomah untuk membuat dashboard stok buku percetakan agar mudah di kelola. Mengelola barang masuk, keluar, dan update barang di setiap kolom barang agar memudahkan admin mengelola dalam jangka panjang.
            </p>
            <a
              href="http://localhost:8080/JavaLanjutan1/home.jsp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat proyek dashboard stok buku dari CV Al Karomah"
              className="text-primary hover:text-primary-light"
            >
              Lihat Proyek
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
