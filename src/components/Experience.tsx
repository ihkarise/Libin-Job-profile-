import { motion } from 'motion/react';

const experiences = [
  {
    role: 'V. Faculty Medicine-Physiology',
    company: 'Chethipuzha Nursing College',
    date: 'Mar 2025 - Present',
  },
  {
    role: 'Chief Medical Officer',
    company: 'Wise Homeopathic Multispeciality Center',
    date: 'May 2023 - Present',
  },
  {
    role: 'Medical Officer',
    company: 'Homeopathic Multispeciality Centre, Changanacherry',
    date: 'Jan 2021 - 2023',
  },
  {
    role: 'Assistant Doctor (Under MD Medicine)',
    company: 'Aagam Hospital',
    date: 'May 2017 - May 2018',
  },
  {
    role: 'Junior M.O.',
    company: 'Panchshil Hospital, Ahmedabad',
    date: 'Nov 2013 - Dec 2013',
  }
];

const education = [
  {
    degree: 'MD Practice of Medicine',
    institution: 'Baroda Homeopathic Medical College Hospital',
    date: 'Nov 2018 - Nov 2021',
  },
  {
    degree: 'MA Psychology',
    institution: 'IGNOU',
    date: 'Nov 2018',
  },
  {
    degree: 'PGNAHI',
    institution: 'Shaad Hospital, Itwari, Nagpur',
    date: 'Apr 2016 - May 2016',
  },
  {
    degree: 'BHMS',
    institution: 'Anand Homeopathic Medical College & Research Institute',
    date: 'Mar 2012 - May 2018',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface px-6 relative border-t border-ink/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Work Experience */}
        <div>
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-2">Clinical <span className="italic">Journey</span></h2>
            <p className="text-muted font-light">Over eight years of practical experience.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-ink/10 before:to-transparent">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-surface bg-ink/10 group-hover:bg-accent group-hover:border-accent text-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-ink rounded-full group-hover:bg-paper transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-paper border border-ink/5 group-hover:border-ink/10 transition-colors">
                  <div className="text-xs text-accent uppercase tracking-widest font-semibold mb-2">{exp.date}</div>
                  <h3 className="text-lg font-serif mb-1">{exp.role}</h3>
                  <p className="text-sm text-muted font-light">{exp.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-2">Academic <span className="italic">Foundation</span></h2>
            <p className="text-muted font-light">Continuous pursuit of medical knowledge.</p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border-b border-ink/5 last:border-0 hover:bg-paper rounded-2xl transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-serif group-hover:text-accent transition-colors">{edu.degree}</h3>
                  <span className="text-xs text-muted/70 uppercase tracking-widest font-semibold shrink-0">{edu.date}</span>
                </div>
                <p className="text-sm text-muted font-light">{edu.institution}</p>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 mt-4 bg-ink/5 rounded-2xl"
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-1">Certifications</h3>
              <p className="text-sm text-muted font-light">National Teachers Eligibility Certification completed (NTET)</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
