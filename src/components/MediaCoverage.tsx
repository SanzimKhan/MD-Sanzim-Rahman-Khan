import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import useReveal from "@/hooks/use-reveal";
import img3410 from "@/assets/IMG_7943.JPG";
const sanzimThumb = new URL('../assets/Lets hear from sanzim rahman khan.png', import.meta.url).href
const img0157 = new URL('../assets/IMG_0157.jpg', import.meta.url).href
const dailyStarImg = new URL('../assets/the daily star.jpg', import.meta.url).href
const urcImg = new URL('../assets/urc 2023.png', import.meta.url).href
import img7583 from "@/assets/IMG_7583.jpg";
import img7943 from "@/assets/IMG_7943.JPG";
import img8538 from "@/assets/IMG_8538.jpg";
import img8563 from "@/assets/IMG_8563.jpg";
import img9205 from "@/assets/IMG_8538.jpg";


const MediaCoverage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useReveal(gridRef, { selector: "[data-media-card]", stagger: 0.08, y: 50, opacity: 0, duration: 0.9, scrub: 0.8, start: "top 60%", end: "top 10%" });
  const mediaItems = [
    {
      title: "স্বপ্নবাজ তরুণ | ঈদ স্পেশাল দেশ 24 | ০১ জুলাই ২০২৩ | Channel 24", // Updated title
      source: "Channel 24", // Updated source
      date: "2023", // Updated year
      description: "স্বপ্নবাজ তরুণদের নিয়ে ঈদ স্পেশাল অনুষ্ঠান।", // Updated description
      link: "https://youtu.be/fEI0oUBJN_I?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeO9A6dy_uXlGr6TC8UrFw8xWeiQxWEiKq5wekgnc", // Updated link
      thumbnail: img7583
    },
    {
      title: "Let's hear from Md Sanzim Rahman Khan, Co-Team Lead of BRACU Mogol-Tori", // Updated title
      source: "BRACU Mogol-Tori", // Updated source
      date: "2024", // Updated year
      description: "Phoenix rover set to compete in the finals of the University Rover Challenge (URC) 2024 at the Mars Desert Research Station in Utah!", // Updated description
      link: "https://www.facebook.com/share/r/1Doo4QXCMM/", // Updated link
      thumbnail: sanzimThumb,
      objectPosition: 'center top'
    },
    {
      title: "Prothom Alo - 2023", // Updated title
      source: "Prothom Alo", // Updated source
      date: "2023", // Updated year
      description: "Feature story on young innovators leading the robotics movement in Bangladesh.", // Retained description
      link: "https://www.facebook.com/reel/3264043150409235", // Retained link
      thumbnail: img0157
    },
    {
      title: "From Challenges to Triumph: BRACU Mongol Tori’s Journey at the University Rover Challenge 2023", // New entry
      source: "BRACU Express", // New source
      date: "2023", // New date
      description: "An inspiring story of BRACU Mongol Tori’s achievements at the University Rover Challenge 2023.", // New description
      link: "https://bracuexpress.com/from-challenges-to-triumph-bracu-mongol-toris-journey-at-the-university-rover-challenge/", // New link
      thumbnail: urcImg
    },
    {
      title: "Mongol-Tori Phoenix: BRAC University’s next-generation Mars rover", // New entry
      source: "The Daily Star", // New source
      date: "2023", // New date
      description: "A detailed look at BRAC University’s next-generation Mars rover, Mongol-Tori Phoenix.", // New description
      link: "https://online91.thedailystar.net/campus/campus/news/mongol-tori-phoenix-brac-universitys-next-generation-mars-rover-3603341", // New link
      thumbnail: dailyStarImg
    },
    {
      title: "From Dhaka to MDRS: The Journey of Our Former Team Leads | Mongol Tori Podcast | Episode 2", // New entry
      source: "Mongol Tori Podcast", // New source
      date: "2023", // New date
      description: "A podcast episode exploring the journey of former team leads from Dhaka to the Mars Desert Research Station.", // New description
      link: "https://www.youtube.com/watch?v=naOagrkBlSo&list=PL7hkrFHWxIE9z4IP7xzE3mqz9HoxA0Wsz", // New link
      thumbnail: img8563
    },
  ];

  const getThumbnailFromLink = (link: string | undefined) => {
    if (!link) return null;
    try {
      const u = new URL(link);
      const host = u.hostname.toLowerCase();

      // YouTube short link
      if (host.includes("youtu.be")) {
        const id = u.pathname.replace(/^\//, "");
        return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      }

      // YouTube long link
      if (host.includes("youtube.com")) {
        const params = new URLSearchParams(u.search);
        const v = params.get("v");
        if (v) return `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
      }

      // For other hosts we don't have a stable pattern — return null so UI falls back to local thumbnail
      return null;
    } catch (e) {
      return null;
    }
  };

  return (
    <>
      <section id="media" ref={sectionRef} className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Media</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Media Coverage</h2>
          <p className="text-lg text-muted-foreground mt-4">Selected interviews, articles, and highlights.</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              data-media-card
              className="group transition-all duration-300 bg-card border-border shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-muted border border-border">
                    <img
                      src={getThumbnailFromLink(item.link) ?? item.thumbnail}
                      alt={item.title}
                      style={{ objectPosition: (item as any).objectPosition ?? 'center' }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-wide text-foreground/70">{item.source}</span>
                      <span className="text-sm text-muted-foreground">• {item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:underline"
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
    </>
  );
};

export default MediaCoverage;
