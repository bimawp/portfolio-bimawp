// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Tugas from './components/Tugas';  // Pastikan sudah di-import
import TaskDetail from './components/TaskDetail';  // Pastikan sudah di-import
import Footer from './components/Footer';
import Article from './components/ArtikelDetail'; // Pastikan sudah di-import



export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Blog />
              <Projects />
              <Skill />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/tugas" element={<Tugas />} /> {/* Halaman daftar tugas */}
          <Route path="/tugas/:id" element={<TaskDetail />} /> {/* Halaman detail tugas */}
          <Route path="/article/:slug" element={<Article />} /> {/* Tambahkan ini */}
        </Routes>
      </div>
    </Router>
  );
}
