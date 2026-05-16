import { motion } from 'motion/react';
import { PenTool, Target, Zap, Globe2 } from 'lucide-react';

const professionalSkills = [
  "AI Generalist Work",
  "PowerPoint Design",
  "Logo Designing",
  "Video Editing",
  "Graphic Design",
  "Marketing Strategy",
  "Branding Design"
];

const languages = [
  "English",
  "Hindi",
  "Malayalam",
  "Gujarati",
  "Japanese"
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Professional Skills */}
        <div className="lg:w-2/3">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <PenTool size={20} />
            </div>
            <h2 className="text-3xl font-serif">Creative & Technical <span className="italic font-light">Capabilities</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full border border-ink/10 bg-paper hover:bg-ink hover:text-paper hover:border-ink transition-colors cursor-default text-sm tracking-wide"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink">
              <Globe2 size={20} />
            </div>
            <h2 className="text-3xl font-serif">Languages</h2>
          </div>

          <div className="space-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-paper border border-ink/5"
              >
                <span className="font-medium text-sm tracking-wide">{lang}</span>
                <div className="flex gap-1">
                  {/* Subtle dots instead of boring progress bar to indicate fluency abstractly */}
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div 
                      key={dot} 
                      className={`w-1.5 h-1.5 rounded-full ${index === 4 && dot > 2 ? 'bg-ink/10' : index === 3 && dot > 3 ? 'bg-ink/10' : 'bg-accent'}`} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
