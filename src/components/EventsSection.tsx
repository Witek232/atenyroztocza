import { useInView } from "../hooks/useInView";
import { Clock, MapPin, ChevronRight, ArrowRight } from "lucide-react";

const events = [
  {
    date: { day: "25", month: "STY", year: "2025" },
    title: "Wykład: Metafizyka bytu w ujęciu Tomasza z Akwinu",
    time: "18:00",
    location: "Ośrodek Kultury i Myśli, Roztocze",
    type: "Wykład",
    color: "bg-blue-500",
  },
  {
    date: { day: "02", month: "LUT", year: "2025" },
    title: "Konferencja Naukowa: Prawda w filozofii i teologii",
    time: "10:00 - 17:00",
    location: "Aula im. Jana Pawła II",
    type: "Konferencja",
    color: "bg-gold-500",
  },
  {
    date: { day: "14", month: "LUT", year: "2025" },
    title: "Rekolekcje wielkopostne",
    time: "09:00 - 15:00",
    location: "Kaplica Ośrodka",
    type: "Rekolekcje",
    color: "bg-purple-500",
  },
  {
    date: { day: "01", month: "MAR", year: "2025" },
    title: "Spotkanie autorskie: Nowa publikacja ks. prof. Guza",
    time: "17:00",
    location: "Biblioteka Ośrodka",
    type: "Spotkanie",
    color: "bg-emerald-500",
  },
];

interface EventsSectionProps {
  navigateTo: (page: string) => void;
}

export function EventsSection({ navigateTo }: EventsSectionProps) {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-semibold">Kalendarium</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-800 mt-2">
              Nadchodzące wydarzenia
            </h2>
          </div>
          <button 
            onClick={() => navigateTo("wydarzenia")}
            className="group text-gold-600 font-medium flex items-center gap-1 hover:text-gold-700 transition-colors"
          >
            Pełne kalendarium
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <button
              key={i}
              onClick={() => navigateTo("wydarzenia")}
              className={`w-full group flex flex-col sm:flex-row items-stretch gap-0 sm:gap-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden text-left
                ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Date block */}
              <div className="flex-shrink-0 w-full sm:w-24 bg-navy-800 text-center py-4 sm:py-6 flex sm:flex-col items-center sm:items-center justify-center gap-3 sm:gap-0">
                <span className="text-gold-400 text-3xl sm:text-4xl font-serif font-bold leading-none">{event.date.day}</span>
                <span className="text-gold-300/70 text-sm font-semibold uppercase tracking-wider">{event.date.month}</span>
                <span className="text-white/30 text-xs sm:mt-1">{event.date.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1 py-4 px-5 sm:px-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`${event.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-800 group-hover:text-gold-600 transition-colors">
                    {event.title}
                  </h3>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-3 sm:gap-1 text-sm text-navy-500 flex-shrink-0">
                  <span className="flex items-center gap-1"><Clock size={13} /> {event.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={13} /> {event.location}</span>
                </div>

                <ChevronRight size={20} className="hidden sm:block text-navy-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all flex-shrink-0 mr-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
