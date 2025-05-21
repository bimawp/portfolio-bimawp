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
        className="scroll-mt-24 relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c]"
        aria-label="Profil Utama"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Efek Bokeh */}
        <div className="absolute inset-0 z-0">
          <div className="w-80 h-80 bg-purple-400/30 rounded-full blur-3xl absolute top-1/3 left-1/4 animate-pulse" />
          <div className="w-96 h-96 bg-indigo-400/20 rounded-full blur-2xl absolute bottom-10 right-1/4 animate-ping" />
        </div>

        {/* Overlay gelap seluruh bg */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Overlay terang di kiri untuk foto */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/20 via-white/5 to-transparent z-20 pointer-events-none"></div>

        {/* Foto profil sebagai background kiri */}
        <motion.img
          src="/profil1.jpg"
          alt="Foto profil Bima Wiryadi Praja, Mahasiswa Sistem Informasi"
          loading="lazy"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 0.18 }}
          transition={{ duration: 1 }}
          className="hidden md:block absolute left-0 top-0 h-full w-1/2 object-cover object-center grayscale brightness-75 z-10"
          style={{
            mixBlendMode: "lighten",
          }}
        />

        {/* Konten Utama */}
        <main className="relative z-30 flex flex-col md:flex-row items-center justify-center h-full w-full px-4 max-w-6xl mx-auto">
          {/* Spacer kiri agar teks selalu di kanan */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Teks di kanan */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 md:ml-12 text-gray-100">
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
