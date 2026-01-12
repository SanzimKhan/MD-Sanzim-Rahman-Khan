import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "BRACU Mongol Tori - Mars Rover",
      description: "Led team to URC 2024 Finals. Designed autonomous navigation system and robotic arm for sample collection.",
      technologies: ["ROS", "Python", "Computer Vision", "Embedded Systems", "CAD"],
      
      demo: "https://www.bracu-mongoltori.com/",
    },
    {
      title: "BOT Engineers",
      description: "Educational robotics platform helping students learn through hands-on projects and competitions.",
      technologies: ["React", "Node.js", "MongoDB", "Arduino"],
      
      demo: "https://www.botengineersbd.com/",
    },
    {
      title: "Autonomous Delivery Robot",
      description: "Indoor navigation robot using SLAM and path planning for efficient package delivery in office environments.",
      technologies: ["ROS2", "LiDAR", "OpenCV", "C++"],
      
      demo: "https://www.bracu-mongoltori.com/",
    },
    {
      title: "Robotic Arm Manipulation",
      description: "6-DOF robotic arm with inverse kinematics and computer vision for precise object manipulation.",
      technologies: ["Python", "TensorFlow", "ROS", "Gazebo"],
      
      demo: "https://www.bracu-mongoltori.com/",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Recent Work & Innovations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:card-glow transition-all duration-300 animate-fade-in overflow-hidden bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
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
