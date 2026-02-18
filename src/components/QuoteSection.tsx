import { useInView } from "../hooks/useInView";
import { Quote } from "lucide-react";

export function QuoteSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-gold-400/10" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-gold-400/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-400/[0.02]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Quote className="mx-auto text-gold-400/30 mb-6" size={48} />
          
          <blockquote className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-relaxed italic mb-8">
            „Prawda, Dobro i Piękno to nie tylko abstrakcyjne pojęcia filozoficzne, 
            ale żywe rzeczywistości, które kształtują ludzkie serce i umysł, 
            prowadząc ku pełni człowieczeństwa i ku Bogu."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gold-400/40" />
            <div>
              <div className="text-gold-400 font-serif font-semibold text-lg">Ks. prof. dr hab. Tadeusz Guz</div>
              <div className="text-white/40 text-sm">Założyciel Fundacji Ateny Roztocza</div>
            </div>
            <div className="w-12 h-0.5 bg-gold-400/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
