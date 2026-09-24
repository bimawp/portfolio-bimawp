
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2
} from "lucide-react";

import SectionLink from "./SectionLink";
import SEO from "./SEO";


// ==========================================
// KONFIGURASI IDENTITAS
// ==========================================

const profile = {
  name: "Bima Wiryadi Praja",

  position: "Frontend & Web Developer",

  location: "Jawa Barat, Indonesia",

  description:
    "Pengembang web dengan pengalaman membangun " +
    "aplikasi berbasis React, sistem informasi, " +
    "dan WebGIS untuk kebutuhan pengguna nyata.",

  photo: "/profil1.webp",

  github: "https://github.com/bimawp",

  linkedin:
    "https://www.linkedin.com/in/bimawiryadipraja",

  email: "bimawirya90@gmail.com"
};


// ==========================================
// KOMPONEN HERO
// ==========================================

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 24
        },

    animate: {
      opacity: 1,
      y: 0
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      ease: "easeOut"
    }
  };

  return (
    <>
      {/* SEO HALAMAN UTAMA */}

      <SEO
        title="Bima Wiryadi Praja | Frontend & Web Developer"
        description="Portofolio profesional Bima Wiryadi Praja. Pengembangan web berbasis React, JavaScript, WebGIS, dan sistem informasi."
        url="/"
        image="/profil1.webp"
      />


      {/* ==================================
          HERO SECTION
      ================================== */}

      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="
          relative
          isolate
          flex
          min-h-screen
          items-center
          overflow-hidden
          bg-[#F8FAFC]
          px-6
          pb-20
          pt-36
          text-slate-950
          lg:px-8
        "
      >

        {/* DEKORASI LATAR */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            top-0
            -z-10
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />


        {/* KONTEN UTAMA */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >

          {/* ==================================
              KOLOM KIRI
          ================================== */}

          <motion.div
            {...fadeUp}
            className="
              relative
              z-10
              order-1
            "
          >

            {/* LABEL PROFESIONAL */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                shadow-sm
              "
            >
              <span
                aria-hidden="true"
                className="
                  relative
                  flex
                  h-2.5
                  w-2.5
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-emerald-400/30
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-slate-700
                  sm:text-sm
                "
              >
                Open to Work & Collaboration
              </span>
            </div>


            {/* NAMA */}

            <p
              className="
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-blue-600
                sm:text-base
              "
            >
              Hello, I'm
            </p>

            <h1
              id="hero-heading"
              className="
                max-w-2xl
                text-[clamp(3.2rem,6vw,5.8rem)]
                font-extrabold
                leading-[1.06]
                tracking-[-0.055em]
                text-slate-950
              "
            >
              Bima
              <br />
              Wiryadi
              <br />

              <span className="text-blue-600">
                Praja.
              </span>
            </h1>


            {/* PROFESI */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-4
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10
                  shrink-0
                  bg-blue-600
                "
              />

              <h2
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                  text-slate-800
                  sm:text-xl
                  xl:text-2xl
                "
              >
                {profile.position}
              </h2>
            </div>


            {/* DESKRIPSI */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              {profile.description}
            </p>


            {/* LOKASI */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-500
              "
            >
              <MapPin
                size={17}
                className="text-blue-600"
                aria-hidden="true"
              />

              <span>
                {profile.location}
              </span>
            </div>


            {/* ==================================
                TOMBOL UTAMA
            ================================== */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >

              {/* LIHAT PROYEK */}

              <SectionLink
                section="projects"
                className="
                  group
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-600/15
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-xl
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-blue-600
                "
              >
                Explore My Work

                <ArrowUpRight
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                  aria-hidden="true"
                />
              </SectionLink>


              {/* HUBUNGI SAYA */}

              <SectionLink
                section="contact"
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-300
                  bg-transparent
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-slate-800
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-900
                  hover:bg-white
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-blue-600
                "
              >
                Let's Connect

                <Mail
                  size={18}
                  aria-hidden="true"
                />
              </SectionLink>

            </div>


            {/* ==================================
                SOCIAL LINKS
            ================================== */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                items-center
                gap-x-7
                gap-y-4
                border-t
                border-slate-200
                pt-7
              "
            >

              {/* GITHUB */}

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kunjungi GitHub Bima"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-500
                  transition-colors
                  hover:text-blue-600
                "
              >
                <Github
                  size={20}
                  aria-hidden="true"
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                  "
                />

                GitHub
              </a>


              {/* LINKEDIN */}

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kunjungi LinkedIn Bima"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-500
                  transition-colors
                  hover:text-blue-600
                "
              >
                <Linkedin
                  size={20}
                  aria-hidden="true"
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                  "
                />

                LinkedIn
              </a>


              {/* EMAIL */}

              <a
                href={`mailto:${profile.email}`}
                aria-label="Kirim email kepada Bima"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-500
                  transition-colors
                  hover:text-blue-600
                "
              >
                <Mail
                  size={20}
                  aria-hidden="true"
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                  "
                />

                Email
              </a>

            </div>
          </motion.div>


          {/* ==================================
              KOLOM KANAN - FOTO PROFIL
          ================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 35
                  }
            }
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15
            }}
            className="
              relative
              order-2
              mx-auto
              w-full
              max-w-[460px]
              lg:max-w-none
            "
          >

            {/* BINGKAI FOTO */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-slate-950
                p-3
                shadow-2xl
                shadow-slate-900/10
                sm:p-4
              "
            >

              {/* AKSEN GEOMETRIS */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-blue-600/30
                  blur-3xl
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-48
                  w-48
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />


              {/* FOTO */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-slate-800
                "
              >
                <img
                  src={profile.photo}
                  alt="Foto profil Bima Wiryadi Praja"
                  fetchPriority="high"
                  decoding="async"
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    object-top
                  "
                />

                {/* GRADIENT BAGIAN BAWAH */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-gradient-to-t
                    from-slate-950/40
                    to-transparent
                  "
                />
              </div>

            </div>


            {/* ==================================
                FLOATING EXPERIENCE CARD
            ================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20
                    }
              }
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.65
              }}
              className="
                relative
                z-20
                mx-auto
                -mt-12
                w-[calc(100%-2rem)]
                max-w-sm
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-xl
                shadow-slate-900/10
                sm:-ml-8
                sm:w-full
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                {/* ICON */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Code2
                    size={23}
                    aria-hidden="true"
                  />
                </div>


                {/* INFORMASI */}

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-blue-600
                    "
                  >
                    Experience Highlight
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-extrabold
                      text-slate-900
                      sm:text-base
                    "
                  >
                    WebGIS Development
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-relaxed
                      text-slate-500
                      sm:text-sm
                    "
                  >
                    Dinas Pendidikan Kabupaten Garut
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>


        {/* SCROLL INDICATOR */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            xl:flex
          "
        >
          <SectionLink
            section="about"
            aria-label="Gulir menuju bagian Tentang Saya"
            className="
              flex
              flex-col
              items-center
              gap-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-400
              transition-colors
              hover:text-blue-600
            "
          >
            Scroll to Explore

            <ArrowDown
              size={17}
              aria-hidden="true"
            />
          </SectionLink>
        </div>

      </section>
    </>
  );
}