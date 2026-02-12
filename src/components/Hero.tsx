import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/IMG_7583.jpg";
import profileImage from "@/assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const text = textRef.current;

    if (!section || !bg || !text) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bg, { scale: 1.15, filter: "blur(6px)" });
      gsap.set(text, { opacity: 0, y: 40, filter: "blur(8px)" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=60%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(bg, { scale: 1, filter: "blur(0px)", ease: "none" }, 0)
        .to(text, { opacity: 1, y: 0, filter: "blur(0px)", ease: "none" }, 0.1);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/55 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={textRef} className="space-y-8 text-white">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Robotics Engineer</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                MD Sanzim <br />
                <span className="text-white">Rahman Khan</span>
              </h1>
              <p className="text-lg max-w-xl text-white/85 leading-relaxed">
                Founder of BOT Engineers. Innovating through robotics, software, and education. 
                Passionate about building technology that inspires creativity and learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold bg-white text-black hover:bg-white/90" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="font-semibold border-white/60 text-white" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/SanzimKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full border border-white/30 text-white transition-all duration-300 flex items-center justify-center hover:border-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanzimkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full border border-white/30 text-white transition-all duration-300 flex items-center justify-center hover:border-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sanzimrahmankhan54@gmail.com"
                className="group w-12 h-12 rounded-full border border-white/30 text-white transition-all duration-300 flex items-center justify-center hover:border-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={profileImage}
                alt="Sanzim portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
