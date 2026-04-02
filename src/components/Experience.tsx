import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Dlala Group',
    location: 'Sandton',
    period: 'Oct 2025 – Present',
    type: 'INTERNSHIP',
    description: 'Currently learning how real software is built — one production bug at a time. Developing responsive web applications using React, JavaScript, and Git. Participating in agile ceremonies and contributing to the codebase of client-facing products.',
    skills: ['React', 'JavaScript', 'Git', 'Agile', 'Tailwind'],
  },
  {
    role: 'Construction Assistant',
    company: 'Intellec Construction CC',
    location: 'Johannesburg',
    period: 'May 2024 – Apr 2025',
    type: 'FULL-TIME',
    description: 'Assisted in project coordination and site operations, ensuring adherence to safety standards and project timelines in a high-pressure environment. Managed resource allocation and team communication for large-scale residential projects.',
    skills: ['Project Coordination', 'Operations', 'Safety Standards', 'Team Leadership'],
  },
  {
    role: 'Administrative Officer',
    company: 'M Wakaba Attorneys',
    location: 'East London',
    period: 'Jan 2023 – Dec 2023',
    type: 'FULL-TIME',
    description: 'Managed legal documentation, client communications, and administrative workflows to support complex legal proceedings. Optimized filing systems and improved office efficiency by 20%.',
    skills: ['Legal Admin', 'Client Communication', 'Workflow Optimization', 'Data Management'],
  },
];

export default function Experience() {
  return (
    <div>
      <SectionHeader index="04" label="COMMIT_LOG" title="Experience" />

      <div className="relative space-y-14 lg:space-y-16">
        {/* Vertical Line */}
        <div className="absolute left-1.5 lg:left-2.5 top-0 bottom-0 w-px bg-border"></div>

        {experiences.map((exp, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="pl-10 lg:pl-14 relative"
          >
            {/* Square Dot Marker */}
            <div className="absolute left-0 lg:left-1 top-1.5 w-3 h-3 border-2 border-primary bg-background"></div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-mono text-xs text-primary tracking-wider font-bold">
                  {exp.period}
                </span>
                <span className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted-foreground uppercase">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-xl lg:text-2xl text-foreground">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-muted-foreground tracking-wide uppercase">
                  {exp.company} — {exp.location}
                </span>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-secondary text-foreground/60 font-mono text-[11px] px-3 py-1.5 tracking-wider"
                  >
                    {skill}
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
