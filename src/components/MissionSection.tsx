import { useInView } from "../hooks/useInView";
import { Star, Heart, Sun } from "lucide-react";

const pillars = [
  {
    icon: <Star className="text-gold-400" size={40} />,
    latin: "Verum",
    title: "Prawda",
    desc: "Poszukiwanie i głoszenie prawdy jako fundamentu ludzkiego poznania. Dążenie do odkrywania prawdy o Bogu, człowieku i świecie w duchu klasycznej filozofii.",
    color: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-400/20",
  },
  {
    icon: <Heart className="text-gold-400" size={40} />,
    latin: "Bonum",
    title: "Dobro",
    desc: "Promowanie dobra w każdym wymiarze życia – moralnym, społecznym i duchowym. Budowanie kultury opartej na wartościach chrześcijańskich i humanistycznych.",
    color: "from-red-500/10 to-red-600/5",
    border: "border-red-400/20",
  },
  {
    icon: <Sun className="text-gold-400" size={40} />,
    latin: "Pulchrum",
    title: "Piękno",
    desc: "Odkrywanie i tworzenie piękna w sztuce, liturgii, naturze i codziennym życiu. Piękno jako droga do Boga i przejaw Jego obecności w stworzeniu.",
    color: "from-amber-500/10 to-amber-600/5",
    border: "border-amber-400/20",
  },
];

export function MissionSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201, 168, 60, 0.3), transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(201, 168, 60, 0.2), transparent 50%)`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold-400/60 text-sm uppercase tracking-[0.3em] font-semibold">Nasza Misja</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-2">
            Transcendentalia
          </h2>
          <p className="font-cormorant text-xl text-gold-300/70 italic">
            Trzy filary, na których budujemy naszą działalność
          </p>
          <div className="mx-auto mt-6 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 bg-gradient-to-br ${pillar.color} border ${pillar.border} backdrop-blur-sm
                hover:scale-105 transition-all duration-500 cursor-default
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="absolute top-4 right-4 text-7xl font-serif text-white/[0.03] font-bold">
                {pillar.latin}
              </div>
              
              <div className="mb-4 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {pillar.icon}
              </div>
              
              <span className="text-gold-400/50 text-xs uppercase tracking-[0.2em] font-cormorant">
                {pillar.latin}
              </span>
              
              <h3 className="font-serif text-3xl font-bold text-white mt-1 mb-4 group-hover:text-gold-300 transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-sm">
                {pillar.desc}
              </p>

              <div className="mt-6 w-12 h-0.5 bg-gold-500/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
