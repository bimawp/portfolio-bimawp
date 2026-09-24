import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPinned,
  Printer,
  Download,
  CalendarDays
} from "lucide-react";

const experiences = [
  {
    icon: MapPinned,
    position: "Magang – Pengembangan WebGIS",
    company: "Dinas Pendidikan Kabupaten Garut",
    period: "Agustus 2025 – Januari 2026",
    description:
      "Mengembangkan dashboard eksekutif, peta sekolah untuk empat jenjang pendidikan, serta informasi detail sekolah guna mendukung kebutuhan Subbagian Perencanaan, Evaluasi dan Pelaporan.",
    details:
      "Pengembangan sistem diselesaikan pada November 2025 dan dilanjutkan dengan komunikasi hasil hingga proses pengesahan pada Januari 2026."
  },

  {
    icon: BriefcaseBusiness,
    position: "Supervisor",
    company: "CV Cahaya Bagendit",
    period: "2022 – 2025",
    description:
      "Mengoordinasikan pesanan, proses produksi digital printing, pengelolaan bahan, pengoperasian mesin HF, serta pengelolaan upah pekerja."
  },

  {
    icon: Printer,
    position: "Formatur Cetak & Digital Printing",
    company: "CV Al Karomah",
    period: "2018 – Sekarang",
    description:
      "Menyiapkan format produksi dan desain kebutuhan percetakan berdasarkan permintaan klien."
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="
        bg-white
        px-6
        py-24
        text-gray-900
      "
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
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
            Perjalanan Profesional
          </p>

          <h2
            id="experience-heading"
            className="
              text-4xl
              font-extrabold
              tracking-tight
              md:text-5xl
            "
          >
            Pengalaman & Pendidikan
          </h2>

          <p
            className="
              mt-5
              leading-relaxed
              text-gray-600
            "
          >
            Pengalaman profesional dan pendidikan yang
            membentuk kemampuan saya dalam pengembangan
            aplikasi, pengelolaan data, dan koordinasi pekerjaan.
          </p>
        </div>

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* Pengalaman */}
          <div>
            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                "
              >
                <BriefcaseBusiness size={22} />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Pengalaman Kerja
              </h3>
            </div>

            <div className="relative space-y-6">
              {/* Garis timeline */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-5
                  left-[21px]
                  top-5
                  hidden
                  w-px
                  bg-gray-200
                  sm:block
                "
              />

              {experiences.map((experience, index) => {
                const Icon = experience.icon;

                return (
                  <motion.article
                    key={`${experience.position}-${experience.company}`}
                    initial={{
                      opacity: 0,
                      x: -25
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08
                    }}
                    className="
                      relative
                      rounded-2xl
                      border
                      border-gray-200
                      bg-gray-50
                      p-6
                      sm:ml-16
                    "
                  >
                    {/* Icon timeline desktop */}
                    <div
                      className="
                        absolute
                        -left-[65px]
                        top-6
                        hidden
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        bg-blue-600
                        text-white
                        shadow
                        sm:flex
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div
                      className="
                        mb-3
                        flex
                        flex-wrap
                        items-start
                        justify-between
                        gap-3
                      "
                    >
                      <div>
                        <h4
                          className="
                            text-xl
                            font-bold
                            text-gray-900
                          "
                        >
                          {experience.position}
                        </h4>

                        <p
                          className="
                            mt-1
                            font-semibold
                            text-blue-600
                          "
                        >
                          {experience.company}
                        </p>
                      </div>

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-white
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-gray-600
                          shadow-sm
                        "
                      >
                        <CalendarDays size={14} />
                        {experience.period}
                      </span>
                    </div>

                    <p
                      className="
                        leading-relaxed
                        text-gray-600
                      "
                    >
                      {experience.description}
                    </p>

                    {experience.details && (
                      <p
                        className="
                          mt-3
                          text-sm
                          leading-relaxed
                          text-gray-500
                        "
                      >
                        {experience.details}
                      </p>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Pendidikan */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.55
            }}
          >
            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                "
              >
                <GraduationCap size={23} />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Pendidikan
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-slate-950
                p-7
                text-white
                shadow-lg
              "
            >
              <span
                className="
                  inline-block
                  rounded-full
                  bg-blue-500/10
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-blue-300
                "
              >
                2022 – 2026
              </span>

              <h4
                className="
                  mt-5
                  text-2xl
                  font-bold
                "
              >
                S1 Teknik Informatika – Sistem Informasi
              </h4>

              <p
                className="
                  mt-2
                  font-semibold
                  text-blue-300
                "
              >
                STMIK Mardira Indonesia
              </p>

              <div
                className="
                  mt-6
                  space-y-4
                  border-t
                  border-white/10
                  pt-6
                  text-gray-300
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Status
                  </p>

                  <p className="mt-1">
                    Telah dinyatakan lulus,
                    menunggu wisuda
                  </p>
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    IPK Sementara
                  </p>

                  <p
                    className="
                      mt-1
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    3,57 / 4,00
                  </p>
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Tugas Akhir
                  </p>

                  <p
                    className="
                      mt-1
                      leading-relaxed
                    "
                  >
                    Penerapan Algoritma K-Means Clustering
                    untuk Pengelompokan Prioritas Intervensi
                    Fasilitas Sekolah Dasar di Kabupaten Garut.
                  </p>
                </div>
              </div>
            </div>

            {/* Tombol CV */}
            <a
              href="/cv-bima-wiryadi-praja.pdf"
              download
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3.5
                font-semibold
                text-white
                transition-colors
                hover:bg-blue-700
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-blue-600
              "
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}