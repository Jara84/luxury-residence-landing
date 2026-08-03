import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: {
    src: string;
    alt: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X size={30} />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronLeft size={34} />
      </button>

      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
      />

      <button
        onClick={onNext}
        className="absolute right-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronRight size={34} />
      </button>

      <div className="absolute bottom-8 rounded-full bg-white/10 px-5 py-2 text-sm tracking-wide text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}