import { useEffect, useRef, useState } from "react";
import useReveal from "@/hooks/use-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Creative = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // import all asset files as URLs at build time so Vite handles special characters safely
  // include subfolders so we can load videos from `Videos-creative`
  const videoModules = import.meta.glob('../assets/**', { as: 'url', eager: true }) as Record<string, string>;

  // Collect extra .mp4 assets from the `Videos-creative` folder (exclude the main BC_5.mp4)
  const extraVideoUrls = Object.entries(videoModules)
    .filter(([path]) => path.includes('/Videos-creative/') && path.toLowerCase().endsWith('.mp4'))
    .map(([, url]) => url);

  useReveal(sectionRef, { selector: "*:not(svg)", stagger: 0.06, y: 20, opacity: 0, duration: 0.8 });

  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogVideoRef = useRef<HTMLVideoElement | null>(null);

  // No DOM injection — render video via JSX below. keep small effect to ensure video paused on mount.
  useEffect(() => {
    const v = videoRef.current as unknown as HTMLVideoElement | null;
    if (v && typeof v.pause === 'function') v.pause();
  }, []);

  // Lazy-load videos in the gallery: set `data-src` on video elements and populate `src` when
  // the element is near the viewport or hovered for quick preview.
  useEffect(() => {
    if (!galleryRef.current) return;
    const vids = Array.from(galleryRef.current.querySelectorAll('video[data-src]')) as HTMLVideoElement[];
    if (!vids.length) return;

    const onEnter = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
      const el = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        const src = el.dataset.src;
        if (src && el.src !== src) { el.src = src; try { el.load(); } catch {} }
        observer.unobserve(el);
      }
    };

    const io = new IntersectionObserver((entries, observer) => entries.forEach(e => onEnter(e, observer)), { root: null, rootMargin: '200px', threshold: 0.1 });

    vids.forEach((v) => {
      io.observe(v);
      const enter = () => { const src = v.dataset.src; if (src && v.src !== src) { v.src = src; try { v.load(); } catch {} } };
      v.addEventListener('mouseenter', enter, { passive: true });
      // store listener for cleanup
      (v as any).__enter = enter;
    });

    return () => {
      io.disconnect();
      vids.forEach((v) => { if ((v as any).__enter) v.removeEventListener('mouseenter', (v as any).__enter); });
    };
  }, [galleryRef.current]);

  // collect the video urls once for reuse (featured + extras)
  const allVideos = ([videoModules['../assets/BC_5.mp4'], ...extraVideoUrls]).filter(Boolean);

  // Build a map from video URL -> poster image URL by matching filenames (robust against spaces/special chars)
  const postersByVideoRef = useRef<Map<string, string>>(new Map());
  useEffect(() => {
    const map = postersByVideoRef.current;
    Object.entries(videoModules).forEach(([k, url]) => {
      const lower = k.toLowerCase();
      if (lower.endsWith('.mp4')) {
        const fname = k.split('/').pop() || '';
        const base = fname.replace(/\.[^/.]+$/, '').toLowerCase();
        const posterKey = Object.keys(videoModules).find((pk) => {
          const seg = pk.split('/').pop()?.toLowerCase() || '';
          return seg === `${base}.jpg` || seg === `${base}.jpeg` || seg === `${base}.png` || seg === `${base}.webp`;
        });
        if (posterKey) map.set(url, videoModules[posterKey]);
      }
    });
  }, []);

  // Generate fallback poster images by capturing a frame from videos that don't have posters.
  useEffect(() => {
    if (!allVideos || !allVideos.length) return;
    const toProcess = allVideos.filter((u) => !postersByVideoRef.current.has(u));
    if (!toProcess.length) return;

    const created: HTMLVideoElement[] = [];

    toProcess.forEach((url) => {
      const temp = document.createElement('video');
      temp.src = url;
      temp.crossOrigin = 'anonymous';
      temp.muted = true;
      temp.playsInline = true;

      const cleanup = () => {
        try { temp.pause(); } catch {}
        temp.src = '';
      };

      const capture = () => {
        try {
          const w = temp.videoWidth || 640;
          const h = temp.videoHeight || 360;
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) { cleanup(); return; }
          ctx.drawImage(temp, 0, 0, w, h);
          const data = canvas.toDataURL('image/jpeg', 0.8);
          postersByVideoRef.current.set(url, data);
          // apply poster to any rendered video elements matching this url
          Array.from(document.querySelectorAll('video')).forEach((el) => {
            try {
              const v = el as HTMLVideoElement;
              if (v.dataset.src === url || v.src === url) v.setAttribute('poster', data);
            } catch {}
          });
        } catch {}
        cleanup();
      };

      const onLoaded = () => {
        // seek a small amount to ensure a frame is available
        const trySeek = () => {
          try {
            if (typeof temp.seekable !== 'undefined' && temp.duration > 0) {
              temp.currentTime = Math.min(0.5, Math.max(0, temp.duration / 10));
            } else {
              capture();
              temp.removeEventListener('loadeddata', onLoaded);
            }
          } catch {
            capture();
          }
        };
        temp.addEventListener('seeked', capture, { once: true });
        trySeek();
      };

      temp.addEventListener('loadeddata', onLoaded, { once: true });
      temp.load();
      created.push(temp);
    });

    return () => { created.forEach((t) => { try { t.pause(); t.src = ''; } catch {} }); };
  }, [JSON.stringify(allVideos)]);

  useEffect(() => {
    if (selectedIndex === null) {
      if (dialogVideoRef.current) { try { dialogVideoRef.current.pause(); } catch {} }
      return;
    }
    // autoplay when dialog opens
    const v = dialogVideoRef.current;
    if (v) {
      v.currentTime = 0;
      v.muted = false;
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  }, [selectedIndex]);

  return (
    <section id="creative" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Creative</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-foreground">Multimedia, Design & Music</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">I create videos, design posters and produce music, and I explore game ideas. I blend these creative skills with robotics to tell clear, engaging technical stories.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4" ref={galleryRef}>
            <h3 className="text-xl font-medium">Video Editing & Direction</h3>
            <p className="text-muted-foreground">Polished edits, short reels and motion work focused on clear visuals and refined audio.</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {otherVideos.map((vUrl, i) => {
                const idx = i + 1;
                const poster = postersByVideoRef.current.get(vUrl) || '';
                return (
                  <button key={vUrl || idx} onClick={() => setSelectedIndex(idx)} className="rounded-lg overflow-hidden bg-transparent p-0">
                    <video
                      data-src={vUrl}
                      {...(poster ? { poster } : {})}
                      className="w-full h-36 object-contain bg-black"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center">
            {featuredVideo ? (
              <div className="w-full max-w-lg">
                <video
                  ref={videoRef}
                  src={featuredVideo}
                  controls
                  className="w-full rounded-xl shadow-lg bg-black"
                />
              </div>
            ) : null}
          </div>
        </div>
        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black/90 border-border rounded-2xl backdrop-blur-md">
            {selectedIndex !== null && (
              <div className="relative bg-black/50 flex items-center justify-center p-6">
                <button onClick={() => setSelectedIndex((s) => (s === null ? null : (s > 0 ? s - 1 : allVideos.length - 1)))} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" aria-label="Previous">‹</button>

                <video
                  ref={dialogVideoRef}
                  src={allVideos[selectedIndex]}
                  controls
                  className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl ring-1 ring-white/20"
                />

                <button onClick={() => setSelectedIndex((s) => (s === null ? null : (s < allVideos.length - 1 ? s + 1 : 0)))} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" aria-label="Next">›</button>

                <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-white/60 text-sm" aria-label="Close">✕</button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        

        <div className="bg-card p-6 rounded-2xl border border-border">
          <h4 className="text-lg font-semibold mb-2">How this blends with robotics</h4>
          <p className="text-muted-foreground">My creative work helps make technical projects easier to understand. Video storytelling, visual branding and sound design all help communicate complex systems to sponsors, judges and the public.</p>
        </div>
      </div>
    </section>
  );
};

export default Creative;
