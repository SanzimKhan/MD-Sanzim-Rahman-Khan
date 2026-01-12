import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import img2881 from "@/assets/IMG_2881_(1).jpg";
import img7583 from "@/assets/IMG_7583.jpg";
import img8538 from "@/assets/IMG_8538.jpg";
import img8563 from "@/assets/IMG_8563.jpg";
import img9205_1 from "@/assets/IMG_9205 (1).jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: img2881,
      alt: "Robotics workshop with students",
      caption: "Workshop Session"
    },
    {
      src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=400&fit=crop",
      alt: "Mars rover prototype",
      caption: "Mars Rover Build"
    },
    {
      src: img7583,
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
      src: img9205_1,
      alt: "3D printed components",
      caption: "3D Printing"
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Gallery</h2>
          <p className="text-xl text-muted-foreground">Behind the Scenes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in aspect-[3/2] border border-border"
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-semibold text-sm">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage.replace('w=600&h=400', 'w=1200&h=800')}
              alt="Gallery preview"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
