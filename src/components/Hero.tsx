import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                MD Sanzim <br />
                <span className="gradient-text">Rahman Khan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Robotics Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Founder of BOT Engineers. Innovating through robotics, software, and education. 
                Passionate about building technology that inspires creativity and learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="font-semibold">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="font-semibold">
                View Portfolio
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/SanzimKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:card-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanzimkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:card-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sanzimrahmankhan54@gmail.com"
                className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:card-glow"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in lg:animate-float">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src={profileImage}
                alt="MD Sanzim Rahman Khan"
                className="relative rounded-full w-full shadow-2xl border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
