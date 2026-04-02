import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import SessionTimer from './components/SessionTimer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white antialiased">
      <ScrollIndicator />
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <About />
        </section>
        
        <section id="skills" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <Skills />
        </section>

        <section id="projects" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <Projects />
        </section>
        
        <section id="experience" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <Experience />
        </section>
        
        <section id="contact" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <Contact />
        </section>
      </main>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Footer />
      </div>
      <SessionTimer />
    </div>
  );
}
