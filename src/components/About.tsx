import { Code2, Globe, Languages, User } from "lucide-react";

const About = () => {
  const skills = [
    "Core Java", "GitHub", "IntelliJ", "VS Code", 
    "React", "HTML", "CSS", "JavaScript"
  ];

  const languages = ["English", "Kannada", "Telugu", "Hindi"];

  return (
    <section id="about" className="section-spacing section-padding bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Passionate about software development, problem-solving, and building real-time impactful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                As a Computer Science undergraduate, I'm driven by the endless possibilities of technology. 
                My journey in software development has been fueled by curiosity and a desire to create 
                solutions that make a real difference in people's lives.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Each project is an opportunity to grow, learn, and contribute to the tech community.
              </p>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Skills */}
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-lg text-secondary-foreground font-medium 
                             hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <span
                    key={language}
                    className="px-4 py-2 bg-accent/10 rounded-lg text-accent-foreground font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;