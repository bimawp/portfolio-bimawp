import { motion } from "framer-motion";
import SEO from "./SEO";

// Pastikan file noise.png ada di public/
const noiseUrl = "/noise.png";

export default function Hero() {
  return (
    <>
      <SEO
        title="Bima Wiryadi Praja | Mahasiswa Sistem Informasi"
        description="Profil Bima Wiryadi Praja, Mahasiswa Sistem Informasi STMIK Mardira Indonesia yang memiliki minat dalam pengembangan web dan teknologi digital."
        url="https://www.bimawiryadipraja.my.id"
        image="https://www.bimawiryadipraja.my.id/profil1.png"
      />

      <motion.section
        id="hero"
        className="scroll-mt-24 relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#23243a] to-gray-800"
        aria-label="Profil Utama"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        {/* Layer noise totol putih */}
        <div
          className="pointer-events-none absolute inset-0 z-40"
          style={{
            backgroundImage: `url(${noiseUrl})`,
            opacity: 0.22, // dikurangi supaya tidak terlalu dominan
            mixBlendMode: "screen",
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        ></div>

        {/* Foto profil + glow putih blur */}
        <div className="hidden md:block relative w-1/2 h-full z-10">
          {/* Glow putih blur besar di belakang foto */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-[45px] -z-10" />
          <motion.img
            src="/profil1.png"
            alt="Foto profil Bima Wiryadi Praja"
            loading="lazy"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="rounded-full object-cover object-center grayscale-0 brightness-100"
            style={{ mixBlendMode: "soft-light" }}
          />
        </div>

        {/* Overlay hitam transparan seluruh background */}
        <div className="absolute inset-0 bg-black/60 z-20"></div>

        {/* Overlay gradasi terang di kiri */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/10 via-white/5 to-transparent z-30 pointer-events-none"></div>

        {/* Konten Utama */}
        <main className="relative z-40 flex flex-col md:flex-row items-center justify-center h-full w-full px-4 max-w-6xl mx-auto">
          {/* Spacer kiri agar teks selalu di kanan */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Teks di kanan */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 md:ml-12 text-gray-100">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] text-center md:text-left"
            >
              <span className="text-red-600">B</span>ima Wiryadi Praja
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm md:text-lg leading-relaxed max-w-lg text-center md:text-left"
            >
              Mahasiswa Sistem Informasi STMIK Mardira Indonesia dengan minat dalam{" "}
              <strong>pengembangan web</strong> & <strong>teknologi digital</strong>.<br />
              Dikenal juga sebagai <strong>Bima WP</strong>.
            </motion.p>
          </div>
        </main>
      </motion.section>
    </>
  );
}
