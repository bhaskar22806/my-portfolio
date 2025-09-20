import { Code2, Globe, Languages, User, Camera, Video } from "lucide-react";

const About = () => {
  const technicalSkills = [
    "Core Java", "SQL (Basics)", "HTML & CSS (Basics)", 
    "GitHub", "IntelliJ", "VS Code"
  ];

  const creativeSkills = ["Photography", "Video Editing"];
  
  const softSkills = ["Team Collaboration", "Problem Solving"];

  const languages = ["English", "Kannada", "Telugu", "Hindi"];

  return (
    <section id="about" className="section-spacing section-padding bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A passionate and self-driven Computer Science undergraduate aiming to transform ideas into impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Career Objective */}
          <div className="animate-slide-up">
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Career Objective</h3>
              </div>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                With strong fundamentals in Core Java and a commitment to continuous learning, 
                I strive to contribute effectively to dynamic teams, tackle real-world challenges, 
                and pursue innovation and excellence in software development.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                I believe in transforming ideas into impactful solutions that make a real 
                difference in people's lives through technology and innovation.
              </p>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Technical Skills */}
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
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

            {/* Creative & Soft Skills */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Creative Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {creativeSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 rounded-lg text-accent text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-success/10 rounded-lg text-success text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <span
                    key={language}
                    className="px-4 py-2 bg-muted rounded-lg text-muted-foreground font-medium"
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