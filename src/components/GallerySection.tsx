import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", title: "Ośrodek Kultury i Myśli", category: "Ośrodek" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", title: "Wykład akademicki", category: "Wykłady" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop", title: "Roztocze - Kraina Inspiracji", category: "Roztocze" },
  { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop", title: "Biblioteka Ośrodka", category: "Ośrodek" },
  { src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop", title: "Konferencja naukowa", category: "Konferencje" },
  { src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop", title: "Koncert muzyki sakralnej", category: "Kultura" },
];

export function GallerySection() {
  const { ref, inView } = useInView();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-semibold">Galeria</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-800 mt-2 mb-2">
            Zdjęcia z naszej działalności
          </h2>
          <div className="mx-auto mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="text-white mx-auto mb-2" size={28} />
                  <span className="text-white font-serif text-lg font-bold">{img.title}</span>
                  <span className="block text-gold-300 text-xs mt-1 uppercase tracking-wider">{img.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src.replace('w=600&h=400', 'w=1200&h=800')}
            alt={images[lightbox].title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in"
          />
          <div className="absolute bottom-8 text-center">
            <h3 className="text-white font-serif text-xl">{images[lightbox].title}</h3>
            <span className="text-gold-400/70 text-sm">{images[lightbox].category}</span>
          </div>
        </div>
      )}
    </section>
  );
}
