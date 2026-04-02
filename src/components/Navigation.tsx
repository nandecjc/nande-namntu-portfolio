import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const navLinks = [
  { name: 'ABOUT', id: 'about' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'EXPERIENCE', id: 'experience' },
  { name: 'CONTACT', id: 'contact' },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 flex items-center ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="font-mono text-sm font-semibold tracking-wider text-foreground"
        >
          NN_
        </button>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-xs tracking-widest transition-colors relative py-1 group ${
                  activeSection === link.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs text-muted-foreground tracking-wider">AVAILABLE</span>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col p-8 lg:p-12"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            
            <ul className="flex flex-col gap-6 mb-auto">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-baseline gap-4 group"
                  >
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <span className="font-sans font-black text-5xl sm:text-6xl uppercase tracking-tighter group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                STATUS: ACTIVE / AVAILABLE FOR HIRE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
