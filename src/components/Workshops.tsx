import { motion } from 'motion/react';
import { Mic } from 'lucide-react';

const lectures = [
  { title: "Vista Vigila Custom AI for Medical Doctors", venue: "State Seminar", date: "Oct 2025" },
  { title: "Next-Gen Clinical Tools: AI for Homeopathy", venue: "North Paravur IHK Unit", date: "May 2025" },
  { title: "Custom AI for Homeopathy", venue: "National Level Event IHK", date: "May 2025" },
  { title: "Abacus to AI", venue: "National Homeopathy Research Institute", date: "Aug 2024" },
  { title: "Treatment Protocol Based on Allen's Keynote Part 2", venue: "Karunagappally / IHK", date: "Mar 2024" },
  { title: "Secret to Super Clinic", venue: "IHK Prime Online Session", date: "Dec 2023" },
  { title: "Treatment Protocol Based on Allen's Keynote Part 1", venue: "Karunagappally / IHK", date: "Dec 2023" },
  { title: "Faculty Session", venue: "National Academy of Homeopathy India (NAHI)", date: "Sep 2023" },
  { title: "Standardize Your Clinic", venue: "NAHI", date: "Sep 2023" },
  { title: "Importance of Calprotectin as Markers", venue: "Kurichy Seminar", date: "Aug 2023" },
  { title: "Gadgets in Clinic", venue: "Kanjirappally", date: "Jul 2023" },
  { title: "Paper to Pixels", venue: "Sree Vidyadhiraja HMC", date: "May 2023" },
  { title: "Why to Digitalize", venue: "North Paravur Unit", date: "Jan 2023" },
  { title: "Digital Awareness", venue: "IHK Changanacherry", date: "Dec 2022" },
];

export default function Workshops() {
  return (
    <section id="speaking" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
          <div className="md:w-1/3">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Speaking & Training</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
              Sharing <span className="italic font-light">Knowledge</span> & Shaping the Future.
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              A major part of my work involves interacting with fellow educators and clinicians to share insights on digital transformations in modern medicine.
            </p>
            <a 
              href="https://wa.me/message/2GNIOSHNPCYLF1" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs font-semibold mb-12"
            >
              <Mic size={16} /> Invite Me to Speak
            </a>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80 w-full mt-4 border border-white/5 bg-ink/10">
              <img 
                src="./speaking.png" 
                alt="Dr. Libin Job speaking at a seminar" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="md:w-2/3 h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-paper/10 scrollbar-track-transparent">
            <div className="space-y-4">
              {lectures.map((lecture, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="mb-4 sm:mb-0 sm:mr-6">
                    <h3 className="text-lg font-serif mb-1">{lecture.title}</h3>
                    <p className="text-sm text-white/50 font-light">{lecture.venue}</p>
                  </div>
                  <div className="text-xs text-accent font-semibold uppercase tracking-widest whitespace-nowrap bg-accent/10 px-3 py-1.5 rounded-full inline-block sm:block w-fit">
                    {lecture.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
