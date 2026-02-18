import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Prawda jako transcendentale bytu - wykład ks. prof. Guza",
    desc: "Wykład wygłoszony na KUL o metafizycznych podstawach prawdy",
    duration: "1:24:30",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Filozofia klasyczna a współczesność",
    desc: "Konferencja naukowa w Ośrodku Kultury i Myśli",
    duration: "52:15",
  },
  {
    id: "9bZkp7q19f0",
    title: "Homilia na uroczystość Bożego Narodzenia",
    desc: "Kazanie wygłoszone w kościele parafialnym",
    duration: "35:40",
  },
];

export function VideoSection() {
  const { ref, inView } = useInView();
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(201, 168, 60, 0.4), transparent 60%)`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold-400/60 text-sm uppercase tracking-[0.3em] font-semibold">Multimedia</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">
            Wykłady i nagrania wideo
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Obejrzyj wykłady, konferencje i homilie ks. prof. Tadeusza Guza. 
            Materiały edukacyjne dostępne dla wszystkich poszukujących prawdy.
          </p>
          <div className="mx-auto mt-6 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Main video player */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=1&rel=0`}
                  title={videos[activeVideo].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={`https://img.youtube.com/vi/${videos[activeVideo].id}/maxresdefault.jpg`}
                    alt={videos[activeVideo].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-gold-500/90 hover:bg-gold-400 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl animate-pulse-glow"
                    >
                      <Play size={32} className="text-navy-900 ml-1" fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-serif text-xl text-white font-bold">{videos[activeVideo].title}</h3>
                    <p className="text-white/60 text-sm mt-1">{videos[activeVideo].desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video list */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-2">
              Lista nagrań
            </h3>
            {videos.map((video, i) => (
              <button
                key={i}
                onClick={() => { setActiveVideo(i); setIsPlaying(false); }}
                className={`flex gap-3 p-3 rounded-xl text-left transition-all duration-200
                  ${i === activeVideo
                    ? "bg-gold-500/20 border border-gold-500/30"
                    : "bg-white/5 border border-white/5 hover:bg-white/10"
                  }`}
              >
                <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={16} className="text-white" />
                  </div>
                  <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-medium line-clamp-2 ${i === activeVideo ? "text-gold-300" : "text-white/80"}`}>
                    {video.title}
                  </h4>
                  <p className="text-white/40 text-xs mt-1 line-clamp-1">{video.desc}</p>
                </div>
              </button>
            ))}

            <a
              href="https://www.youtube.com/@atenyroztocza"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3 bg-red-600/20 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-600/30 transition-all text-sm font-medium"
            >
              <ExternalLink size={14} />
              Więcej na YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
