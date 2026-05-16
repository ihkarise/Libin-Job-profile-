import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Speaking', href: '#speaking' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide">
          Dr. Libin<span className="text-accent italic font-normal"> Job</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/message/2GNIOSHNPCYLF1" target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 bg-ink text-paper text-sm font-medium rounded-full hover:bg-ink/80 transition-colors uppercase tracking-widest"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-ink p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-paper/95 backdrop-blur-md absolute top-20 left-0 right-0 border-b border-white/10 py-4 px-6 flex flex-col space-y-4"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-ink tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/message/2GNIOSHNPCYLF1" target="_blank" rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ink/80 transition-colors uppercase tracking-widest"
          >
            Book a Call
          </a>
        </motion.nav>
      )}
    </header>
  );
}
