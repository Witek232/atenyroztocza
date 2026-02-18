import { useInView } from "../hooks/useInView";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";

const news = [
  {
    date: "15 Stycznia 2025",
    category: "Wykład",
    title: "Filozofia klasyczna wobec wyzwań współczesności",
    excerpt: "Zapraszamy na wykład ks. prof. Tadeusza Guza poświęcony aktualności myśli arystotelesowsko-tomistycznej w kontekście współczesnych problemów filozoficznych.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
    featured: true,
  },
  {
    date: "8 Stycznia 2025",
    category: "Konferencja",
    title: "Międzynarodowa Konferencja o Transcendentaliach",
    excerpt: "Trzecia edycja konferencji naukowej poświęconej zagadnieniu transcendentaliów w tradycji filozofii klasycznej.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=250&fit=crop",
    featured: false,
  },
  {
    date: "2 Stycznia 2025",
    category: "Publikacja",
    title: 'Nowa książka: "O istocie prawdy"',
    excerpt: "Ukazała się najnowsza publikacja naukowa ks. prof. Guza dotycząca metafizycznych podstaw pojęcia prawdy.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    featured: false,
  },
  {
    date: "20 Grudnia 2024",
    category: "Wydarzenie",
    title: "Koncert Bożonarodzeniowy w Ośrodku Kultury",
    excerpt: "Wspaniały wieczór muzyki sakralnej w wykonaniu chóru kameralnego. Tradycyjne kolędy polskie i europejskie.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=250&fit=crop",
    featured: false,
  },
];

interface NewsSectionProps {
  navigateTo: (page: string) => void;
}

export function NewsSection({ navigateTo }: NewsSectionProps) {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-semibold">Aktualności</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-800 mt-2">
              Najnowsze wiadomości
            </h2>
          </div>
          <button 
            onClick={() => navigateTo("wiadomosci")}
            className="group text-gold-600 font-medium flex items-center gap-1 hover:text-gold-700 transition-colors"
          >
            Wszystkie aktualności
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured article */}
          <div className={`group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <button onClick={() => navigateTo("wiadomosci")} className="w-full text-left">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {news[0].category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500 mb-2">
                <Calendar size={14} />
                {news[0].date}
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-800 group-hover:text-gold-600 transition-colors mb-2">
                {news[0].title}
              </h3>
              <p className="text-navy-600/70 leading-relaxed">
                {news[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-gold-600 font-medium text-sm group-hover:gap-2 transition-all">
                Czytaj więcej <ChevronRight size={14} />
              </span>
            </button>
          </div>

          {/* Other articles */}
          <div className="flex flex-col gap-6">
            {news.slice(1).map((item, i) => (
              <button
                key={i}
                onClick={() => navigateTo("wiadomosci")}
                className={`group flex gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-500 text-left
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gold-600 uppercase">{item.category}</span>
                    <span className="text-xs text-navy-400">· {item.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-800 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-500 text-sm mt-1 line-clamp-2">{item.excerpt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
