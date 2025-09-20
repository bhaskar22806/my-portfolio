import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Education', section: 'education' },
    { label: 'Achievements', section: 'achievements' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="section-padding py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
          >
            Bhaskar T
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-foreground-muted hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-hero ml-4"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="section-padding py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    className="text-left text-foreground-muted hover:text-primary font-medium transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="btn-hero mt-4"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;