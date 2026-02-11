import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!isMobileMenuOpen) return;

    const ctx = gsap.context(() => {
      const items = navRef.current?.querySelectorAll("[data-mobile-nav-item]");
      if (!items) return;

      gsap.from(items, {
        duration: 0.4,
        opacity: 0,
        y: -10,
        stagger: 0.05,
        ease: "back.out",
      });
    });

    return () => ctx.revert();
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/portfolio", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/media", label: "Media" },
    { href: "/travel", label: "Travel" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className="group relative text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wide"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground/60 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-foreground/70 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div ref={navRef} className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                data-mobile-nav-item
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wide group"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground transition-colors" />
                  {link.label}
                </span>
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Download CV
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
