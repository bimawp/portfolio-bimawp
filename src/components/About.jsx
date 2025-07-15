import { motion } from 'framer-motion';
import { useEffect } from 'react';

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export default function About() {

useEffect(() => {
  const handleHashScroll = () => {
    if (window.location.hash === "#about") {
      const el = document.getElementById("about");
      if (el) {
        const NAVBAR_HEIGHT = 88;

        // Tunggu sampai semua animasi selesai dan layout stabil
        requestAnimationFrame(() => {
          setTimeout(() => {
            const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 600); // Sedikit lebih lama agar framer-motion selesai (sesuai duration animasi: 0.6s)
        });
      }
    }
  };

  handleHashScroll();
}, []);


  return (
    <>
      <motion.section
        id="about"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        className="scroll-mt-[50px] py-20 px-6 bg-gradient-to-r from-gray-600 to-gray-800 text-gray-100"
        aria-labelledby="about-heading"
      >

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 id="about-heading" className="text-4xl font-extrabold tracking-wide drop-shadow">
            Tentang Saya
          </h2>
          <article className="text-lg space-y-4">
            <p>
              Halo, saya <strong>Bima Wiryadi Praja</strong>, seorang Mahasiswa juga pengembang web yang selalu bersemangat dengan latar belakang di bidang Sistem Informasi. Saya memiliki pengalaman dalam mengembangkan aplikasi web menggunakan React.js, Next.js, Laravel dan Tailwind CSS.
            </p>
            <p>
              Saya selalu mencari solusi kreatif untuk masalah yang kompleks, dan saya percaya bahwa teknologi dapat menciptakan pengalaman yang berdampak positif bagi penggunanya.
            </p>
            <p>
              Saya senang bekerja di projek yang menantang dan berusaha untuk terus belajar dan berkembang di dunia teknologi. Selain itu, saya juga tertarik pada pengelolaan database dan pengembangan aplikasi full-stack. Saya percaya bahwa dengan pendekatan yang tepat, teknologi dapat memberikan solusi inovatif yang bermanfaat bagi masyarakat.
            </p>
            <p>
              Ketika tidak bekerja, saya menikmati mengeksplorasi tren teknologi terbaru dan membangun proyek-proyek pribadi yang memperkaya keterampilan saya. Saya selalu terbuka untuk kolaborasi dan kesempatan untuk berkembang lebih jauh dalam dunia pengembangan web.
            </p>
          </article>
          <p className="text-xl text-gray-300">
            Saya percaya bahwa desain dan teknologi yang tepat dapat menciptakan solusi berdampak positif bagi penggunanya.
          </p>
        </div>
      </motion.section>
    </>
  );
}
