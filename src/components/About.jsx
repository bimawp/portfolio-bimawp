import { motion } from "framer-motion";
import {
  Code2,
  Database,
  MapPinned,
  BriefcaseBusiness
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Pengembangan aplikasi web menggunakan React, JavaScript, Tailwind CSS, PHP, dan Laravel."
  },
  {
    icon: MapPinned,
    title: "WebGIS",
    description:
      "Pengalaman mengembangkan sistem informasi geografis untuk pemetaan dan pengelolaan data sekolah."
  },
  {
    icon: Database,
    title: "Data & Database",
    description:
      "Perancangan dan pengelolaan data menggunakan MySQL, PostgreSQL, Supabase, dan platform berbasis data lainnya."
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Coordination",
    description:
      "Memiliki pengalaman mengoordinasikan pekerjaan, kebutuhan pengguna, dan pelaksanaan proyek."
  }
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="
        bg-slate-950
        px-6
        py-24
        text-white
      "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{ duration: 0.6 }}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-400
            "
          >
            Tentang Saya
          </p>

          <h2
            id="about-heading"
            className="
              text-4xl
              font-extrabold
              tracking-tight
              sm:text-5xl
            "
          >
            Mengembangkan solusi digital
            <span className="text-blue-400">
              {" "}berbasis kebutuhan nyata.
            </span>
          </h2>
        </div>

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          "
        >
          {/* Deskripsi */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6
            }}
            className="
              space-y-6
              text-base
              leading-8
              text-gray-300
              sm:text-lg
            "
          >
            <p>
              Saya <strong className="text-white">
                Bima Wiryadi Praja
              </strong>,
              lulusan S1 Teknik Informatika – Sistem Informasi
              dengan minat utama pada pengembangan aplikasi web,
              sistem informasi, dan pengelolaan data.
            </p>

            <p>
              Pengalaman saya mencakup pengembangan aplikasi
              berbasis React dan JavaScript, perancangan database,
              serta pengembangan WebGIS untuk kebutuhan Dinas
              Pendidikan Kabupaten Garut.
            </p>

            <p>
              Saya terbiasa mengerjakan proyek yang tidak hanya
              berfokus pada tampilan antarmuka, tetapi juga pada
              bagaimana data diproses, disajikan, dan digunakan
              untuk mendukung kebutuhan pengguna.
            </p>

            <p>
              Saya tertarik untuk berkembang sebagai
              <strong className="text-white">
                {" "}Frontend Developer
              </strong>,
              <strong className="text-white">
                {" "}Web Developer
              </strong>,
              maupun
              <strong className="text-white">
                {" "}Full Stack Developer
              </strong>
              melalui proyek yang memberi ruang untuk belajar,
              berkolaborasi, dan membangun solusi yang dapat
              digunakan secara nyata.
            </p>
          </motion.div>

          {/* Highlight kemampuan */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    transition
                    hover:border-blue-400/40
                    hover:bg-white/[0.07]
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-500/10
                      text-blue-400
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="
                      mb-2
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-gray-400
                    "
                  >
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}