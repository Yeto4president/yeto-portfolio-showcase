
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, GitHub } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-theme-dark/90 backdrop-blur-md shadow-lg' : 'py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gradient">Yeto</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-theme-primary transition">Home</Link>
          <a href="#about" className="text-white hover:text-theme-primary transition">About</a>
          <a href="#projects" className="text-white hover:text-theme-primary transition">Projects</a>
          <a href="#contact" className="text-white hover:text-theme-primary transition">Contact</a>
          
          <a 
            href="https://github.com/Yeto4president" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-theme-primary transition"
          >
            <GitHub size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-theme-dark/95 backdrop-blur-lg border-t border-white/10 py-4 animate-fade-in">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-theme-primary py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-white hover:text-theme-primary py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-white hover:text-theme-primary py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-theme-primary py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="https://github.com/Yeto4president" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-theme-primary py-2 flex items-center gap-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GitHub size={18} /> GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
