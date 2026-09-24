import { motion } from "framer-motion";
import {
  ExternalLink,
  Map,
  School,
  Database,
  Globe2
} from "lucide-react";

const projects = [
  {
    title: "WebGIS Peta Sekolah Kabupaten Garut",
    role: "WebGIS Developer / Magang",
    period: "Agustus 2025 – Januari 2026",
    description:
      "Sistem informasi geografis yang dikembangkan selama kegiatan magang di Dinas Pendidikan Kabupaten Garut. Sistem menyediakan dashboard eksekutif, peta persebaran sekolah berdasarkan jenjang pendidikan, filter wilayah dan kondisi sekolah, serta informasi detail sekolah untuk mendukung kebutuhan Subbagian Perencanaan, Evaluasi dan Pelaporan.",
    image: "/projek4.webp",
    alt: "WebGIS Peta Sebaran Sekolah Dinas Pendidikan Kabupaten Garut",
    technologies: [
      "WebGIS",
      "Leaflet.js",
      "JavaScript",
      "Spatial Data"
    ],
    link: "https://peta-sekolah-ou7s.vercel.app",
    icon: Map,
    featured: true
  },

  {
    title: "Website & PPDB MA As Siroji",
    role: "Programmer / Project Manager",
    period: "September – Desember 2024",
    description:
      "Website sekolah yang menyediakan informasi akademik dan non-akademik, publikasi berita, galeri kegiatan, kalender akademik, profil sekolah, serta sistem PPDB online. Saya terlibat dalam pengembangan aplikasi, perancangan database, dan koordinasi pengerjaan proyek.",
    image: "/projek1.webp",
    alt: "Tampilan Website dan PPDB MA As Siroji",
    technologies: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "Vercel"
    ],
    link: "https://www.maassiroji.sch.id/",
    icon: School,
    featured: false
  },

  {
    title: "Parahyangan Reborn",
    role: "Pengelolaan Sistem Data / Google AppSheet",
    period: "Oktober – Desember 2025",
    description:
      "Sistem berbasis Google AppSheet yang digunakan untuk membantu pengelolaan data lembaga penerima bantuan pembangunan. Sistem mendukung pengelolaan ribuan data lembaga secara terstruktur sehingga proses pencatatan dan pemantauan data dapat dilakukan dengan lebih efisien.",
    image: "/projek2.webp",
    alt: "Aplikasi pengelolaan data berbasis Google AppSheet",
    technologies: [
      "Google AppSheet",
      "Data Management",
      "Database",
      "Workflow"
    ],
    link: "https://gapappsheets.com",
    icon: Database,
    featured: false
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-gray-100 px-6 py-20 text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Portfolio
          </p>

          <h2
            id="projects-heading"
            className="text-4xl font-extrabold tracking-tight md:text-5xl"
          >
            Proyek Pilihan
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Beberapa proyek yang pernah saya kerjakan dalam
            pengembangan web, WebGIS, sistem informasi, dan
            pengelolaan data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.15
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08
                }}
                className={`
                  group overflow-hidden rounded-2xl
                  border bg-white shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${
                    project.featured
                      ? "border-blue-300 ring-1 ring-blue-100"
                      : "border-gray-200"
                  }
                `}
              >
                {/* Gambar */}
                <div className="relative overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="
                      h-64 w-full object-cover
                      object-top transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />

                  {project.featured && (
                    <span
                      className="
                        absolute left-4 top-4
                        rounded-full bg-blue-600
                        px-3 py-1.5 text-xs
                        font-semibold text-white
                        shadow
                      "
                    >
                      Featured Project
                    </span>
                  )}
                </div>

                {/* Konten */}
                <div className="p-6 md:p-7">
                  <div className="mb-5 flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl bg-blue-50
                        text-blue-600
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {project.role}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {project.period}
                      </p>
                    </div>
                  </div>

                  <p className="leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Teknologi */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full bg-gray-100
                          px-3 py-1.5 text-xs
                          font-medium text-gray-700
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Link proyek */}
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lihat proyek ${project.title}`}
                      className="
                        inline-flex items-center
                        gap-2 font-semibold
                        text-blue-600
                        transition-colors
                        hover:text-blue-800
                      "
                    >
                      Lihat Proyek
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}