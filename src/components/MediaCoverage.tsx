import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Newspaper } from "lucide-react";

const MediaCoverage = () => {
  const mediaItems = [
    {
      title: "BRACU Team Reaches URC 2024 Finals",
      source: "The Daily Star",
      date: "2024",
      description: "BRACU Mongol Tori team qualifies for University Rover Challenge finals in Utah, USA.",
      link: "#"
    },
    {
      title: "BOT Engineers: Revolutionizing Robotics Education",
      source: "Tech Magazine BD",
      date: "2023",
      description: "How a young entrepreneur is making robotics accessible to students across Bangladesh.",
      link: "#"
    },
    {
      title: "Youth in STEM: Inspiring the Next Generation",
      source: "Prothom Alo",
      date: "2023",
      description: "Feature story on young innovators leading the robotics movement in Bangladesh.",
      link: "#"
    },
    {
      title: "Mars Rover Competition: Bangladesh's Rising Stars",
      source: "TechCrunch BD",
      date: "2024",
      description: "Coverage of the team's journey to international robotics competitions.",
      link: "#"
    },
  ];

  return (
    <section id="media" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Media Coverage</h2>
          <p className="text-xl text-muted-foreground">In the News</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Newspaper className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary">{item.source}</span>
                      <span className="text-sm text-muted-foreground">• {item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read Article
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
