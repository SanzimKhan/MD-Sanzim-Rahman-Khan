import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useReveal from "@/hooks/use-reveal";
import { ImageIcon } from "lucide-react";


const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useReveal(gridRef, { selector: "[data-gallery-item]", stagger: 0.06, y: 30, scale: 0.9, opacity: 0, duration: 0.9, scrub: 0.8, start: "top 65%", end: "top 15%" });

  const galleryItems = [
    { src: new URL("../assets/Gallery/2023-033_0187.jpg", import.meta.url).href, alt: "Workshop group", caption: "Workshop" },
    { src: new URL("../assets/Gallery/2023-033_0229.jpg", import.meta.url).href, alt: "Rover testing", caption: "Rover Test" },
    { src: new URL("../assets/Gallery/2023-033_0235.jpg", import.meta.url).href, alt: "Design review", caption: "Design Review" },
    { src: new URL("../assets/Gallery/2023-033_0239.jpg", import.meta.url).href, alt: "Field trial", caption: "Field Trial" },
    { src: new URL("../assets/Gallery/2023-033_0265.jpg", import.meta.url).href, alt: "Team portrait", caption: "Team" },
    { src: new URL("../assets/Gallery/2023-033_1962.jpg", import.meta.url).href, alt: "Presentation moment", caption: "Presentation" },
    { src: new URL("../assets/Gallery/Hypersinic.JPG", import.meta.url).href, alt: "Event poster", caption: "Event" },
    { src: new URL("../assets/Gallery/IMG_7583.jpg", import.meta.url).href, alt: "Action shot", caption: "Action" },
    { src: new URL("../assets/Gallery/IMG_7943.JPG", import.meta.url).href, alt: "Lab workspace", caption: "Workspace" },
    { src: new URL("../assets/Gallery/IMG_8563.jpg", import.meta.url).href, alt: "Podcast recording", caption: "Podcast" },
    { src: new URL("../assets/Gallery/iTest - San Jose.jpg", import.meta.url).href, alt: "Competition", caption: "Competition" },
    { src: new URL("../assets/Gallery/Jesan and Rafid.jpg", import.meta.url).href, alt: "Colleagues", caption: "Colleagues" },
    { src: new URL("../assets/Gallery/MT_at_UTAH.jpg", import.meta.url).href, alt: "URC at Utah", caption: "URC" },
    { src: new URL("../assets/Gallery/the daily star.jpg", import.meta.url).href, alt: "Press feature", caption: "Press" },
    { src: new URL("../assets/Gallery/urc 2023.png", import.meta.url).href, alt: "URC 2023", caption: "URC 2023" },
    { src: new URL("../assets/Gallery/urc 2024.png", import.meta.url).href, alt: "URC 2024", caption: "URC 2024" },
  ];

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Behind the Scenes</h2>
          <p className="text-lg text-muted-foreground mt-4">Workshops, builds, and the moments that shaped the work.</p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              data-gallery-item
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 transform bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-2 ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedIndex(index); }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-6">
                <div>
                  <p className="text-white font-semibold text-lg">{item.caption}</p>
                  <p className="text-white/70 text-sm mt-1">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black/90 border-border rounded-2xl backdrop-blur-md">
          {selectedIndex !== null && (
            <div className="relative bg-black/50 flex items-center justify-center">
              <button
                onClick={() => setSelectedIndex((s) => (s === null ? null : (s > 0 ? s - 1 : galleryItems.length - 1)))}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                aria-label="Previous"
              >
                ‹
              </button>

              <img
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl ring-1 ring-white/20"
              />

              <button
                onClick={() => setSelectedIndex((s) => (s === null ? null : (s < galleryItems.length - 1 ? s + 1 : 0)))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                aria-label="Next"
              >
                ›
              </button>

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white/60 text-sm"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/80">
                <div className="font-medium">{galleryItems[selectedIndex].caption}</div>
                <div className="text-sm mt-1">{galleryItems[selectedIndex].alt}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
