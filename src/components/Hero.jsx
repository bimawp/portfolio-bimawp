import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";

const noiseUrl = "/noise.webp";

export default function Hero() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Ads error:", e);
    }
  }, []);

  return (
    <>
      <SEO
        title="Bima Wiryadi Praja | Mahasiswa Sistem Informasi"
        description="Profil Bima Wiryadi Praja, Mahasiswa Sistem Informasi STMIK Mardira Indonesia yang memiliki minat dalam pengembangan web dan teknologi digital."
        url="https://www.bimawiryadipraja.my.id"
        image="https://www.bimawiryadipraja.my.id/profil1.webp"
      />

      <motion.section
        id="hero"
        className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#23243a] to-gray-800"
        aria-label="Profil Utama"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${noiseUrl})`,
            opacity: 0.35,
            mixBlendMode: "screen",
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        ></div>

        {/* Foto profil */}
        <picture>
          <source srcSet="/profil1.webp" type="image/webp" />
          <motion.img
            src="/profil1.webp"
            alt="Foto profil Bima Wiryadi Praja"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="block md:absolute w-full md:w-1/2 h-auto md:h-full object-cover grayscale brightness-100 z-0 mt-16 md:mt-0"
            style={{ mixBlendMode: "lighten" }}
          />
        </picture>

        {/* Overlay hitam */}
        <div className="absolute inset-0 bg-black/60 z-20"></div>

        {/* Gradasi kiri */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/20 via-white/5 to-transparent z-30 pointer-events-none"></div>

        {/* Konten */}
        <main className="relative z-40 flex flex-col md:flex-row items-center justify-center px-4 py-10 w-full max-w-6xl mx-auto text-gray-100">
          <div className="hidden md:block md:w-1/2"></div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              <span className="text-red-600">B</span>ima Wiryadi Praja
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
            >
              Mahasiswa Sistem Informasi STMIK Mardira Indonesia dengan minat
              dalam <strong>pengembangan web</strong> &{" "}
              <strong>teknologi digital</strong>.
              <br />
              Dikenal juga sebagai <strong>Bima WP</strong>.
            </motion.p>

            {/* Iklan AdSense */}
            <ins
              className="adsbygoogle mt-4"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6652570143802609"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </main>
      </motion.section>
    </>
  );
}
