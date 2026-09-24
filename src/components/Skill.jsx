
import { motion, useReducedMotion } from "framer-motion";

import {
  Code2,
  Database,
  Wrench
} from "lucide-react";

// Data keterampilan disimpan terpisah dari tampilan
// agar mudah diperbarui pada kemudian hari.

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Antarmuka & Pengalaman Pengguna",
    icon: Code2,
    description:
      "Teknologi untuk membangun antarmuka aplikasi web yang responsif dan interaktif.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Figma"
    ]
  },

  {
    id: "backend",
    title: "Backend & Database",
    subtitle: "Server & Pengelolaan Data",
    icon: Database,
    description:
      "Teknologi backend dan database untuk mendukung pengembangan aplikasi serta pengelolaan data.",
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "Supabase"
    ]
  },

  {
    id: "tools",
    title: "Tools & Platform",
    subtitle: "Development & Deployment",
    icon: Wrench,
    description:
      "Perangkat dan platform pendukung pengembangan, visualisasi data, serta deployment aplikasi.",
    skills: [
      "Git / GitHub",
      "Vercel",
      "Leaflet.js",
      "Google AppSheet",
      "Tableau",
      "VS Code",
      "WordPress",
      "XAMPP"
    ]
  }
];


// Komponen kartu keterampilan.

function SkillCard({ category }) {
  const Icon = category.icon;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-xl
        md:p-8
      "
      aria-labelledby={`${category.id}-heading`}
    >
      {/* Ikon kategori */}

      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-blue-600
          transition-colors
          group-hover:bg-blue-600
          group-hover:text-white
        "
      >
        <Icon
          size={27}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      {/* Nama kategori */}

      <div className="mb-5">
        <p
          className="
            mb-2
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-blue-600
          "
        >
          {category.subtitle}
        </p>

        <h3
          id={`${category.id}-heading`}
          className="
            text-xl
            font-bold
            tracking-tight
            text-gray-900
            md:text-2xl
          "
        >
          {category.title}
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-gray-600
          "
        >
          {category.description}
        </p>
      </div>

      {/* Daftar teknologi */}

      <div
        className="
          mt-auto
          border-t
          border-gray-100
          pt-6
        "
      >
        <ul
          className="
            flex
            flex-wrap
            gap-2
          "
          aria-label={`Teknologi ${category.title}`}
        >
          {category.skills.map((skill) => (
            <li key={skill}>
              <span
                className="
                  inline-flex
                  items-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-gray-50
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-700
                  transition-colors
                  duration-200
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-700
                "
              >
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}


// Komponen utama keterampilan.

export default function Skill() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-6
        py-24
        text-gray-900
      "
      aria-labelledby="skills-heading"
    >
      {/* Dekorasi latar */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-80
          w-80
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* Heading */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20
                }
          }
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.5
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
            "
          >
            Tech Stack
          </p>

          <h2
            id="skills-heading"
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-gray-900
              md:text-5xl
            "
          >
            Keahlian Teknis
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-600
            "
          >
            Teknologi, bahasa pemrograman,
            dan perangkat yang saya gunakan
            dalam pengembangan aplikasi web,
            sistem informasi, serta
            pengelolaan data.
          </p>
        </motion.div>

        {/* Kategori keterampilan */}

        <div
          className="
            grid
            grid-cols-1
            items-stretch
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.15
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1
              }}
              className="h-full"
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>

        {/* Informasi tambahan */}

        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-gray-500
            "
          >
            Penerapan sebagian teknologi
            tersebut dapat dilihat melalui
            proyek pengembangan aplikasi web,
            WebGIS, dan sistem informasi
            yang saya tampilkan dalam
            portofolio ini.
          </p>
        </div>
      </div>
    </section>
  );
}