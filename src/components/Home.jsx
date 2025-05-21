import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

        useEffect(() => {
          if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
              const navbarHeight = 96; // Sesuaikan dengan tinggi navbar Anda
              const elementPosition = el.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - navbarHeight;

              setTimeout(() => {
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }, 300); // Tunggu hingga komponen dirender
            }
          }
        }, [location]);


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
