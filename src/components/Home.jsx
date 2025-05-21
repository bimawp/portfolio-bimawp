import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import SEO from './SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import Education from '../components/Education';

export default function Home() {
  const location = useLocation();
  const contactRef = useRef(null);

  const navigate = useNavigate(); // ⬅️ Tambahkan ini

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });

          // Hapus query param via React Router
          navigate(location.pathname, { replace: true }); // ⬅️ Ini yang bikin ?scrollTo=contact hilang
        }, 500);
      }
    }
  }, [location, navigate]);


  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans scroll-smooth">
      <SEO
        title="Bima Wiryadi Praja | Portofolio"
        description="Portofolio Bima Wiryadi Praja – Mahasiswa Sistem Informasi dengan minat di pengembangan web dan teknologi."
        url="https://www.bimawiryadipraja.my.id/"
        image="https://www.bimawiryadipraja.my.id/profil1.webp"
      />

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Blog />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
