import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    index: '01',
    title: 'Maritime OS',
    context: 'Built to address the lack of unified digital tooling in vessel operations management.',
    story: 'A concept ship systems management dashboard designed to optimize maritime logistics and real-time monitoring of vessel health. Leveraging my background in Marine Engineering to create a tool that speaks the language of the crew while providing high-level analytics for onshore operations.',
    result: 'Reduced data fragmentation and improved response time for critical system alerts.',
    image: 'https://picsum.photos/seed/maritime/1920/1080',
    tags: ['React', 'D3.js', 'Tailwind', 'WebSockets'],
    github: 'https://github.com/nandecjc/maritime-os',
    demo: 'https://maritime-os.demo',
  },
  {
    index: '02',
    title: 'Portfolio Website',
    context: 'A digital dossier designed to reflect a brutalist, systems-oriented aesthetic.',
    story: 'This very site. Built as a minimalist developer portfolio showcasing my work, skills, and professional journey. The goal was to move away from generic templates and create something that felt like a technical document—sharp, precise, and functional.',
    result: 'Achieved 100/100 Lighthouse performance scores and a unique brand identity.',
    image: 'https://picsum.photos/seed/portfolio/1920/1080',
    tags: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
    github: 'https://github.com/nandecjc/portfolio',
    demo: 'https://nande-namntu.com',
  },
];

export default function Projects() {
  return (
    <div>
      <SectionHeader index="03" label="CASE_FILES" title="Projects" />

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="border border-border bg-card overflow-hidden group mb-12 last:mb-0"
          >
            {/* TOP: Image Container */}
            <div className="relative aspect-[16/7] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter grayscale(100%) transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                {project.tags.map((tag, j) => (
                  <span key={j} className="font-mono text-xs text-white border border-white/30 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM: Content */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">{project.index}</span>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="View Source"
                  >
                    <Github size={20} />
                  </a>
                  {project.demo && !project.demo.endsWith('.demo') && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="font-mono text-sm text-muted-foreground italic mb-4 mt-2">
                {project.context}
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {project.story}
              </p>

              <div className="border-l-4 border-primary pl-4 py-2 mb-6 bg-primary/5">
                <span className="font-mono text-xs text-primary mr-3 font-bold uppercase tracking-wider">Result</span>
                <span className="font-mono text-sm text-foreground">{project.result}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="font-mono text-xs border border-border text-foreground/60 px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
