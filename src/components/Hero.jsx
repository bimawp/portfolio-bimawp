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
        className="scroll-mt-24 relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
        aria-label="Profil Utama"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        {/* Konten Utama */}
        <main className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Foto Profil */}
            <motion.img
              src="/profil1.jpg"
              alt="Foto profil Bima Wiryadi Praja, Mahasiswa Sistem Informasi"
              loading="lazy"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 md:w-[300px] md:h-[300px] object-cover object-center rounded-full border-4 border-gray-900 shadow-lg filter grayscale bg-gray-900"
              style={{
                background: "#18181b", // abu gelap, biar nyatu dengan bg
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.2)",
              }}
            />

            {/* Teks Profil */}
            <div className="text-gray-100 text-center md:text-left px-2">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
              >
                Bima Wiryadi Praja
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
              >
                Mahasiswa Sistem Informasi STMIK Mardira Indonesia dengan minat dalam{" "}
                <strong>pengembangan web</strong> &{" "}
                <strong>teknologi digital</strong>.<br />
                Dikenal juga sebagai <strong>Bima WP</strong>.
              </motion.p>
            </div>
          </div>
        </main>
      </motion.section>
    </>
  );
}
