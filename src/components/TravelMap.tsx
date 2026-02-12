import { Globe } from "lucide-react";
import { useRef } from "react";
import useReveal from "@/hooks/use-reveal";
const travelImage = new URL("../assets/IMG_2054_(1).jpg", import.meta.url).href;

const TravelMap = () => {
  const visitedPlaces = [
    { name: "Salt Lake City, USA", type: "Competition", description: "URC 2024 Finals" },
    { name: "Las Vegas, USA", type: "Travel"},
    { name: "Los Angeles, USA", type: "Travel"},
    { name: "Hong Kong", type: "Travel", description: "" },
    { name: "Utah, USA", type: "Competition", description: "URC 2024 Finals" },
    { name: "Dhaka, Bangladesh", type: "Home", description: "Base of Operations" },
    { name: "Bangalore, India", type: "International Rover Challange 2023"},
    { name: "Mumbai, India", type: "Travel"},
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useReveal(sectionRef, { selector: "[data-place-card]", stagger: 0.08, y: 40, opacity: 0, duration: 0.8, scrub: 0.6, start: "top 60%", end: "top 30%" });
  useReveal(sectionRef, { selector: "[data-stat]", stagger: 0.1, y: 30, scale: 0.8, opacity: 0, duration: 0.8, scrub: 0.6, start: "center 70%", end: "center 40%" });

  return (
    <>
      <section id="travel" className="py-20 md:py-32 bg-background" ref={sectionRef}>
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Travel</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Places Visited</h2>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2 mt-4">
            <Globe className="h-5 w-5" />Where Work Takes Me
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Static travel image */}
          <div className="relative bg-card rounded-3xl border border-border mb-16 overflow-hidden">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={travelImage}
                alt="Travel highlights"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Grid of place cards */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {visitedPlaces.map((place, index) => (
              <div
                key={index}
                data-place-card
                className="group/card flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 cursor-pointer"
              >
                <div className="mb-3 h-2 w-2 rounded-full bg-foreground" />
                <h3 className="font-semibold text-foreground text-center text-sm">{place.name}</h3>
                <p className="text-xs font-medium text-foreground/70 text-center mt-1">{place.type}</p>
                {place.description && <p className="text-xs text-muted-foreground text-center mt-1">{place.description}</p>}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center mt-12">
            <div data-stat className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300">
              <p className="text-4xl font-semibold text-foreground">6+</p>
              <p className="text-muted-foreground text-sm mt-2">Countries</p>
            </div>
            <div data-stat className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300">
              <p className="text-4xl font-semibold text-foreground">10+</p>
              <p className="text-muted-foreground text-sm mt-2">Cities</p>
            </div>
            <div data-stat className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300">
              <p className="text-4xl font-semibold text-foreground">15+</p>
              <p className="text-muted-foreground text-sm mt-2">Events</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default TravelMap;


