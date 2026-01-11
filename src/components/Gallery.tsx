import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: "E:\Sanzim - New\sanzim-robot-chronicles\src\assets\IMG_2881_(1).jpg",
      alt: "Robotics workshop with students",
      caption: "Workshop Session"
    },
    {
      src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=400&fit=crop",
      alt: "Mars rover prototype",
      caption: "Mars Rover Build"
    },
    {
      src: "hsrc\assets\IMG_7583.jpg",
      alt: "CAD design workstation",
      caption: "CAD Design"
    },
    {
      src: "hsrc\assets\IMG_8538.jpg",
      alt: "Team collaboration",
      caption: "Team Collaboration"
    },
    {
      src: "src\assets\IMG_8563.jpg",
      alt: "Engineering lab",
      caption: "Engineering Lab"
    },
    {
      src: "hsrc\assets\IMG_9205 (1).jpg",
      alt: "3D printed components",
      caption: "3D Printing"
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground">Behind the Scenes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in aspect-[3/2]"
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-background font-semibold text-sm">{item.caption}</p>
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
