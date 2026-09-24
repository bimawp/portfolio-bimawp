
import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

// Komponen utama
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Komponen halaman tambahan
import Tugas from "./components/Tugas";
import TaskDetail from "./components/TaskDetail";
import ArtikelDetail from "./components/ArtikelDetail";
import Article from "./components/Article";

// Komponen SEO
import SEO from "./components/SEO";

// Pengaturan navigasi
import {
  getHomeSectionId,
  scrollToSection,
} from "./utils/sectionNavigation";


// ========================================
// 1. PENGATURAN SEO HALAMAN
// ========================================

function PageWithSEO({
  title,
  description,
  url,
  children,
}) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image="/profil1.webp"
      />

      {children}
    </>
  );
}


// ========================================
// 2. PENGATURAN POSISI SCROLL
// ========================================

function ScrollToTop() {
  const {
    pathname,
    hash,
    search,
  } = useLocation();

  useEffect(() => {
    const sectionId = getHomeSectionId(
      hash,
      search
    );

    if (pathname !== "/" || !sectionId) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [pathname, hash, search]);

  return null;
}


// ========================================
// 3. HALAMAN UTAMA
// ========================================

function HomePage() {
  const {
    hash,
    search,
  } = useLocation();

  useEffect(() => {
    const sectionId = getHomeSectionId(
      hash,
      search
    );

    if (!sectionId) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(
      () => {
        scrollToSection(sectionId);
      }
    );

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [hash, search]);

  return (
    <>
      <Hero />

      <About />

      <Education />

      <Blog />

      <Projects />

      <Skill />

      <Contact />

      <Footer />
    </>
  );
}


// ========================================
// 4. PENGATURAN SELURUH ROUTE
// ========================================

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      <Routes
        location={location}
        key={location.pathname}
      >

        {/* BERANDA */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* BLOG */}

        <Route
          path="/blog"
          element={
            <PageWithSEO
              title="Blog | Bima Wiryadi Praja"
              description="Artikel mengenai pengembangan web, React, dan teknologi yang ditulis oleh Bima Wiryadi Praja."
              url="/blog"
            >
              <Blog />
            </PageWithSEO>
          }
        />


        {/* PROYEK */}

        <Route
          path="/projects"
          element={
            <PageWithSEO
              title="Proyek | Bima Wiryadi Praja"
              description="Jelajahi proyek pengembangan web dan WebGIS Bima Wiryadi Praja, termasuk sistem pemetaan sekolah Kabupaten Garut."
              url="/projects"
            >
              <Projects />
            </PageWithSEO>
          }
        />


        {/* KONTAK */}

        <Route
          path="/contact"
          element={
            <PageWithSEO
              title="Kontak | Bima Wiryadi Praja"
              description="Hubungi Bima Wiryadi Praja melalui email, LinkedIn, dan GitHub untuk kesempatan kerja dan kolaborasi."
              url="/contact"
            >
              <Contact />
            </PageWithSEO>
          }
        />


        {/* DAFTAR TUGAS */}

        <Route
          path="/tugas"
          element={<Tugas />}
        />


        {/* DETAIL TUGAS */}

        <Route
          path="/tugas/:id"
          element={<TaskDetail />}
        />


        {/* PENGALIHAN URL ARTIKEL LAMA */}

        <Route
          path="/artikel/:slug"
          element={<ArtikelDetail />}
        />


        {/* HALAMAN ARTIKEL */}

        <Route
          path="/article/:slug"
          element={<Article />}
        />


        {/* HALAMAN TIDAK DITEMUKAN */}

        <Route
          path="*"
          element={
            <>
              <SEO
                title="404 | Halaman Tidak Ditemukan"
                description="Halaman yang dicari tidak tersedia."
                robots="noindex, follow"
              />

              <main
                className="
                  flex min-h-screen flex-col
                  items-center justify-center
                  bg-gray-50 px-6 text-center
                "
              >
                <h1
                  className="
                    text-5xl font-extrabold
                    text-gray-900
                  "
                >
                  404
                </h1>

                <h2
                  className="
                    mt-4 text-2xl font-bold
                    text-gray-800
                  "
                >
                  Halaman Tidak Ditemukan
                </h2>

                <p
                  className="
                    mt-4 max-w-md
                    leading-relaxed text-gray-600
                  "
                >
                  Maaf, halaman yang kamu cari
                  tidak ditemukan atau sudah
                  tidak tersedia.
                </p>

                <Link
                  to="/"
                  className="
                    mt-8 inline-flex
                    items-center justify-center
                    rounded-xl bg-blue-600
                    px-6 py-3 font-semibold
                    text-white transition-colors
                    hover:bg-blue-700
                  "
                >
                  Kembali ke Beranda
                </Link>
              </main>
            </>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}


// ========================================
// 5. APLIKASI UTAMA
// ========================================

export default function App() {
  return (
    <Router>
      <div
        className="
          min-h-screen
          scroll-smooth
          bg-gray-50
          font-sans
          text-gray-800
        "
      >
        <Navbar />

        <ScrollToTop />

        <AnimatedRoutes />
      </div>
    </Router>
  );
}