
import { useEffect, useState } from "react";

import {
  Link,
  useLocation
} from "react-router-dom";

import {
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";

import SectionLink from "./SectionLink";


// Navigasi utama portofolio
const navigation = [
  { label: "Beranda", section: "hero" },
  { label: "Tentang", section: "about" },
  { label: "Pengalaman", section: "education" },
  { label: "Proyek", section: "projects" },
  { label: "Keahlian", section: "skills" }
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  // Tutup menu saat berpindah halaman.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const activeSection =
    location.pathname === "/"
      ? location.hash.replace("#", "") || "hero"
      : null;

  const closeMenu = () => setIsOpen(false);


  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-slate-200/80
        bg-white/90
        backdrop-blur-xl
      "
    >
      <nav
        aria-label="Navigasi utama"
        className="
          mx-auto flex h-20 max-w-7xl
          items-center justify-between
          gap-6 px-6 lg:px-8
        "
      >

        {/* IDENTITAS */}

        <SectionLink
          section="hero"
          onClick={closeMenu}
          className="
            group flex shrink-0
            items-center gap-3
            rounded-md
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-blue-600
          "
          aria-label="Bima WP - Kembali ke Beranda"
        >
          <span
            className="
              flex h-11 w-11 items-center
              justify-center rounded-xl
              bg-slate-950
              text-base font-black
              tracking-tight text-white
              transition-colors
              group-hover:bg-blue-600
            "
          >
            B.
          </span>

          <span className="flex flex-col">
            <span
              className="
                text-base font-extrabold
                leading-tight tracking-tight
                text-slate-950
              "
            >
              Bima WP
            </span>

            <span
              className="
                mt-0.5 text-[11px]
                font-medium tracking-wide
                text-slate-500
              "
            >
              Web Developer
            </span>
          </span>
        </SectionLink>


        {/* MENU DESKTOP */}

        <ul
          className="
            hidden items-center
            gap-7 lg:flex
          "
        >
          {navigation.map((item) => {
            const isActive =
              activeSection === item.section;

            return (
              <li key={item.section}>
                <SectionLink
                  section={item.section}
                  aria-current={
                    isActive
                      ? "location"
                      : undefined
                  }
                  className={`
                    relative inline-flex
                    py-2 text-sm
                    font-semibold
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-slate-950"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="
                        absolute -bottom-1
                        left-0 h-0.5 w-full
                        rounded-full bg-blue-600
                      "
                      aria-hidden="true"
                    />
                  )}
                </SectionLink>
              </li>
            );
          })}

          <li>
            <Link
              to="/blog"
              aria-current={
                location.pathname === "/blog"
                  ? "page"
                  : undefined
              }
              className={`
                py-2 text-sm font-semibold
                transition-colors
                ${
                  location.pathname === "/blog"
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-slate-950"
                }
              `}
            >
              Blog
            </Link>
          </li>
        </ul>


        {/* TOMBOL KONTAK DESKTOP */}

        <SectionLink
          section="contact"
          className="
            hidden shrink-0 items-center
            justify-center gap-2
            rounded-xl bg-blue-600
            px-5 py-3
            text-sm font-semibold
            text-white shadow-sm
            shadow-blue-600/20
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-md
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-blue-600
            lg:inline-flex
          "
        >
          Hubungi Saya

          <ArrowUpRight
            size={17}
            aria-hidden="true"
          />
        </SectionLink>


        {/* TOMBOL MOBILE */}

        <button
          type="button"
          onClick={() => {
            setIsOpen((previous) => !previous);
          }}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={
            isOpen
              ? "Tutup menu navigasi"
              : "Buka menu navigasi"
          }
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-xl border
            border-slate-200
            text-slate-900
            transition-colors
            hover:bg-slate-100
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-blue-600
            lg:hidden
          "
        >
          {isOpen ? (
            <X
              size={23}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={23}
              aria-hidden="true"
            />
          )}
        </button>
      </nav>


      {/* NAVIGASI MOBILE */}

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi mobile"
          className="
            border-t border-slate-100
            bg-white px-6
            pb-6 pt-4 shadow-xl
            lg:hidden
          "
        >
          <ul className="mx-auto max-w-7xl space-y-1">

            {navigation.map((item) => {
              const isActive =
                activeSection === item.section;

              return (
                <li key={item.section}>
                  <SectionLink
                    section={item.section}
                    onClick={closeMenu}
                    aria-current={
                      isActive
                        ? "location"
                        : undefined
                    }
                    className={`
                      block rounded-lg
                      px-4 py-3
                      text-sm font-semibold
                      transition-colors
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }
                    `}
                  >
                    {item.label}
                  </SectionLink>
                </li>
              );
            })}

            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className="
                  block rounded-lg
                  px-4 py-3
                  text-sm font-semibold
                  text-slate-700
                  hover:bg-slate-50
                "
              >
                Blog
              </Link>
            </li>

            <li className="pt-4">
              <SectionLink
                section="contact"
                onClick={closeMenu}
                className="
                  flex items-center
                  justify-between
                  rounded-xl
                  bg-blue-600 px-5 py-3.5
                  text-sm font-bold
                  text-white
                  hover:bg-blue-700
                "
              >
                Hubungi Saya

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </SectionLink>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}