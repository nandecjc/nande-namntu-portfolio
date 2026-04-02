import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from './SectionHeader';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="border-t border-border pt-24 lg:pt-32">
      <SectionHeader index="05" label="DIRECT_CONNECTION" title="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* LEFT — Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6" 
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Full_Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="bg-transparent border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="JOHN DOE"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Email_Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    className="bg-transparent border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="JOHN@EXAMPLE.COM"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Message_Body
                  </label>
                  <textarea
                    required
                    id="message"
                    rows={4}
                    className="bg-transparent border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="HELLO NANDE, I'D LIKE TO..."
                  ></textarea>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-foreground text-white font-mono text-sm tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-primary transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'SENDING...' : 'SEND_MESSAGE'}
                  {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-primary bg-primary/5 p-12 flex flex-col items-center text-center gap-6"
              >
                <CheckCircle2 size={48} className="text-primary" />
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">Message Received</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Transmission successful. I'll get back to you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="font-mono text-xs text-primary underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  SEND_ANOTHER_MESSAGE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RIGHT — Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out via the form or through my social channels.
          </p>

          <div className="flex flex-col gap-8">
            {[
              { label: 'EMAIL', value: 'nande3126@gmail.com', href: 'mailto:nande3126@gmail.com' },
              { label: 'GITHUB', value: 'github.com/nandecjc', href: 'https://github.com/nandecjc' },
              { label: 'LINKEDIN', value: 'linkedin.com/in/nande-namntu', href: 'https://linkedin.com/in/nande-namntu-950a5125a' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 border-b border-border pb-6 group hover:border-primary transition-colors"
              >
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {social.label}
                </span>
                <span className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                  {social.value}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
