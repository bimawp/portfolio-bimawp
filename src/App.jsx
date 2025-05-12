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
    <Router>
      <div className="bg-gray-50 text-gray-900 min-h-screen font-sans scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Blog />
        <Projects />
        <Skill /> {/* Memasukkan Skill */}
        <Contact />
      </div>
    </Router>
  );
}

export default App;
