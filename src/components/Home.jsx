import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import Tugas from '../components/Tugas';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans scroll-smooth">
      {/* SEO Tags */}
            <Helmet>
        <title>Bima Wiryadi Praja | Portofolio</title>
        <meta name="description" content="Portofolio Bima Wiryadi Praja – Mahasiswa Sistem Informasi dengan minat di pengembangan web dan teknologi." />
        <meta name="keywords" content="Bima Wiryadi Praja, Portofolio, Sistem Informasi, Web Developer, Teknologi" />
        <meta name="author" content="Bima Wiryadi Praja" />
        <meta property="og:title" content="Bima Wiryadi Praja | Portofolio" />
        <meta property="og:description" content="Portofolio Bima Wiryadi Praja – Mahasiswa Sistem Informasi dengan minat di pengembangan web dan teknologi." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://bimawiryadipraja.my.id" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
