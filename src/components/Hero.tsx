import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/IMG_7583.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* subtle overlay for readability (dark tint so text stays visible) */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/40 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in text-white">
            <div className="space-y-4">
              <p className="font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                MD Sanzim <br />
                <span className="gradient-text">Rahman Khan</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                Robotics Engineer
              </p>
              <p className="text-lg max-w-xl text-white/90">
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

          {/* Right column intentionally left empty to remove profile visuals */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
