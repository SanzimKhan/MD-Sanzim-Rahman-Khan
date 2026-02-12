import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactImage from "@/assets/Jesan and Rafid.jpg";
import useReveal from "@/hooks/use-reveal";

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useReveal(sectionRef, { selector: "[data-contact-card]", stagger: 0.1, x: -40, opacity: 0, duration: 0.8, scrub: 0.6, start: "top 60%", end: "top 30%" });
  useReveal(sectionRef, { selector: "[data-form-input]", stagger: 0.08, x: 40, opacity: 0, duration: 0.8, scrub: 0.6, start: "top 60%", end: "top 30%" });
  useReveal(sectionRef, { selector: "[data-submit-btn]", y: 20, opacity: 0, duration: 0.7, scrub: 0.6, start: "center 70%", end: "center 40%" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="py-20 md:py-32 bg-background reveal-on-scroll" ref={sectionRef}>
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Contact</p>
          <h2 className="text-5xl md:text-6xl font-semibold mt-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2 mt-4">
            <MessageCircle className="h-5 w-5" />Let's Connect & Collaborate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-foreground">Let's Work Together</h3>
              <p className="text-lg text-foreground/80 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src={contactImage}
                alt="Collaboration moment"
                className="h-52 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <Card data-contact-card className="relative p-6 bg-card border border-border transition-all duration-300">
                <div className="flex items-start gap-4 relative">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Email</h4>
                    <a
                      href="mailto:sanzimrahmankhan@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      sanzimrahmankhan@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card data-contact-card className="relative p-6 bg-card border border-border transition-all duration-300">
                <div className="flex items-start gap-4 relative">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Location</h4>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right - Contact Form */}
          <Card className="relative p-8 bg-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  data-form-input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  data-form-input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  data-form-input
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <Button data-submit-btn type="submit" className="w-full font-semibold bg-foreground text-background hover:bg-foreground/90 transition-colors" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
