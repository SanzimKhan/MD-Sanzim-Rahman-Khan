import { useEffect, useRef } from "react";
import useReveal from "@/hooks/use-reveal";

const Creative = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const embedRef = useRef<HTMLDivElement | null>(null);

  useReveal(sectionRef, { selector: "*:not(svg)", stagger: 0.06, y: 20, opacity: 0, duration: 0.8 });

  useEffect(() => {
    if (!embedRef.current) return;
    // Use only the provided Instagram link and display a local thumbnail image as a clickable fallback.
    const permalink = "https://www.instagram.com/reel/DTssWcagQQI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
    const wrapper = document.createElement("div");
    wrapper.className = "mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-white border border-border";
    const thumb = new URL("../assets/insta- dekho.png", import.meta.url).href;
    wrapper.innerHTML = `
      <a href="${permalink}" target="_blank" rel="noreferrer noopener" class="block">
        <img src="${thumb}" alt="Instagram reel thumbnail" class="w-full h-auto object-contain" />
      </a>
      <div style="padding:8px; text-align:center;">
        <a href="${permalink}" target="_blank" rel="noreferrer noopener" class="text-sm text-foreground hover:underline">Open reel on Instagram</a>
      </div>
    `;
    embedRef.current.innerHTML = "";
    embedRef.current.appendChild(wrapper);
  }, []);

  return (
    <section id="creative" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Creative</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Multimedia, Design & Music</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">I create videos, design posters and produce music, and I explore game ideas. I blend these creative skills with robotics to tell clear, engaging technical stories.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Video Editing & Direction</h3>
            <p className="text-muted-foreground">I edit and direct short films and promotional videos that showcase robotics projects, handling everything from concept to final cut. For example, I created a reel for the Agrya sign at BOT Cafe and managed the project end-to-end.</p>

            <h4 className="font-medium mt-4">Poster & Graphic Design</h4>
            <p className="text-muted-foreground">Print and digital posters for events and competitions, branding for teams and products, and marketing collateral that blends technical accuracy with visual impact.</p>

            <h4 className="font-medium mt-4">Music & Sound Design</h4>
            <p className="text-muted-foreground">I produce original music and soundtracks to make videos and demos more immersive, tailored to the robotics narrative and pacing.</p>
          </div>

          <div>
            <div ref={embedRef} />
            <div className="mt-6 flex justify-center">
              <a href="https://www.instagram.com/sanzuthebaa/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-95">View my profile</a>
            </div>
          </div>
        </div>

        {/* System Acceptance Review videos */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">System Acceptance Review (Selected)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {[
              { id: 'Yno4DN9ENTA', year: 2022, role: 'Co-directed and edited', roleLabel: 'Co‑directed & Edited' },
              { id: 'LcXDMddb31I', year: 2023, role: 'Co-directed and edited', roleLabel: 'Co‑directed & Edited' },
              { id: 'CUh3vKoD6IM', year: 2024, role: 'Directed', roleLabel: 'Directed' },
              { id: 'vdP5qrJQqGc', year: 2025, role: 'Co-directed', roleLabel: 'Co‑directed' },
            ].map((v) => {
              const maxThumb = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
              const fallback = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
              return (
                <a key={v.id} href={`https://youtu.be/${v.id}`} target="_blank" rel="noreferrer noopener" className="group block overflow-hidden rounded-xl border border-border bg-card h-full flex flex-col">
                  <div className="flex-none">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={maxThumb}
                        alt={`SAR ${v.year}`}
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          if (!el.dataset.fallback) {
                            el.dataset.fallback = '1';
                            el.src = fallback;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">System Acceptance Review {v.year}</div>
                        <span className="ml-2 inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">{v.roleLabel || v.role}</span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border">
          <h4 className="text-lg font-semibold mb-2">How this blends with robotics</h4>
          <p className="text-muted-foreground">My creative work helps make technical projects easier to understand. Video storytelling, visual branding and sound design all help communicate complex systems to sponsors, judges and the public.</p>
        </div>
      </div>
    </section>
  );
};

export default Creative;
