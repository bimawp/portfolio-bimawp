import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Skill from './components/Skill'; // Pastikan import komponen Skill
// Trigger redeploy

function App() {
  return (
    <div>
      <Navbar />
      
      <section id="hero" className="bg-gray-100 py-20">
        <h1 className="text-center text-4xl">Selamat datang di Portofolio Saya</h1>
        <p className="text-center text-xl mt-4">Bima Wiryadi Praja - Pengembang Web</p>
      </section>

      <section id="about" className="py-20">
        <h2 className="text-center text-3xl">Tentang Saya</h2>
        <p className="text-center mt-4">Ini adalah bagian tentang saya...</p>
      </section>

      <section id="blog" className="py-20">
        <h2 className="text-center text-3xl">Blog Saya</h2>
        <p className="text-center mt-4">Ini adalah bagian blog saya...</p>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-center text-3xl">Proyek Saya</h2>
        <p className="text-center mt-4">Berikut adalah proyek yang sudah saya kerjakan...</p>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-center text-3xl">Hubungi Saya</h2>
        <p className="text-center mt-4">Jika Anda ingin bekerja sama, silakan hubungi saya melalui form di bawah...</p>
      </section>
    </div>
  );
}

export default App;
