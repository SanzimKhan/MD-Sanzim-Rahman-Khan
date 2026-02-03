import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Newspaper } from "lucide-react";

const MediaCoverage = () => {
  const mediaItems = [
    {
      title: "স্বপ্নবাজ তরুণ | ঈদ স্পেশাল দেশ 24 | ০১ জুলাই ২০২৩ | Channel 24", // Updated title
      source: "Channel 24", // Updated source
      date: "2023", // Updated year
      description: "স্বপ্নবাজ তরুণদের নিয়ে ঈদ স্পেশাল অনুষ্ঠান।", // Updated description
      link: "https://youtu.be/fEI0oUBJN_I?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeO9A6dy_uXlGr6TC8UrFw8xWeiQxWEiKq5wekgnc", // Updated link
      thumbnail: "https://img.youtube.com/vi/fEI0oUBJN_I/maxresdefault.jpg" // Added thumbnail
    },
    {
      title: "Let's hear from Md Sanzim Rahman Khan, Co-Team Lead of BRACU Mogol-Tori", // Updated title
      source: "BRACU Mogol-Tori", // Updated source
      date: "2024", // Updated year
      description: "Phoenix rover set to compete in the finals of the University Rover Challenge (URC) 2024 at the Mars Desert Research Station in Utah!", // Updated description
      link: "https://www.facebook.com/share/r/1Doo4QXCMM/", // Updated link
      thumbnail: "https://via.placeholder.com/600" // Placeholder thumbnail for Facebook link
    },
    {
      title: "Prothom Alo - 2023", // Updated title
      source: "Prothom Alo", // Updated source
      date: "2023", // Updated year
      description: "Feature story on young innovators leading the robotics movement in Bangladesh.", // Retained description
      link: "https://www.facebook.com/reel/3264043150409235", // Retained link
      thumbnail: "https://via.placeholder.com/600" // Updated placeholder thumbnail for Prothom Alo
    },
    {
      title: "From Challenges to Triumph: BRACU Mongol Tori’s Journey at the University Rover Challenge 2023", // New entry
      source: "BRACU Express", // New source
      date: "2023", // New date
      description: "An inspiring story of BRACU Mongol Tori’s achievements at the University Rover Challenge 2023.", // New description
      link: "https://bracuexpress.com/from-challenges-to-triumph-bracu-mongol-toris-journey-at-the-university-rover-challenge/", // New link
      thumbnail: "https://via.placeholder.com/600" // Updated placeholder thumbnail for BRACU Express
    },
    {
      title: "Mongol-Tori Phoenix: BRAC University’s next-generation Mars rover", // New entry
      source: "The Daily Star", // New source
      date: "2023", // New date
      description: "A detailed look at BRAC University’s next-generation Mars rover, Mongol-Tori Phoenix.", // New description
      link: "https://online91.thedailystar.net/campus/campus/news/mongol-tori-phoenix-brac-universitys-next-generation-mars-rover-3603341", // New link
      thumbnail: "https://via.placeholder.com/600" // Updated placeholder thumbnail for The Daily Star
    },
    {
      title: "From Dhaka to MDRS: The Journey of Our Former Team Leads | Mongol Tori Podcast | Episode 2", // New entry
      source: "Mongol Tori Podcast", // New source
      date: "2023", // New date
      description: "A podcast episode exploring the journey of former team leads from Dhaka to the Mars Desert Research Station.", // New description
      link: "https://www.youtube.com/watch?v=naOagrkBlSo&list=PL7hkrFHWxIE9z4IP7xzE3mqz9HoxA0Wsz", // New link
      thumbnail: "https://img.youtube.com/vi/naOagrkBlSo/maxresdefault.jpg" // Added thumbnail
    },
  ];

  return (
    <section id="media" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Media Coverage</h2>
          <p className="text-xl text-muted-foreground">In the News</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6"> {/* Adjusted layout for two covers per row */}
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-full h-96 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"> {/* Thumbnail size retained */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
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
