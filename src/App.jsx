import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Tugas from './components/Tugas';
import TaskDetail from './components/TaskDetail';
import ArtikelDetail from './components/ArtikelDetail'; // ✅ Ubah nama import
import Article from './components/Article'; // ✅ Ini tetap untuk artikel detail lokal
import Footer from './components/Footer';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get("scrollTo");

    if (scrollToId && location.pathname === "/") {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
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
      <Blog />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans scroll-smooth">
        <Navbar />
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tugas" element={<Tugas />} />
          <Route path="/tugas/:id" element={<TaskDetail />} />
          <Route path="/artikel/:slug" element={<ArtikelDetail />} /> {/* redirect ke blog eksternal */}
          <Route path="/article/:slug" element={<Article />} /> {/* artikel lokal */}
          <Route path="*" element={<h1 className="text-center p-10 text-2xl">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
