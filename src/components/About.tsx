import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, Rocket } from "lucide-react";
import aboutBg from "@/assets/IMG_2881_(1).jpg";

const About = () => {
  const stats = [
    { icon: Briefcase, value: "4+", label: "Years Experience" },
    { icon: Rocket, value: "25+", label: "Projects Completed" },
    { icon: Award, value: "3", label: "Competition Finals" },
    { icon: Users, value: "100+", label: "Students Taught" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background image with strong overlay for readability */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground">Who I Am & What I Do</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary">
              Robotics Engineer & Tech Entrepreneur
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Robotics Engineer, Founder and CEO of <span className="text-primary font-semibold">BOT Engineers</span>, 
              and former Team Lead of BRACU Mongol Tori (URC 2024 Finalist). My passion lies in creating innovative 
              robotics solutions that bridge the gap between technology and education.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With expertise in robotics design, system integration, and software development, I've led teams to 
              compete at international levels and built educational programs that inspire the next generation of engineers.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground/70">Experienced in ROS, Python, C++, and embedded systems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground/70">Specialized in autonomous navigation and robotic manipulation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground/70">Passionate about STEM education and mentorship</p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg hover:card-glow transition-all duration-300 animate-fade-in bg-card border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h4>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
