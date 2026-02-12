import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/IMG_7583.jpg";

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
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Subtle performance hints
      gsap.set(bg, { scale: 1.15, filter: "blur(6px)", willChange: "transform, filter" });

      // Animate individual text children for a smoother staggered reveal
      const textChildren = text.querySelectorAll<HTMLElement>("*:not(svg)");
      gsap.set(textChildren, { opacity: 0, y: 30, filter: "blur(8px)", willChange: "opacity, transform, filter" });

      if (prefersReduced) {
        // Respect reduced motion: apply final styles without animation
        gsap.set(bg, { scale: 1, filter: "blur(0px)" });
        gsap.set(textChildren, { opacity: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      // Smooth scrub and easing for a refined feel
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(bg, { scale: 1, filter: "blur(0px)", ease: "power2.out" }, 0)
        .to(
          textChildren,
          { opacity: 1, y: 0, filter: "blur(0px)", ease: "power2.out", stagger: 0.06 },
          0.08
        );
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
                Founder of BOT Engineers, an ecosystem for robotics and AI that empowers people by making robotics accessible and building a stronger community. I'm passionate about creating technology that inspires curiosity, creativity and learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold bg-white text-black hover:bg-white/90" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="font-semibold border-white/60 text-white bg-transparent" asChild>
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

          {/* right image removed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
