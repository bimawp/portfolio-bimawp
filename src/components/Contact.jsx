
import { motion, useReducedMotion } from "framer-motion";

import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Download,
  ArrowUpRight,
  MessageCircle,
  BriefcaseBusiness
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaTiktok
} from "react-icons/fa";

// KONFIGURASI KONTAK

const EMAIL = "bimawirya90@gmail.com";

// Ubah menjadi true setelah CV terbaru
// tersedia dalam format PDF di folder public.
const CV_READY = true;

const CV_PATH = "/cv-bima-wiryadi-praja.pdf";


// KONTAK PROFESIONAL

const professionalContacts = [
  {
    id: "email",
    title: "Email",
    value: EMAIL,
    description: "Komunikasi dan penawaran kerja",
    icon: Mail,
    link: `mailto:${EMAIL}`,
    action: "Kirim Email",
    external: false
  },

  {
    id: "linkedin",
    title: "LinkedIn",
    value: "Bima Wiryadi Praja",
    description: "Profil dan jaringan profesional",
    icon: Linkedin,
    link:
      "https://www.linkedin.com/in/bimawiryadipraja",
    action: "Lihat Profil",
    external: true
  },

  {
    id: "github",
    title: "GitHub",
    value: "@bimawp",
    description: "Repositori dan kode proyek",
    icon: Github,
    link: "https://github.com/bimawp",
    action: "Lihat GitHub",
    external: true
  },

  {
    id: "whatsapp",
    title: "WhatsApp",
    value: "Hubungi melalui WhatsApp",
    description: "Komunikasi langsung",
    icon: MessageCircle,
    link: "https://wa.me/qr/CBSN5YUM2CYFJ1",
    action: "Buka WhatsApp",
    external: true
  }
];


// MEDIA SOSIAL TAMBAHAN

const socialMedia = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/bwp_bima"
  },

  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/share/1BRFsYuuj9"
  },

  {
    name: "TikTok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@bimawirya700"
  }
];


// KOMPONEN KARTU KONTAK

function ContactCard({ contact, reduceMotion }) {
  const Icon = contact.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 25
            }
      }
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.5
      }}
      className="
        group
        h-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
        transition-all
        duration-300
        hover:border-blue-400/50
        hover:bg-white/10
        hover:shadow-xl
      "
    >
      <a
        href={contact.link}
        target={
          contact.external
            ? "_blank"
            : undefined
        }
        rel={
          contact.external
            ? "noopener noreferrer"
            : undefined
        }
        className="
          flex
          h-full
          flex-col
          rounded-lg
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-blue-400
        "
        aria-label={
          `${contact.action}: ${contact.value}`
        }
      >
        {/* Ikon */}

        <div
          className="
            mb-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-500/10
            text-blue-400
            transition-colors
            group-hover:bg-blue-500
            group-hover:text-white
          "
        >
          <Icon
            size={25}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        {/* Informasi */}

        <h3
          className="
            text-xl
            font-bold
            text-white
          "
        >
          {contact.title}
        </h3>

        <p
          className="
            mt-2
            break-words
            text-sm
            font-medium
            text-gray-200
          "
        >
          {contact.value}
        </p>

        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-gray-400
          "
        >
          {contact.description}
        </p>

        {/* Tombol */}

        <div
          className="
            mt-auto
            flex
            items-center
            gap-2
            pt-7
            text-sm
            font-semibold
            text-blue-400
            transition-colors
            group-hover:text-blue-300
          "
        >
          {contact.action}

          <ArrowUpRight
            size={17}
            aria-hidden="true"
          />
        </div>
      </a>
    </motion.article>
  );
}


// KOMPONEN UTAMA

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-gray-950
        px-6
        py-24
        text-white
      "
      aria-labelledby="contact-heading"
    >
      {/* DEKORASI LATAR */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-96
          w-96
          rounded-full
          bg-indigo-500/10
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

        {/* HEADER */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25
                }
          }
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6
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
              text-blue-400
            "
          >
            Get In Touch
          </p>

          <h2
            id="contact-heading"
            className="
              text-4xl
              font-extrabold
              tracking-tight
              sm:text-5xl
            "
          >
            Mari Terhubung
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-300
              sm:text-lg
            "
          >
            Saya terbuka untuk kesempatan kerja,
            kolaborasi, dan pengembangan proyek
            di bidang teknologi informasi,
            khususnya pengembangan aplikasi web
            dan sistem informasi.
          </p>
        </motion.div>


        {/* INFORMASI KETERSEDIAAN */}

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
            once: true
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.5
          }}
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            gap-4
            rounded-2xl
            border
            border-blue-400/20
            bg-blue-500/5
            p-6
            text-center
            sm:p-8
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
              text-blue-400
            "
          >
            <BriefcaseBusiness
              size={27}
              aria-hidden="true"
            />
          </div>

          <div>
            <h3
              className="
                text-xl
                font-bold
                text-white
              "
            >
              Terbuka untuk Kesempatan Kerja
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                text-gray-400
              "
            >
              Frontend Developer, Web Developer,
              dan Full Stack Developer.
            </p>
          </div>

          <div
            className="
              mt-1
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {/* TOMBOL EMAIL */}

            <a
              href={
                `mailto:${EMAIL}` +
                "?subject=Kesempatan%20Kerja%20-%20Bima%20Wiryadi%20Praja"
              }
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-blue-700
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-blue-400
              "
            >
              <Mail
                size={18}
                aria-hidden="true"
              />
              Hubungi Saya
            </a>


            {/* TOMBOL CV */}

            {CV_READY ? (
              <a
                href={CV_PATH}
                download="CV-Bima-Wiryadi-Praja.pdf"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-500
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-gray-100
                  transition-colors
                  hover:border-blue-400
                  hover:bg-white/5
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-blue-400
                "
              >
                <Download
                  size={18}
                  aria-hidden="true"
                />
                Download CV
              </a>
            ) : (
              <span
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-700
                  px-6
                  py-3
                  text-sm
                  text-gray-400
                "
              >
                <Download
                  size={18}
                  aria-hidden="true"
                />
                CV Sedang Diperbarui
              </span>
            )}
          </div>
        </motion.div>


        {/* KARTU KONTAK PROFESIONAL */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {professionalContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>


        {/* LOKASI */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-gray-300
            "
          >
            <MapPin
              size={19}
              className="text-blue-400"
              aria-hidden="true"
            />

            <span className="font-medium">
              Jawa Barat, Indonesia
            </span>
          </div>

          <p
            className="
              max-w-lg
              text-sm
              leading-relaxed
              text-gray-500
            "
          >
            Informasi lebih lanjut mengenai
            pengalaman, keterampilan, dan
            proyek tersedia melalui LinkedIn,
            GitHub, dan CV saya.
          </p>
        </div>


        {/* MEDIA SOSIAL TAMBAHAN */}

        <div
          className="
            mt-12
            border-t
            border-white/10
            pt-8
            text-center
          "
        >
          <p
            className="
              mb-5
              text-sm
              font-medium
              text-gray-400
            "
          >
            Media Sosial Lainnya
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            {socialMedia.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    `Kunjungi ${social.name} Bima`
                  }
                  title={social.name}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-gray-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/40
                    hover:bg-blue-500/10
                    hover:text-blue-400
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-blue-400
                  "
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}