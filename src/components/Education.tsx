import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "SJC Institute of Technology (SJCIT)",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "2022 - 2026",
      grade: "8.69 CGPA",
      status: "Currently Pursuing",
      location: "Chickballapur, Karnataka"
    },
    {
      institution: "BGS PU College Gowribidanur",
      degree: "Pre-University Course",
      period: "2020 - 2022",
      grade: "91.33%",
      status: "Completed",
      location: "Gowribidanur, Karnataka"
    },
    {
      institution: "BGS Public School Gowribidanur",
      degree: "High School (SSLC)",
      period: "2019 - 2020",
      grade: "96.33%",
      status: "Completed",
      location: "Gowribidanur, Karnataka"
    }
  ];

  return (
    <section id="education" className="section-spacing section-padding bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-foreground-muted">
            Academic foundation in Computer Science and Engineering
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              className="card-elevated p-8 animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left Section - Institution & Degree */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                      <p className="text-foreground-muted mb-3">{edu.degree}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground-muted">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Grade & Status */}
                <div className="text-right md:text-right">
                  <div className="text-2xl font-bold text-primary mb-1">{edu.grade}</div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'Currently Pursuing' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;