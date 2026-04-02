import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    name: 'CORE',
    description: 'The foundation of my technical stack, focused on building interactive web experiences.',
    skills: [
      { name: 'JavaScript', level: 'INTERMEDIATE' },
      { name: 'React', level: 'INTERMEDIATE' },
      { name: 'HTML/CSS', level: 'ADVANCED' },
      { name: 'Python', level: 'INTERMEDIATE' },
    ],
  },
  {
    name: 'BACKEND & TOOLS',
    description: 'Systems and tools that support the development lifecycle and infrastructure.',
    skills: [
      { name: 'Java', level: 'LEARNING' },
      { name: 'Git & GitHub', level: 'INTERMEDIATE' },
      { name: 'Docker Basic', level: 'LEARNING' },
      { name: 'Figma', level: 'LEARNING' },
    ],
  },
  {
    name: 'DOMAIN KNOWLEDGE',
    description: 'Interdisciplinary expertise that informs my approach to software engineering.',
    skills: [
      { name: 'Marine Engineering', level: 'ADVANCED' },
      { name: 'Building & Construction', level: 'ADVANCED' },
      { name: 'Project Coordination', level: 'INTERMEDIATE' },
      { name: 'Systems Thinking', level: 'INTERMEDIATE' },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <SectionHeader index="02" label="TECH_STACK" title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-8"
          >
            <div className="font-mono text-xs tracking-widest text-primary mb-2 uppercase">
              {category.name}
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {category.description}
            </p>

            <div className="space-y-4">
              {category.skills.map((skill, j) => (
                <div key={j} className="flex justify-between items-center">
                  <span className="font-mono text-sm text-foreground">
                    {skill.name}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-wider px-2 py-1 ${
                      skill.level === 'ADVANCED'
                        ? 'bg-primary text-white'
                        : skill.level === 'INTERMEDIATE'
                        ? 'border border-border bg-transparent text-foreground/70'
                        : 'border border-border bg-transparent text-muted-foreground'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
