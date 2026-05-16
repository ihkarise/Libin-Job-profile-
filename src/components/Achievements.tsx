import { motion } from 'motion/react';
import { Trophy, Star, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  { text: "Tailored educational sessions for various crowds.", icon: Star },
  { text: "Led digitization initiatives for clinics.", icon: Rocket },
  { text: "Created 'Power up your PPT' methodologies.", icon: Lightbulb },
  { text: "Authored 'Key of Allens Keynote' modules.", icon: Star },
  { text: "Pioneered 'AI for Clinicians' workflows.", icon: Rocket },
  { text: "Assisted in advanced Medical Research Writing.", icon: Lightbulb },
  { text: "Developed custom diagnostic & management tools.", icon: Star },
];

export default function Achievements() {
  return (
    <section className="py-24 px-6 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Hackathon Winner Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3 bg-surface border border-accent/20 text-ink rounded-[40px] p-10 relative overflow-hidden group shadow-xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-700 transform origin-top-right">
            <Trophy size={160} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-accent text-[#0A0A0B] rounded-full flex items-center justify-center">
              <Trophy size={32} />
            </div>
            <div>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Award</p>
              <h3 className="text-3xl font-serif leading-tight">Winner of IHK Hackathon</h3>
              <p className="text-white/60 mt-2 font-medium">2025 - 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Other Highlights */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-serif mb-8">Key <span className="italic font-light">Initiatives & Successes</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-ink/5"
              >
                <div className="mt-1 shrink-0 text-accent">
                  <item.icon size={18} />
                </div>
                <p className="text-sm font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
