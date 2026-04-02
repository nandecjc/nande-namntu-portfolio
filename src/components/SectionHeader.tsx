import { motion } from 'motion/react';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
}

export default function SectionHeader({ index, label, title }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-sm text-muted-foreground">{index}</span>
        <div className="flex-1 h-px bg-border"></div>
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      <h2 className="font-display font-black text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
    </motion.div>
  );
}
