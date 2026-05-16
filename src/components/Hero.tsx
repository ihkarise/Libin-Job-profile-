import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Homeopath & AI Generalist
            </p>
            <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-balance">
              Bridging <span className="italic">Homeopathy</span> and AI for the Future of Medicine.
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-xl font-light leading-relaxed mb-8">
              Practical AI & homeopathy guidance for modern clinics. Helping people, teams, and clinics adapt to intelligent workflows.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://wa.me/message/2GNIOSHNPCYLF1" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-ink text-paper rounded-full hover:bg-accent transition-colors flex items-center gap-3 text-sm tracking-widest uppercase font-medium group"
            >
              Book a Call 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-ink/20 text-ink rounded-full hover:bg-ink/5 transition-colors flex items-center text-sm tracking-widest uppercase font-medium"
            >
              View My Work
            </a>
          </motion.div>
        </div>

        {/* Image / Graphic Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto xl:max-w-none"
        >
          {/* Subtle Decorative Elements */}
          <div className="absolute inset-0 bg-accent/5 rounded-[40px] transform rotate-3 scale-[1.02]"></div>
          <div className="absolute inset-0 border border-ink/10 rounded-[40px] transform -rotate-2"></div>
          
          <div className="relative h-full w-full bg-surface rounded-[40px] shadow-2xl overflow-hidden">
            <img 
              src="./profile.png" 
              alt="Dr. Libin Job" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 bg-ink/10"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
            
            {/* Badge */}
            <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-accent text-paper rounded-full flex items-center justify-center font-serif text-xl italic">
                MD
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">BHMS MD(Hom)</p>
                <p className="text-xs text-muted">Practice of Medicine</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
