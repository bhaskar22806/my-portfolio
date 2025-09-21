import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/10"></div>
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      {/* Enhanced floating elements with better animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-float hover-glow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-lg animate-float animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-primary/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-primary/25 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-5 w-14 h-14 border border-primary/20 rounded-lg animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="container mx-auto section-padding relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced main heading with better typography */}
          <div className="animate-fade-in space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 animate-scale-in">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
              Hi, I'm <span className="gradient-text-animated">Bhaskar T</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground-muted mb-6 font-light">
              Computer Science Undergraduate
            </p>
            <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-4xl mx-auto leading-relaxed">
              A passionate and self-driven Computer Science undergraduate aiming to transform ideas into impactful solutions with strong fundamentals in Core Java and a commitment to continuous learning.
            </p>
          </div>

          {/* Enhanced Resume Section */}
          <div className="animate-fade-in-delay mb-16">
            <ResumeViewer />
          </div>

          {/* Enhanced CTA button */}
          <div className="animate-fade-in-delay mb-16">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-hero btn-interactive flex items-center gap-3 group text-lg px-8 py-4 hover-lift"
            >
              <Mail size={22} />
              Let's Connect
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Enhanced stats with better visual hierarchy */}
          <div className="mb-20 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-bounce-in">
            <div className="glass-card p-6 rounded-2xl hover-lift-sm animate-on-scroll stagger-delay-1">
              <div className="text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-foreground-muted font-medium">Projects Completed</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift-sm animate-on-scroll stagger-delay-2">
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <div className="text-foreground-muted font-medium">Hackathons Participated</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift-sm animate-on-scroll stagger-delay-3">
              <div className="text-4xl font-bold gradient-text mb-2">2026</div>
              <div className="text-foreground-muted font-medium">Expected Graduation</div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="animate-bounce-in">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-primary-light transition-all duration-300 flex flex-col items-center gap-3 mx-auto hover-scale-sm group"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Discover More About Me</span>
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center group-hover:border-primary-light transition-colors">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse group-hover:bg-primary-light"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;