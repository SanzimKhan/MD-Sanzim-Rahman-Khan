import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useReveal from "@/hooks/use-reveal";
import { ImageIcon } from "lucide-react";
import img3410 from "@/assets/IMG_7943.JPG";
import img7583 from "@/assets/IMG_7583.jpg";
import img7943 from "@/assets/IMG_7943.JPG";
import img8538 from "@/assets/IMG_8538.jpg";
import img8563 from "@/assets/IMG_8563.jpg";
import img9205 from "@/assets/IMG_8538.jpg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useReveal(gridRef, { selector: "[data-gallery-item]", stagger: 0.06, y: 30, scale: 0.85, opacity: 0, duration: 0.9, scrub: 0.8, start: "top 65%", end: "top 15%" });

  const galleryItems = [
    {
      src: img7583,
      alt: "Robotics workshop with students",
      caption: "Workshop Session"
    },
    {
      src: img3410,
      alt: "Mars rover prototype",
      caption: "Mars Rover Build"
    },
    {
      src: img7943,
      alt: "CAD design workstation",
      caption: "CAD Design"
    },
    {
      src: img8538,
      alt: "Team collaboration",
      caption: "Team Collaboration"
    },
    {
      src: img8563,
      alt: "Engineering lab",
      caption: "Engineering Lab"
    },
    {
      src: img9205,
      alt: "3D printed components",
      caption: "3D Printing"
    },
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
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-border shadow-sm transition-all duration-500 ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <ImageIcon className="w-6 h-6 text-white/80 group-hover:text-white transition-all duration-300" />
                </div>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/90 border-border rounded-2xl backdrop-blur-md">
          {selectedImage && (
            <div className="relative bg-black/50">
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-white/20"
              />
              <div className="absolute top-4 right-4 text-white/60 text-sm">Press ESC to close</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
