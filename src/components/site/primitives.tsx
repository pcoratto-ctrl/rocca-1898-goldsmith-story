import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  as: Tag = "div",
  className,
  delay = 0,
  children,
}: {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={cn("reveal", className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("type-label flex items-center gap-4", className)}>
      <span aria-hidden className="hairline inline-block w-8" />
      {children}
    </p>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

/**
 * Fixed-ratio frame. Never displays an image larger than `maxWidth` so
 * small originals are not upscaled. Without `image` it renders a neutral
 * placeholder slot for photography still to come.
 */
export function EditorialImage({
  image,
  ratio,
  className,
  priority,
  sizes = "100vw",
  position = "center",
  zoom,
  placeholderLabel,
}: {
  image?: Img;
  ratio: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  position?: string;
  zoom?: boolean;
  placeholderLabel?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-surface", zoom && "img-zoom", className)}
      style={{ aspectRatio: ratio }}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <div className="placeholder-frame absolute inset-0 flex items-end p-6" aria-hidden>
          {placeholderLabel && (
            <span className="type-label text-muted-foreground/70">{placeholderLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
