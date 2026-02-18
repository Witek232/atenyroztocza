import { useInView } from "../hooks/useInView";
import { ChevronRight, BookOpen, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: <BookOpen size={24} />, value: "150+", label: "Publikacji naukowych" },
  { icon: <Users size={24} />, value: "3000+", label: "Uczestników wydarzeń" },
  { icon: <Calendar size={24} />, value: "80+", label: "Konferencji i wykładów" },
  { icon: <Award size={24} />, value: "15", label: "Lat działalności" },
];

interface AboutFoundationProps {
  navigateTo: (page: string) => void;
}

export function AboutFoundation({ navigateTo }: AboutFoundationProps) {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop"
                alt="Ks. prof. Tadeusz Guz"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/40 to-transparent" />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[220px]">
                <div className="text-gold-500 font-serif text-3xl font-bold">15+</div>
                <div className="text-navy-700 text-sm font-medium">lat służby filozofii i teologii</div>
                <div className="mt-2 w-8 h-0.5 bg-gold-400" />
              </div>

              {/* Ornament */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400/40 rounded-tl-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-semibold">O Fundacji</span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-800 mt-3 mb-6 leading-tight">
              Fundacja <span className="gradient-text">Ateny Roztocza</span>
            </h2>
            
            <p className="text-navy-600/80 leading-relaxed mb-4">
              Fundacja „Ateny Roztocza" została powołana z inicjatywy ks. prof. dr. hab. Tadeusza Guza, 
              wybitnego filozofa i teologa, profesora Katolickiego Uniwersytetu Lubelskiego Jana Pawła II. 
              Misją Fundacji jest promowanie wartości Prawdy, Dobra i Piękna w duchu klasycznej filozofii 
              i tradycji chrześcijańskiej.
            </p>
            
            <p className="text-navy-600/80 leading-relaxed mb-6">
              Ośrodek Kultury i Myśli na Roztoczu stanowi unikalne miejsce spotkania nauki, 
              wiary i sztuki. Organizujemy wykłady, konferencje naukowe, rekolekcje oraz 
              wydarzenia kulturalne, budując most między akademickim światem a lokalną społecznością.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Filozofia klasyczna", "Teologia", "Kultura", "Edukacja"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo("o-fundacji")}
                className="group bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-700 transition-all flex items-center gap-2"
              >
                Dowiedz się więcej
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo("biografia")}
                className="group border-2 border-navy-300 text-navy-700 px-6 py-3 rounded-lg font-medium hover:border-gold-400 hover:text-gold-600 transition-all flex items-center gap-2"
              >
                Ks. prof. Tadeusz Guz
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-800 text-gold-400 mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="font-serif text-3xl font-bold text-navy-800">{stat.value}</div>
              <div className="text-navy-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
