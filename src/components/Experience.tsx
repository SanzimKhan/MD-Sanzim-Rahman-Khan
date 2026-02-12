import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
const experienceImage = new URL("../assets/MT Group pic.jpg", import.meta.url).href;
import beLogoBlack from "@/assets/BE Logo Black@4x.png";
import logoBRACU from "@/assets/logo_BRACU standard.png";
import logoMT from "@/assets/logo_MT standard.png";
import useReveal from "@/hooks/use-reveal";

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Reveal timeline content
  useReveal(contentRef, { selector: "*:not(svg)", stagger: 0.04, y: 30, opacity: 0, duration: 0.8, scrub: 0.6, start: "top 75%", end: "top 25%" });
  const experiences = [
    {
      type: "work",
      title: "Founder & CEO",
      company: "BOT Engineers",
      period: "2025 - Present",
      description: "Leading robotics education startup, developing curriculum, and training students in robotics and programming.",
      skills: ["Leadership", "Robotics", "Education", "Business Development"],
      logo: beLogoBlack,
    },
    {
      type: "work",
      title: "Co-Team Lead",
      company: "BRACU Mongol Tori",
      period: "2023 - 2024",
      description: "Co-led the Mars Rover team to URC 2024 Finals. Managed cross-functional subsystems and collaborated across 130+ members.",
      skills: ["ROS", "System Integration", "Team Management", "Rover Design"],
      logo: logoMT,
    },
    {
      type: "education",
      title: "BSc in Computer Science",
      company: "BRAC University",
      period: "2021 - Present",
      description: "Specialized in robotics and mechatronics. Relevant coursework: Robotics, AI, Embedded Systems, Project Management.",
      skills: ["Mechanical Design", "Thermodynamics", "Control Systems"],
      logo: logoBRACU,
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div ref={contentRef} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Work & Education</h2>
        </div>

        <div className="mb-14 overflow-hidden rounded-3xl border border-border">
          <div className="relative w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden">
            <img
              src={experienceImage}
              alt="Team working session"
              className="absolute inset-0 h-full w-full object-cover object-center transform scale-110 md:scale-125 lg:scale-150"
              loading="lazy"
              style={{ willChange: "transform" }}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-foreground/15" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-foreground border-4 border-background" />
                
                {/* Icon */}
                <div className="absolute left-0 w-12 h-12 rounded-lg border border-border flex items-center justify-center bg-card overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className={`${exp.company === "BOT Engineers" ? "h-6" : exp.company === "BRACU Mongol Tori" ? "h-10" : "h-8"} w-auto object-contain`}
                    />
                  ) : exp.type === "work" ? (
                    <Briefcase className="h-5 w-5 text-foreground" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                    <span className="text-xs font-medium text-foreground border border-border px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-foreground/70 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs font-medium px-2 py-1 rounded border border-border text-foreground/70"
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
