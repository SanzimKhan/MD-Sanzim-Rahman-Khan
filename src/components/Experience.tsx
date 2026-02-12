import { useLayoutEffect, useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experienceImage from "@/assets/IMG_6493.JPG";
import beLogoBlack from "@/assets/BE Logo Black@4x.png";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(content, { opacity: 0, y: 40 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 25%",
            scrub: 0.6,
          },
        })
        .to(content, { opacity: 1, y: 0, ease: "none" }, 0);
    }, section);

    return () => ctx.revert();
  }, []);
  const experiences = [
    {
      type: "work",
      title: "Founder & CEO",
      company: "BOT Engineers",
      period: "2025 - Present",
      description: "Leading robotics education startup, developing curriculum, and mentoring students in robotics and programming.",
      skills: ["Leadership", "Robotics", "Education", "Business Development"],
      logo: beLogoBlack,
    },
    {
      type: "work",
      title: "Team Lead",
      company: "BRACU Mongol Tori",
      period: "2023 - 2024",
      description: "Led the Mars Rover team to URC 2024 Finals. Managed 130+ team members across multiple subsystems.",
      skills: ["ROS", "System Integration", "Team Management", "Rover Design"]
    },
    {
      type: "education",
      title: "BSc in Computer Science",
      company: "BRAC University",
      period: "2021 - Present",
      description: "Specialized in robotics and mechatronics. Relevant coursework: Robotics, AI, Embedded Systems, Project Management.",
      skills: ["Mechanical Design", "Thermodynamics", "Control Systems"]
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
          <img
            src={experienceImage}
            alt="Team working session"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
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
                <div className="absolute left-0 w-12 h-12 rounded-lg border border-border flex items-center justify-center bg-card">
                  {exp.type === "work" ? (
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
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-6 w-auto"
                        loading="lazy"
                      />
                    )}
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
