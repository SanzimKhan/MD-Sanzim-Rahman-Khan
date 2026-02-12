import { RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  selector?: string;
  stagger?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  filter?: string;
  duration?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: number | boolean;
};

export default function useReveal(
  ref: RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = options.selector
      ? (el.querySelectorAll(options.selector) as NodeListOf<HTMLElement>)
      : ([el] as unknown as NodeListOf<HTMLElement>);

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1, filter: "none" });
      return;
    }

    const fromVars: any = {
      opacity: options.opacity ?? 0,
      y: options.y ?? 30,
      scale: options.scale ?? 1,
      filter: options.filter ?? "blur(8px)",
    };

    const toVars: any = {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "none",
      duration: options.duration ?? 0.8,
      ease: options.ease ?? "power2.out",
      stagger: options.stagger ?? 0,
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: options.start ?? "top 80%",
        end: options.end ?? "top 20%",
        scrub: options.scrub ?? false,
      },
    });

    tl.fromTo(targets, fromVars, toVars);

    return () => {
      try {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
      } catch (e) {}
      tl.kill();
    };
  }, [ref, JSON.stringify(options)]);
}
