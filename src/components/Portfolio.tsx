import { useLayoutEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import mongolToriImage from "@/assets/IMG_7170.png";
import botEngineersImage from "@/assets/lazy-team-2-revised.png";
import deliveryRobotImage from "@/assets/noor-lazy-bot.png";
import roboticArmImage from "@/assets/IMG_9205.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) {
      return;
    }

    const ctx = gsap.context(() => {
      const cards = content.querySelectorAll('[data-project-card]');
      gsap.set([content], { opacity: 0, y: 40 });
      gsap.set(cards, { opacity: 0, scale: 0.9, y: 30 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 20%",
            scrub: 0.7,
          },
        })
        .to(content, { opacity: 1, y: 0, ease: "power2.out" }, 0)
        .to(cards, { opacity: 1, scale: 1, y: 0, ease: "power2.out", stagger: 0.12 }, 0.1);
    }, section);

    return () => ctx.revert();
  }, []);
  const projects = [
    {
      title: "BRACU Mongol Tori - Mars Rover",
      description: "Led team to URC 2024 Finals. Designed autonomous navigation system and robotic arm for sample collection.",
      technologies: ["ROS", "Python", "Computer Vision", "Embedded Systems", "CAD"],
      image: mongolToriImage,
      demo: "https://www.bracu-mongoltori.com/",
    },
    {
      title: "BOT Engineers",
      description: "Educational robotics platform helping students learn through hands-on projects and competitions.",
      technologies: ["React", "Node.js", "MongoDB", "Arduino"],
      image: botEngineersImage,
      demo: "https://www.botengineersbd.com/",
    },
    {
      title: "Autonomous Delivery Robot",
      description: "Indoor navigation robot using SLAM and path planning for efficient package delivery in office environments.",
      technologies: ["ROS2", "LiDAR", "OpenCV", "C++"],
      image: deliveryRobotImage,
      demo: "https://www.bracu-mongoltori.com/",
    },
    {
      title: "Robotic Arm Manipulation",
      description: "6-DOF robotic arm with inverse kinematics and computer vision for precise object manipulation.",
      technologies: ["Python", "TensorFlow", "ROS", "Gazebo"],
      image: roboticArmImage,
      demo: "https://www.bracu-mongoltori.com/",
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div ref={contentRef} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">Innovative solutions delivering impact in robotics, automation, and education.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              data-project-card
              className="group overflow-hidden bg-card border-border shadow-sm"
            >
              {project.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} featured`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-semibold mb-2">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="font-medium bg-muted text-foreground/70 border border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
