import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-200 py-20 text-gray-900">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Kontak Saya
        </motion.h2>
        <p className="text-lg mb-10">Berikut adalah cara untuk menghubungi saya:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <motion.a href="https://wa.me/qr/CBSN5YUM2CYFJ1" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-lg hover:scale-110 transition">
            <FaWhatsapp className="text-3xl mx-auto mb-4" /> WhatsApp
          </motion.a>
          <motion.a href="https://www.instagram.com/bwp_bima?igsh=MXdyeThzeWNkcnZxcQ==" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-lg hover:scale-110 transition">
            <FaInstagram className="text-3xl mx-auto mb-4" /> Instagram
          </motion.a>
          <motion.a href="https://www.facebook.com/share/1BRFsYuuj9/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-lg hover:scale-110 transition">
            <FaFacebook className="text-3xl mx-auto mb-4" /> Facebook
          </motion.a>
          <motion.a href="https://www.tiktok.com/@bimawirya700?_t=ZS-8vzMoHgYjQY&_r=1" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-lg hover:scale-110 transition">
            <FaTiktok className="text-3xl mx-auto mb-4" /> TikTok
          </motion.a>
        </div>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg font-semibold mb-2">Alamat Saya:</p>
          <a href="https://www.google.com/maps?q=Perumahan+Davira+Indah+Blok+C-8,+Desa+Sindangsari,+Kecamatan+Banyuresmi,+Kabupaten+Garut,+Provinsi+Jawa+Barat,+Indonesia" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
            Perumahan Davira Indah Blok C-8<br />
            Desa Sindangsari, Kecamatan Banyuresmi<br />
            Kabupaten Garut, Provinsi Jawa Barat, Indonesia
          </a>
          <p className="mt-4 text-gray-600">Silakan klik alamat di atas untuk membuka di Google Maps.</p>
        </div>
      </div>
    </section>
  );
}