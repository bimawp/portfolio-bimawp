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
        className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
        aria-label="Profil Utama"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Foto di Kiri */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-1/2 left-0 top-0 h-full z-10"
        >
          <img
            src="/profil1.jpg"
            alt="Foto profil Bima"
            className="w-full h-full object-cover object-center grayscale opacity-30 blur-sm"
            style={{
              mixBlendMode: "screen",
            }}
          />
        </motion.div>

        {/* Overlay gelap full layar */}
        <div className="absolute inset-0 bg-black/70 z-20"></div>

        {/* Konten */}
        <main className="relative z-30 w-full max-w-6xl px-6 mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          {/* Spacer kiri agar teks tetap di kanan */}
          <div className="hidden md:block w-1/2"></div>

          {/* Konten Teks */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-gray-100">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left leading-tight"
            >
              Bima Wiryadi Praja
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg max-w-lg text-center md:text-left text-gray-300"
            >
              Mahasiswa Sistem Informasi STMIK Mardira Indonesia dengan minat
              dalam <strong>pengembangan web</strong> &{" "}
              <strong>teknologi digital</strong>. Dikenal juga sebagai{" "}
              <strong>Bima WP</strong>.
            </motion.p>
          </div>
        </main>
      </motion.section>
    </>
  );
}
