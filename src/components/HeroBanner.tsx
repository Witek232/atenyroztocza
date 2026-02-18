import { useState, useEffect } from "react";
import { ChevronRight, Play, ArrowDown } from "lucide-react";

const slides = [
  {
    title: "Fundacja Ateny Roztocza",
    subtitle: "Ośrodek Kultury i Myśli im. ks. prof. Tadeusza Guza",
    desc: "Miejsce spotkania filozofii, teologii i kultury w sercu Roztocza. Odkrywamy i promujemy wartości Prawdy, Dobra i Piękna.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    gradient: "from-navy-900/90 via-navy-900/60 to-navy-900/30",
  },
  {
    title: "Prawda · Dobro · Piękno",
    subtitle: "Transcendentalia jako fundament kultury europejskiej",
    desc: "Kontynuujemy tradycję klasycznej filozofii i myśli chrześcijańskiej, budując mosty między przeszłością a przyszłością.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop",
    gradient: "from-navy-900/90 via-navy-800/60 to-transparent",
  },
  {
    title: "Wykłady i Konferencje",
    subtitle: "Spotkania z myślą filozoficzną i teologiczną",
    desc: "Zapraszamy na wykłady, seminaria i konferencje naukowe prowadzone przez wybitnych myślicieli i naukowców.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop",
    gradient: "from-navy-900/95 via-navy-900/50 to-navy-900/20",
  },
  {
    title: "Roztocze — Kraina Inspiracji",
    subtitle: "Piękno natury i duchowości",
    desc: "Otoczeni pięknem roztoczańskiej przyrody, tworzymy przestrzeń do refleksji, kontemplacji i twórczego myślenia.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop",
    gradient: "from-navy-900/80 via-navy-900/50 to-navy-900/30",
  }
];

interface HeroBannerProps {
  navigateTo: (page: string) => void;
}

export function HeroBanner({ navigateTo }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient}`} />
        </div>
      ))}

      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a83c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gold corner ornaments */}
      <div className="absolute top-20 left-8 w-32 h-32 border-t-2 border-l-2 border-gold-400/30 rounded-tl-lg" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-gold-400/30 rounded-br-lg" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Ornamental line */}
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isTransitioning ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0"}`}>
              <div className="w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600" />
              <span className="text-gold-400 text-sm font-cormorant italic tracking-widest uppercase">
                Fundacja Ateny Roztocza
              </span>
            </div>

            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-700 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
              {slide.title}
            </h1>

            <p className={`font-cormorant text-xl sm:text-2xl text-gold-300/90 mb-4 italic transition-all duration-700 delay-100 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
              {slide.subtitle}
            </p>

            <p className={`text-white/70 text-base sm:text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 delay-200 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
              {slide.desc}
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
              <button
                onClick={() => navigateTo("o-fundacji")}
                className="group bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-8 py-3.5 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-gold-500/20"
              >
                Poznaj Fundację
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo("nagrania")}
                className="group glass text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Play size={18} className="text-gold-400" />
                Obejrzyj wykłady
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIsTransitioning(true); setTimeout(() => { setCurrentSlide(i); setIsTransitioning(false); }, 300); }}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? "w-10 h-2.5 bg-gold-400"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/40 text-xs uppercase tracking-widest">Przewiń w dół</span>
        <ArrowDown size={16} className="text-gold-400/60" />
      </div>
    </section>
  );
}
