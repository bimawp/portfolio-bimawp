import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-100 py-20 text-gray-900"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-3xl text-center px-6">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kontak Saya
        </motion.h2>
        <p className="mb-10 text-lg text-gray-700">
          Jangan ragu untuk menghubungi saya melalui platform berikut:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {[{
            href: "https://wa.me/qr/CBSN5YUM2CYFJ1",
            icon: <FaWhatsapp className="text-4xl mx-auto" />,
            label: "WhatsApp"
          },{
            href: "https://www.instagram.com/bwp_bima",
            icon: <FaInstagram className="text-4xl mx-auto" />,
            label: "Instagram"
          },{
            href: "https://www.facebook.com/share/1BRFsYuuj9",
            icon: <FaFacebook className="text-4xl mx-auto" />,
            label: "Facebook"
          },{
            href: "https://www.tiktok.com/@bimawirya700",
            icon: <FaTiktok className="text-4xl mx-auto" />,
            label: "TikTok"
          }].map(({ href, icon, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Hubungi via ${label}`}
              className="bg-gray-900 text-white rounded-lg p-6 hover:bg-gray-800 shadow-lg transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
              <span className="block mt-3 font-semibold">{label}</span>
            </motion.a>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md text-left">
          <h3 className="text-xl font-semibold mb-3">Alamat Saya</h3>
          <address className="not-italic text-gray-700">
            <a
              href="https://www.google.com/maps?q=Perumahan+Davira+Indah+Blok+C-8,+Desa+Sindangsari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              title="Lihat lokasi di Google Maps"
            >
              Perumahan Davira Indah Blok C-8,<br />
              Desa Sindangsari, Kecamatan Leuwigoong,<br />
              Kabupaten Garut, Jawa Barat, Indonesia
            </a>
          </address>
          <p className="mt-4 text-gray-600 italic text-sm">Klik alamat di atas untuk membuka Google Maps.</p>
        </div>
      </div>
    </motion.section>
  );
}
