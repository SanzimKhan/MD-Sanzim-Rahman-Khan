import { useLayoutEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "@/assets/IMG_3410.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!section || !bg || !content) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([bg, content], { opacity: 0 });
      gsap.set(bg, { filter: "blur(6px)", scale: 1.02 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.8,
          },
        })
        .to(bg, { filter: "blur(0px)", scale: 1, opacity: 1, ease: "none" }, 0)
        .to(content, { opacity: 1, ease: "none" }, 0);
    }, section);

    return () => ctx.revert();
  }, []);
  const stats = [
    { icon: Briefcase, value: "4+", label: "Years Experience" },
    { icon: Rocket, value: "25+", label: "Projects Completed" },
    { icon: Award, value: "3", label: "Competition Finals" },
    { icon: Users, value: "100+", label: "Students Taught" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div ref={contentRef} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">About</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">Who I Am & What I Do</h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground">
              Robotics Engineer & Tech Entrepreneur
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Robotics Engineer, Founder and CEO of BOT Engineers,
              and former Team Lead of BRACU Mongol Tori (URC 2023 and URC 2024 Finalist). My passion lies in creating innovative
              robotics solutions that bridge the gap between technology and education.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With expertise in robotics design, system integration and software development, I've led teams to
              compete at international levels and built educational programs that inspire the next generation of engineers.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-1 w-6 bg-foreground/30" />
                <p className="text-foreground/70">Experienced in ROS, Python, C++ and embedded systems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-1 w-6 bg-foreground/30" />
                <p className="text-foreground/70">Specialized in autonomous navigation and robotic manipulation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-1 w-6 bg-foreground/30" />
                <p className="text-foreground/70">Passionate about STEM education and mentorship</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div
              ref={bgRef}
              className="relative overflow-hidden rounded-3xl border border-border shadow-sm"
            >
              <img
                src={aboutImage}
                alt="Working in the robotics lab"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center border-border bg-card shadow-sm"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-border flex items-center justify-center">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h4 className="text-3xl font-semibold mb-2 text-foreground">{stat.value}</h4>
                    <p className="text-muted-foreground text-sm tracking-wide uppercase">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
