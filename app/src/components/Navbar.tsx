import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center h-[72px]">
          {/* Logo - fixed width to balance the layout */}
          <div className="w-[120px] md:w-[160px] flex-shrink-0">
            <a href="#" className="font-playfair font-bold text-xl md:text-2xl text-[#1A1A1A]">
              Elementum
            </a>
          </div>

          {/* Desktop Nav - centered */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-sm text-[#1A1A1A] font-inter hover:text-black transition-colors group"
              >
                {link}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#1A1A1A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right spacer to balance logo on desktop */}
          <div className="hidden md:block w-[120px] md:w-[160px] flex-shrink-0" />

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-lg transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container pb-6 bg-white/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#1A1A1A] font-inter text-base border-b border-gray-100 last:border-0"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
