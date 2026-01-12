import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Founder & CEO",
      company: "BOT Engineers",
      period: "2022 - Present",
      description: "Leading robotics education startup, developing curriculum, and mentoring students in robotics and programming.",
      skills: ["Leadership", "Robotics", "Education", "Business Development"]
    },
    {
      type: "work",
      title: "Team Lead",
      company: "BRACU Mongol Tori",
      period: "2022 - 2024",
      description: "Led the Mars Rover team to URC 2024 Finals. Managed 30+ team members across multiple subsystems.",
      skills: ["ROS", "System Integration", "Team Management", "CAD Design"]
    },
    {
      type: "work",
      title: "Robotics Engineer Intern",
      company: "Tech Solutions BD",
      period: "2021 - 2022",
      description: "Developed automation solutions for manufacturing processes using industrial robotics.",
      skills: ["PLC Programming", "Industrial Automation", "SolidWorks"]
    },
    {
      type: "education",
      title: "BSc in Mechanical Engineering",
      company: "BRAC University",
      period: "2020 - 2024",
      description: "Specialized in robotics and mechatronics. Senior project on autonomous navigation systems.",
      skills: ["Mechanical Design", "Thermodynamics", "Control Systems"]
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-xl text-muted-foreground">Work & Education</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                
                {/* Icon */}
                <div className="absolute left-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="h-5 w-5 text-primary" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                    <span className="text-sm font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience;
