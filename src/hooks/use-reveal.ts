import { useEffect, useRef } from "react";

/** Sets data-visible="true" once the element enters the viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset["visible"] = "true";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset["visible"] = "true";
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Light vertical parallax (desktop, motion allowed only). */
export function useParallax<T extends HTMLElement>(strength = 0.08) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!mq.matches) {
        el.style.transform = "";
        return;
      }
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = -rect.top * strength;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", update);
      cancelAnimationFrame(raf);
    };
  }, [strength]);
  return ref;
}
