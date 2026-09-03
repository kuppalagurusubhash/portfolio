import ThreeScene from '@/components/ThreeScene';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* Full-Page 3D Background Universe (Particles, Models & Scroll Effects) */}
      <ThreeScene />

      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
