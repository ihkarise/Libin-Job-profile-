import { motion } from 'motion/react';
import { BrainCircuit, BookOpen, Stethoscope, Workflow, Palette, GraduationCap, MonitorSmartphone, CodeXml } from 'lucide-react';

const services = [
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on leveraging AI for medical practices and professionals.',
    icon: BrainCircuit
  },
  {
    title: 'Homeopathy + AI',
    description: 'Integrating modern AI tools with classical homeopathic wisdom for better outcomes.',
    icon: Stethoscope
  },
  {
    title: 'Medical Education',
    description: 'Engaging, evidence-based online and offline medical instruction for the next generation.',
    icon: BookOpen
  },
  {
    title: 'Clinical Workflow',
    description: 'Optimizing and automating daily clinical tasks to enhance precision and efficiency.',
    icon: Workflow
  },
  {
    title: 'Custom AI Tools',
    description: 'Designing bespoke AI solutions tailored for clinicians and medical researchers.',
    icon: CodeXml
  },
  {
    title: 'Digital Transformation',
    description: 'Helping clinics move from paper to pixels, establishing a robust digital presence.',
    icon: MonitorSmartphone
  },
  {
    title: 'Workshops & Classes',
    description: 'Interactive sessions designed to upskill teams in AI, digitalization, and homeopathy.',
    icon: GraduationCap
  },
  {
    title: 'Content & Branding',
    description: 'Creating high-impact medical presentations, logos, and visual identities.',
    icon: Palette
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 md:w-2/3">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Areas of Expertise</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">How I Help <span className="italic">Clinics</span> & <span className="italic">Teams</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-3xl p-8 border border-ink/5 hover:border-ink/20 transition-all group"
            >
              <div className="w-12 h-12 bg-paper rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-paper transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
