import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto rounded-[40px] bg-surface border border-white/10 text-ink p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        
        {/* Decorative BG */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-8 text-accent">
            <Mail size={24} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Ready to <span className="italic font-light text-accent">transform</span> your clinical workflow?
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Whether you need consulting on AI integration, someone to lead a medical education workshop, or assistance with digital branding—let's make it happen.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://wa.me/message/2GNIOSHNPCYLF1" target="_blank" rel="noopener noreferrer"
              className="px-8 py-5 bg-accent text-paper rounded-full hover:bg-white hover:text-ink transition-colors flex items-center gap-3 text-sm tracking-widest uppercase font-semibold group shadow-lg shadow-accent/20"
            >
              Message on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
