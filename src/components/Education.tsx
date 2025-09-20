import { GraduationCap, Calendar, Award, BookOpen, TrendingUp, Star } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "SJCIT",
      fullName: "Shri Jayachamarajendra College of Engineering",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022–2026",
      status: "Currently Pursuing",
      grade: null,
      progress: 75, // Assuming 75% completion
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Web Development", "Database Systems"],
      color: "from-blue-500 to-purple-600"
    },
    {
      institution: "BGS PU College",
      fullName: "BGS Pre-University College",
      degree: "Pre-University Course (Science Stream)",
      period: "2020–2022",
      status: "Completed",
      grade: 91.33,
      progress: 100,
      highlights: ["Mathematics", "Physics", "Chemistry", "Academic Excellence"],
      color: "from-green-500 to-teal-600"
    },
    {
      institution: "BGS Public School",
      fullName: "BGS Public School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2019–2020", 
      status: "Completed",
      grade: 96.33,
      progress: 100,
      highlights: ["All Subjects", "Outstanding Performance", "Leadership", "Academic Achievement"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const getGradeColor = (grade: number | null) => {
    if (!grade) return "text-primary";
    if (grade >= 95) return "text-green-600";
    if (grade >= 90) return "text-blue-600";
    if (grade >= 85) return "text-purple-600";
    return "text-gray-600";
  };

  const getPerformanceLabel = (grade: number | null) => {
    if (!grade) return "In Progress";
    if (grade >= 95) return "Exceptional";
    if (grade >= 90) return "Excellent"; 
    if (grade >= 85) return "Very Good";
    return "Good";
  };

  return (
    <section id="education" className="section-spacing section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Building a strong foundation in computer science through rigorous academic excellence and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              className="card-elevated hover-lift p-0 overflow-hidden animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${edu.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                  <p className="text-white/90 text-sm">{edu.fullName}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-card-foreground">{edu.degree}</h4>
                  
                  {/* Status and Grade */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                    
                    {edu.grade && (
                      <div className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${getGradeColor(edu.grade)}`} fill="currentColor" />
                        <span className={`font-bold ${getGradeColor(edu.grade)}`}>
                          {edu.grade}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Performance Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {getPerformanceLabel(edu.grade)}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground-muted">Progress</span>
                      <span className="text-sm font-medium">{edu.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${edu.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Key Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="mt-16 animate-fade-in">
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Academic Highlights</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">93.83%</h4>
                <p className="text-foreground-muted">Average Grade</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-success" />
                </div>
                <h4 className="text-xl font-bold mb-2">Consistent</h4>
                <p className="text-foreground-muted">Excellence</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-2">4+ Years</h4>
                <p className="text-foreground-muted">CS Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;