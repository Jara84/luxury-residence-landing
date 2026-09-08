type Props = {
  /** nombre base del archivo en /public/img, sin sufijo de tamaño */
  name: string;
  alt: string;
  className?: string;
  /** true solo para el hero: carga inmediata y con prioridad alta */
  priority?: boolean;
  sizes?: string;
};

/**
 * Imagen responsive servida desde /public/img.
 * Entrega WebP con fallback JPG y dos tamaños (800 / 1600).
 */
export default function Picture({
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  return (
    <picture>
      <source
        type="image/webp"
        sizes={sizes}
        srcSet={`/img/${name}-800.webp 800w, /img/${name}-1600.webp 1600w`}
      />

      <img
        src={`/img/${name}-1600.jpg`}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
