import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const columns = section.querySelectorAll("[data-footer-col]");
      const socialButtons = section.querySelectorAll("[data-social-btn]");

      gsap.from(columns, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.6,
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
      });

      gsap.from(socialButtons, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.6,
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-card border-t border-border reveal-on-scroll" ref={sectionRef}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div data-footer-col>
            <h3 className="text-3xl font-semibold mb-4 text-foreground">Sanzim</h3>
            <p className="text-muted-foreground leading-relaxed">
              Robotics Engineer & Tech Entrepreneur building the future through innovation and education.
            </p>
          </div>

          {/* Quick Links */}
          <div data-footer-col>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div data-footer-col>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                data-social-btn
                href="https://github.com/SanzimKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full border border-border hover:border-foreground transition-all duration-300 flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                data-social-btn
                href="https://www.linkedin.com/in/sanzimkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full border border-border hover:border-foreground transition-all duration-300 flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                data-social-btn
                href="mailto:sanzimrahmankhan54@gmail.com"
                className="group relative w-12 h-12 rounded-full border border-border hover:border-foreground transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>&copy; {currentYear} MD Sanzim Rahman Khan. All rights reserved.</span>
            <Heart className="h-4 w-4 text-foreground fill-foreground/60 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
