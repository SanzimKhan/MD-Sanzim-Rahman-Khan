import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, Rocket } from "lucide-react";
import aboutImage from "@/assets/Sanzim-With-BRACU-MongolTOri-Phoenix.png";
import useReveal from "@/hooks/use-reveal";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useReveal(imgRef, { filter: "blur(6px)", scale: 1.02, duration: 0.9, scrub: 0.8 });
  useReveal(contentRef, { selector: "*:not(svg)", stagger: 0.06, y: 20, filter: "blur(6px)", duration: 0.8 });

  const stats = [
    { icon: Briefcase, value: "7+", label: "Years Experience" },
    { icon: Rocket, value: "27+", label: "Projects Completed" },
    { icon: Award, value: "3", label: "International Competitions" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4" ref={contentRef}>
        <header className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">About</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">Who I Am & What I Do</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">I work in robotics, leadership and education, building practical solutions and helping train the next generation of engineers.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start bg-card/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground">Robotics Engineer & Tech Entrepreneur</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                My journey through rovers truly began with the International Rover Challenge in January 2023. That
                milestone fueled my drive to explore rover design and development even further, leading me to participate
                in the University Rover Challenge (URC) later that year, where our team achieved 2nd place in Asia.
              </p>
              <p>
                In 2024, I had the honor of serving as a Co-Team Lead for URC, once again guiding the team to a 2nd place
                finish in URC Asia. The experience taught me how to lead under pressure, manage complex systems and bring
                out the best in each team member through collaboration and trust.
              </p>
              <p>
                By 2025, I transitioned into a teaching role, helping the next generation of rover engineers prepare for
                URC, culminating in an 8th place global ranking that made me incredibly proud of the team’s growth and
                dedication.
              </p>
              <p>
                These experiences gave me the chance to push boundaries and immerse myself in real-world robotics
                challenges that demanded creativity, adaptability and critical problem-solving. They strengthened my
                leadership, communication and teamwork skills, and deepened my passion for robotics, automation and
                innovation.
              </p>
              <p>
                Building on that work, I founded BOT Engineers, an ecosystem for robotics and AI that empowers people by making robotics accessible and by building a stronger community.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-indigo-600/5 to-rose-600/5 border border-border">
                <h4 className="font-semibold text-foreground">Founder, BOT Engineers</h4>
                <p className="text-sm text-foreground/80">An ecosystem empowering people through hands-on education and community-driven robotics projects.</p>
              </div>
              <div className="flex gap-3 mt-3">
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">Co-Team Lead</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">URC Participant</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">ROS</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">C++</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">Python</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">SLAM</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">Computer Vision</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">Embedded Systems</span>
                <span className="px-3 py-1 rounded-full bg-foreground/5 text-sm">CAD</span>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div ref={imgRef} className="rounded-3xl relative inline-block overflow-hidden">
              <img src={aboutImage} alt="Working in the robotics lab" className="w-auto max-w-full h-auto block" loading="lazy" />
              <div className="absolute left-4 bottom-4 text-white">
                <h4 className="text-lg font-semibold">Robotics Lab</h4>
                <p className="text-sm text-white/80">Hands-on builds & testing</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Card key={i} className="p-4 text-center">
                    <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-foreground/6 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="text-2xl font-semibold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase">{s.label}</div>
                  </Card>
                );
              })}
            </div>
          </aside>
        </div>
        </div>
      </section>
  );
};

export default About;
