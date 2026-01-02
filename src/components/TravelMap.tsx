import { MapPin } from "lucide-react";

const TravelMap = () => {
  const visitedPlaces = [
    { name: "Utah, USA", type: "Competition", description: "URC 2024 Finals" },
    { name: "Dhaka, Bangladesh", type: "Home", description: "Base of Operations" },
    { name: "Singapore", type: "Conference", description: "STEM Education Summit" },
    { name: "Dubai, UAE", type: "Exhibition", description: "Tech Expo 2023" },
    { name: "Kolkata, India", type: "Workshop", description: "Robotics Workshop" },
    { name: "Cox's Bazar, Bangladesh", type: "Team Building", description: "Team Retreat" },
  ];

  return (
    <section id="travel" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Places Visited</h2>
          <p className="text-xl text-muted-foreground">Where Work Takes Me</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* World map illustration (simplified) */}
          <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border mb-12 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <path
                  fill="currentColor"
                  d="M150,100 Q200,80 250,100 T350,90 T450,100 T550,85 T650,100 T750,90 T850,100 L850,400 Q800,420 750,400 T650,410 T550,400 T450,415 T350,400 T250,410 T150,400 Z"
                />
              </svg>
            </div>
            
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visitedPlaces.map((place, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{place.name}</h3>
                    <p className="text-xs font-medium text-primary mb-1">{place.type}</p>
                    <p className="text-sm text-muted-foreground">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="text-4xl font-bold gradient-text">6+</p>
              <p className="text-muted-foreground text-sm mt-1">Countries</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <p className="text-4xl font-bold gradient-text">10+</p>
              <p className="text-muted-foreground text-sm mt-1">Cities</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="text-4xl font-bold gradient-text">15+</p>
              <p className="text-muted-foreground text-sm mt-1">Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelMap;
