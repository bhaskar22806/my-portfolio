import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "SJCIT (Shri Jayachamarajendra College of Engineering)",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022–2026",
      grade: "Currently Pursuing",
      description: "Focusing on software engineering, data structures, algorithms, and modern development practices."
    },
    {
      institution: "BGS PU College",
      degree: "Pre-University Course (Science Stream)",
      period: "2020–2022",
      grade: "91.33%",
      description: "Strong foundation in Mathematics, Physics, and Chemistry with excellent academic performance."
    },
    {
      institution: "BGS Public School",
      degree: "High School (SSLC)",
      period: "2019–2020",
      grade: "96.33%",
      description: "Outstanding academic achievement with comprehensive knowledge across all subjects."
    }
  ];

  return (
    <section id="education" className="section-spacing section-padding bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Academic journey that shaped my foundation in computer science and technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.institution}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-0'}`}>
                  <div className="card-elevated hover-lift p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                    <h4 className="text-lg text-primary font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-accent font-medium mb-4">Grade: {edu.grade}</p>
                    <p className="text-foreground-muted leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;