// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skill from '../components/Skill';
import Tugas from '../components/Tugas';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans scroll-smooth">
      {/* SEO Tags */}
      <Helmet>
        <title>Beranda - Bima Wiryadi Praja</title>

        {/* Meta Description */}
        <meta name="description" content="Website pribadi Bima Wiryadi Praja untuk menampilkan portofolio, artikel, dan proyek yang dikerjakan." />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="Bima Wiryadi Praja, portofolio, web developer, projek, artikel, pribadi" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Beranda - Bima Wiryadi Praja" />
        <meta property="og:description" content="Website pribadi Bima Wiryadi Praja untuk menampilkan portofolio, artikel, dan proyek yang dikerjakan." />
        <meta property="og:image" content="https://www.bimawiryadipraja.my.id/images/logo.png" />
        <meta property="og:url" content="https://www.bimawiryadipraja.my.id/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beranda - Bima Wiryadi Praja" />
        <meta name="twitter:description" content="Website pribadi Bima Wiryadi Praja untuk menampilkan portofolio, artikel, dan proyek yang dikerjakan." />
        <meta name="twitter:image" content="https://www.bimawiryadipraja.my.id/images/logo.png" />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
