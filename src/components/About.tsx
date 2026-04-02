import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <div>
      <SectionHeader index="01" label="DOCUMENTATION" title="About" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT — Profile.json code block */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border border-border bg-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
            <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/70"></div>
            <span className="font-mono text-xs text-muted-foreground ml-3 tracking-wider">Profile.json</span>
          </div>
          <div className="p-6 font-mono text-sm leading-7 text-foreground/80 overflow-x-auto whitespace-pre-wrap">
            <span className="text-primary">{`{`}</span>
            <br />
            <span className="ml-4 text-muted-foreground">"name":</span> <span className="text-foreground">"Nande Namntu"</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"location":</span> <span className="text-foreground">"South Africa // Sandton, currently"</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"status":</span> <span className="text-primary">"open_to_work"</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"current_role":</span> <span className="text-foreground">"Software Engineering Intern @ Dlala Group"</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"background":</span> <span className="text-foreground">[ "Marine Engineering", "Building & Construction", "Software Development" ]</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"interests":</span> <span className="text-foreground">[ "web development", "maritime technology", "building useful things", "cross-disciplinary problem solving" ]</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"currently_learning":</span> <span className="text-foreground">"React architecture + Python"</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"fun_fact":</span> <span className="text-foreground">"studied ships before studying code"</span>,
            <br />
            <span className="ml-4 text-muted-foreground">"approach":</span> <span className="text-foreground">"engineering is engineering"</span>
            <br />
            <span className="text-primary">{`}`}</span>
          </div>
        </motion.div>

        {/* RIGHT — Bio text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <p className="text-xl font-medium text-foreground mb-5">
            I didn't start in software — and I think that's actually an advantage.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            My background spans <span className="text-foreground">Marine Engineering and Construction</span>. I spent years learning how physical systems are designed, maintained, and kept running under pressure. That kind of thinking — tracing a problem to its root, understanding how components interact — transfers directly to code.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            I'm currently a <span className="text-foreground">Software Engineering Intern at Dlala Group in Sandton</span>, where I'm contributing to real web applications, working with React and Python daily, and learning what production-grade software actually looks like from the inside.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I'm early in my software career — I know that. But I bring a work ethic shaped by environments where things going wrong had real consequences, and a genuine curiosity that means I'm never satisfied with just making it work. <span className="text-primary">I want to understand why it works.</span>
          </p>

          <div className="mt-10 pt-10 border-t border-border grid grid-cols-3 gap-6">
            <div>
              <div className="font-display font-bold text-3xl text-foreground">3</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mt-1 uppercase">Industries Worked</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl text-foreground">1+</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mt-1 uppercase">Years in Tech</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl text-foreground">∞</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mt-1 uppercase">Disciplines Bridged</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
