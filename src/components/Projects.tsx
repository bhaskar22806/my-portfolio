import { ExternalLink, Github, ArrowRight, Code, Database, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vehicle Registration Management System",
      description: "Comprehensive Java application with CRUD operations using JDBC for MySQL database connectivity, featuring intuitive GUI interfaces for efficient vehicle data management and administrative operations.",
      github: "https://github.com/bhaskar2004/vehicle-registration-management-system",
      technologies: ["Java", "MySQL", "JDBC", "GUI"],
      year: "2024",
      icon: Database
    },
    {
      id: 2,
      title: "Smart Navigation System for the Visually Impaired",
      description: "Innovative assistive technology solution leveraging real-time object detection and audio feedback for obstacle detection, featuring voice-based navigation instructions and smart proximity alerts.",
      github: "https://github.com/bhaskar2004/Smart-Navigation-Systems",
      technologies: ["Python", "Audio Processing", "Object Detection", "AI/ML"],
      year: "2024",
      icon: Code
    },
    {
      id: 3,
      title: "Weather Forecast Bot",
      description: "Intelligent real-time weather information system integrating OpenWeatherMap API with advanced JSON parsing for accurate location-based forecasting across multiple cities.",
      github: "https://github.com/bhaskar2004/weather-bot",
      technologies: ["BotPress", "APIs", "OpenWeatherMap", "JSON"],
      year: "2024",
      icon: Bot
    },
    {
      id: 4,
      title: "Better Trips - Tourism Web Application",
      description: "Feature-rich responsive web application integrating Geoapify API to showcase 20 nearby tourist attractions with advanced filtering, sorting, and seamless Google Maps integration for optimal routing.",
      github: "https://github.com/bhaskar2004/better-trips",
      technologies: ["HTML", "CSS", "JavaScript", "Geoapify API", "Google Maps"],
      year: "2024",
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A showcase of my software development projects that demonstrate practical problem-solving and technical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card-modern p-8 group hover-lift animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 hover-scale-sm">
                  <project.icon className="w-8 h-8" />
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(project.github, '_blank')}
                    className="hover:bg-primary hover:text-primary-foreground rounded-xl hover-scale-sm transition-all duration-300"
                  >
                    <Github size={18} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(project.github, '_blank')}
                    className="hover:bg-primary hover:text-primary-foreground rounded-xl hover-scale-sm transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 text-balance">
                {project.title}
              </h3>
              <p className="text-foreground-muted mb-6 leading-relaxed text-balance">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-xl text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale-sm animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground-muted font-medium">{project.year}</span>
                </div>
                <Button
                  size="sm"
                  className="btn-secondary hover-lift-sm group/btn"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View Project
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            className="btn-secondary"
            onClick={() => window.open('https://github.com/bhaskar2004', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;