import { motion } from 'motion/react';
import { ArrowDown, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-20 grid-background overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative">
        {/* Status Popup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="hidden lg:flex absolute top-0 right-8 bg-background/80 backdrop-blur border border-border px-4 py-2 items-center gap-3 z-10"
        >
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-xs text-foreground tracking-wider">STATUS: ACTIVE</span>
          <span className="text-border">|</span>
          <span className="font-mono text-xs text-primary tracking-wider font-bold">AVAILABLE FOR HIRE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            SOFTWARE ENGINEERING INTERN — WEB DEVELOPER
          </span>
        </motion.div>

        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans font-black text-[5rem] sm:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.88] tracking-[-0.05em] uppercase text-transparent text-outline block"
          >
            NANDE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans font-black text-[5rem] sm:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.88] tracking-[-0.05em] uppercase text-foreground block"
          >
            NAMNTU
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed"
        >
          <span className="text-muted-foreground">
            Bridging engineering disciplines to build practical web solutions.
          </span>{' '}
          <span className="text-foreground font-medium">
            Currently learning how real software is built
          </span>{' '}
          <span className="text-muted-foreground">
            — one production bug at a time.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group bg-foreground text-background px-6 py-4 font-mono text-sm tracking-wider flex items-center gap-3 hover:bg-primary transition-colors min-h-[44px]"
          >
            VIEW_PROJECTS
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:nande3126@gmail.com?subject=CV Request - Nande Namntu"
            className="border border-border px-6 py-4 font-mono text-sm tracking-wider text-foreground flex items-center gap-3 hover:border-primary hover:text-primary transition-all min-h-[44px]"
          >
            <FileDown size={14} />
            REQUEST_CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex items-center gap-3 font-mono text-xs text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={12} />
          </motion.div>
          <span>SCROLL TO EXPLORE</span>
        </motion.div>
      </div>
    </div>
  );
}
