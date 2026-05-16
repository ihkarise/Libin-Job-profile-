import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Large Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl leading-tight text-balance">
            "With over eight years of clinical experience, I strive to combine AI-driven insights with <span className="italic text-accent">classical homeopathic wisdom</span>."
          </h2>
        </motion.div>

        {/* Right: Bio Text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 space-y-6 text-lg text-muted font-light leading-relaxed"
        >
          <p>
            I am a medical professional with an MD in Practice of Medicine and a profound passion for learning and teaching. My approach sits at the unique intersection of classical homeopathy and modern Artificial Intelligence.
          </p>
          <p>
            As an Online Medical Educator and AI Generalist, I work to enhance precision, compassion, and the art of healing. From developing customized AI workflows for clinical use to conducting national-level seminars, my goal is to guide the next generation of healthcare professionals.
          </p>
          
          <div className="mt-8 pt-8 border-t border-ink/10 grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-serif text-ink mb-2">8<span className="text-accent">+</span></p>
              <p className="text-xs uppercase tracking-widest font-medium">Years Clinical Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-ink mb-2">15<span className="text-accent">+</span></p>
              <p className="text-xs uppercase tracking-widest font-medium">Seminars Conducted</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
