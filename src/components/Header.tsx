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
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card border-b border-border/30 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="section-padding py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Enhanced Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group animate-fade-in"
          >
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center hover-lift-sm hover-glow transition-all duration-300">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">Bhaskar T</span>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="relative text-foreground-muted hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-hero ml-4 hover-lift-sm btn-interactive group animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              Let's Connect
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-secondary transition-all duration-300 hover-scale-sm"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0">
            <div className="glass-card border-b border-border/30 shadow-2xl animate-fade-in">
              <div className="section-padding py-8">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <button
                      key={item.section}
                      onClick={() => {
                        scrollToSection(item.section);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-lg font-medium text-foreground-muted hover:text-primary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-primary/5 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-6 border-t border-border/30">
                    <Button
                      onClick={() => {
                        scrollToSection('contact');
                        setIsMobileMenuOpen(false);
                      }}
                      className="btn-hero w-full hover-lift btn-interactive animate-fade-in"
                      style={{ animationDelay: '0.3s' }}
                    >
                      Let's Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;