import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Tugas from './components/Tugas';
import TaskDetail from './components/TaskDetail';
import ArtikelDetail from './components/ArtikelDetail';
import Article from './components/Article';
import Footer from './components/Footer';
import Education from './components/Education';


function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const yOffset = -120; // tinggi navbar + jarak ekstra
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 800);
      }
    }
  }, [location]);

  return null;
}

function HomePage() {
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

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Route utama ke HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Route lainnya */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/tugas/:id" element={<TaskDetail />} />
        <Route path="/artikel/:slug" element={<ArtikelDetail />} />
        <Route path="/article/:slug" element={<Article />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h1 className="text-center p-10 text-2xl">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans scroll-smooth">
        <Navbar />
        <ScrollHandler />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
