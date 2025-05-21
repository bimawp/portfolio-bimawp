import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Projects() {
  const projects = [
    {
      title: "Website MA As Shiroji",
      description: "Website yang menampilkan info akademik, PPDB online, galeri, kalender akademik, dan profil sekolah dengan desain responsif.",
      image: "/projek1.webp",
      alt: "Tampilan Website MA As Shiroji",
      link: "https://www.maassiroji.sch.id/"
    },
    {
      title: "Aplikasi AppSheet PT GAP",
      description: "Aplikasi pengelolaan data lembaga di Indonesia yang mendukung program bantuan pembangunan.",
      image: "/projek2.webp",
      alt: "Aplikasi AppSheet PT GAP",
      link: "https://gapappsheets.com"
    },
    {
      title: "Website Komunitas Bentang Dataran Tinggi",
      description: "Situs komunitas yang fokus pada pelestarian dan pengembangan lingkungan dataran tinggi.",
      image: "/projek3.webp",
      alt: "Website Komunitas Bentang Dataran Tinggi",
      link: "https://bentangdatarantinggi.web.app"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-50 text-gray-900"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-extrabold">Projek Saya</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, image, alt, link }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <picture>
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg mb-5"
                />
              </picture>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary-dark"
                aria-label={`Lihat proyek ${title}`}
              >
                Lihat Proyek &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
