export default function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-ink/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="font-serif text-xl font-semibold tracking-wide">
            Dr. Libin<span className="text-accent italic font-normal"> Job</span>
          </a>
          <p className="text-xs text-muted mt-2 uppercase tracking-widest">BHMS MD(Hom) • AI Generalist</p>
        </div>

        <div className="flex gap-6">
          <a href="#about" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-ink transition-colors">About</a>
          <a href="#services" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-ink transition-colors">Services</a>
          <a href="https://wa.me/message/2GNIOSHNPCYLF1" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-ink transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}
