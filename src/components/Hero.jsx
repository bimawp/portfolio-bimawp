import { motion } from "framer-motion";
import SEO from "./SEO";

export default function Hero() {
  return (
    <>
      <SEO
        title="Bima Wiryadi Praja | Mahasiswa Sistem Informasi"
        description="Profil Bima Wiryadi Praja, Mahasiswa Sistem Informasi STMIK Mardira Indonesia yang memiliki minat dalam pengembangan web dan teknologi digital."
        url="https://www.bimawiryadipraja.my.id"
        image="https://www.bimawiryadipraja.my.id/profil1.jpg"
      />
      <motion.section
        id="hero"
        className="scroll-mt-24 relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
        aria-label="Profil Utama"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        {/* Overlay gelap seluruh bg */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Overlay terang di kiri untuk foto */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/30 via-white/10 to-transparent z-20 pointer-events-none"></div>

        {/* Konten Utama */}
        <main className="relative z-30 flex flex-col md:flex-row items-center justify-center h-full w-full px-4 max-w-6xl mx-auto">
          {/* Foto di kiri */}
          <motion.img
            src="/profil1.jpg"
            alt="Foto profil Bima Wiryadi Praja, Mahasiswa Sistem Informasi"
            loading="lazy"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            className="w-48 h-48 md:w-[300px] md:h-[300px] object-cover object-center rounded-full shadow-2xl border-4 border-white bg-gray-900"
            style={{
              background: "#18181b",
            }}
          />

          {/* Teks di kanan */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 md:ml-12 text-gray-100">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg text-center md:text-left"
            >
              Bima Wiryadi Praja
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm md:text-lg leading-relaxed max-w-lg text-center md:text-left"
            >
              Mahasiswa Sistem Informasi STMIK Mardira Indonesia dengan minat dalam{" "}
              <strong>pengembangan web</strong> &{" "}
              <strong>teknologi digital</strong>.<br />
              Dikenal juga sebagai <strong>Bima WP</strong>.
            </motion.p>
          </div>
        </main>
      </motion.section>
    </>
  );
}
