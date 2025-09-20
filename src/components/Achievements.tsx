import { Trophy, Users, Code, Zap } from "lucide-react";

const Achievements = () => {
  const hackathons = [
    {
      name: "NextGen 2.0",
      organization: "PES University",
      icon: <Code className="w-6 h-6" />,
      description: "Participated in innovative tech solutions hackathon focusing on next-generation technologies."
    },
    {
      name: "Alkimi",
      organization: "Technology Innovation",
      icon: <Zap className="w-6 h-6" />,
      description: "Engaged in creative problem-solving challenges with cutting-edge development tools."
    },
    {
      name: "Code Sprint 2.0",
      organization: "NMIT",
      icon: <Trophy className="w-6 h-6" />,
      description: "Competed in fast-paced coding challenges and collaborative development projects."
    },
    {
      name: "Aventus 2.0",
      organization: "DSCE",
      icon: <Users className="w-6 h-6" />,
      description: "Showcased technical skills in team-based development and innovation challenges."
    }
  ];

  return (
    <section id="achievements" className="section-spacing section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Participating in competitive programming events and hackathons to sharpen my skills and connect with the developer community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackathons.map((hackathon, index) => (
            <div
              key={hackathon.name}
              className="card-elevated hover-lift text-center p-8 group animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {hackathon.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {hackathon.name}
              </h3>
              
              <p className="text-primary font-medium mb-4 text-sm">
                {hackathon.organization}
              </p>
              
              <p className="text-foreground-muted text-sm leading-relaxed">
                {hackathon.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold">Continuous Learning</h3>
            </div>
            <p className="text-foreground-muted leading-relaxed">
              These experiences have taught me the importance of collaboration, quick problem-solving, 
              and staying updated with the latest technologies. Each hackathon has been a stepping stone 
              in my journey as a developer, pushing me to think creatively and work efficiently under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;