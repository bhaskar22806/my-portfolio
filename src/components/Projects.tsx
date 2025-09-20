import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Registration Management System",
      description: "Streamlined vehicle data registration system with efficient data management and user-friendly interface for seamless vehicle registration processes.",
      githubUrl: "https://github.com/bhaskar2004",
      technologies: ["Java", "Database", "UI/UX"]
    },
    {
      title: "Smart Navigation for the Blind",
      description: "Assistive navigation application with audio cues and object detection to help visually impaired users navigate safely and independently.",
      githubUrl: "https://github.com/bhaskar2004",
      technologies: ["AI/ML", "Audio Processing", "Computer Vision"]
    },
    {
      title: "Weather Bot",
      description: "Real-time weather forecast application using APIs to provide accurate weather information with interactive user interface and location-based services.",
      githubUrl: "https://github.com/bhaskar2004",
      technologies: ["API Integration", "JavaScript", "Real-time Data"]
    },
    {
      title: "Better Trips",
      description: "Trip-planning application showing 20 nearby tourist places with detailed information, reviews, and route optimization for better travel experiences.",
      githubUrl: "https://github.com/bhaskar2004",
      technologies: ["Maps API", "React", "Location Services"]
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
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated hover-lift group p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={16} />
                  View Code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="btn-ghost flex items-center gap-2"
                  onClick={() => {
                    // For demo purposes, show message. In real app, would link to live demo
                    alert(`Live demo for ${project.title} coming soon! Check the GitHub repository for more details.`);
                  }}
                >
                  <ExternalLink size={16} />
                  Live Demo
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