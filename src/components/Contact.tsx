import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bhaskar2004",
      icon: <Github className="w-6 h-6" />,
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhaskar-t-783aa3331",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      url: "mailto:bhaskarbhaskar4794@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="section-spacing section-padding bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Details */}
            <div className="card-elevated p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+917676798351"
                      className="text-foreground-muted hover:text-primary transition-colors duration-300"
                    >
                      +91 7676798351
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:bhaskarbhaskar4794@gmail.com"
                      className="text-foreground-muted hover:text-primary transition-colors duration-300"
                    >
                      bhaskarbhaskar4794@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground-muted">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-secondary hover:bg-primary 
                              flex items-center justify-center transition-all duration-300 
                              hover:text-primary-foreground hover:-translate-y-1 hover:shadow-lg
                              group`}
                    aria-label={`Connect with me on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-foreground-muted text-sm mt-4">
                Follow me on social media for updates on my latest projects and tech insights.
              </p>
            </div>

            {/* Availability */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <p className="font-medium">Available for opportunities</p>
              </div>
              <p className="text-foreground-muted text-sm">
                Open to internships, freelance projects, and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;