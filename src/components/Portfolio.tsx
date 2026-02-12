import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Button removed: project cards are full-clickable links now
import mongolToriImage from "@/assets/MT_at_UTAH.jpg";
const botEngineersImage = new URL("../assets/BOT Engineers.jpg", import.meta.url).href;
import deliveryRobotImage from "@/assets/noor-lazy-bot.png";
const manzimImage = new URL('../assets/Manzim.png', import.meta.url).href
import roboticArmImage from "@/assets/IMG_8538.jpg";
const armImage = new URL('../assets/arm.png', import.meta.url).href
const myWorkImage = new URL("../assets/2023-033_0265.jpg", import.meta.url).href;
import useReveal from "@/hooks/use-reveal";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Reveal the whole content and stagger project cards
  useReveal(contentRef, { selector: "[data-project-card]", stagger: 0.12, y: 30, opacity: 0, duration: 0.9, scrub: 0.7, start: "top 70%", end: "top 20%" });
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
      technologies: [
        "Robotics Education",
        "Workshops",
        "Competitions",
        "Startup",
        "Leadership",
        "Business Development",
        "Product Strategy",
        "Founder",
        "CEO",
        "Community Building",
        "Embedded Systems",
      ],
      image: botEngineersImage,
      demo: "https://www.botengineersbd.com/",
    },
    {
      title: "Phoenix 2.0 - MANZIM",
      description: "Mahir and I are developing Phoenix 2.0, an open-source delivery robot that combines CAD-mechanical design, SLAM-based navigation and robust path-planning for efficient package delivery.",
      technologies: ["CAD Mechanical", "ROS2", "LiDAR", "OpenCV", "C++"],
      image: manzimImage,
      imageClass: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 scale-95",
      demo: "https://www.bracu-mongoltori.com/",
    },
    {
      title: "Robotic Arm Manipulation",
      description: "6-DOF robotic arm with inverse kinematics and computer vision for precise object manipulation. After multiple iterations, we successfully implemented the arm by modifying the actuator for the first time.",
      technologies: ["Python", "TensorFlow", "ROS", "Gazebo"],
      image: armImage,
      imageClass: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 scale-90",
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

        <div className="mb-10 overflow-hidden rounded-3xl border border-border shadow-lg relative">
          <img
            src={myWorkImage}
            alt="My work and projects"
            className="h-60 md:h-72 w-full object-cover"
            loading="lazy"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute left-6 bottom-6 text-left text-white z-10">
            <h3 className="text-2xl md:text-3xl font-semibold">My Work & Projects</h3>
            <p className="text-sm text-white/80 mt-2 max-w-xl">Selected projects in robotics, automation, and education.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              data-project-card
              className="group overflow-hidden bg-card border-border shadow-sm"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
                {project.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} featured`}
                      className={project.imageClass ?? "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"}
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
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
        </div>
      </section>
  );
};

export default Portfolio;
