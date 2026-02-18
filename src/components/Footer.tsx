import { Landmark, Heart, ArrowUp, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  navigateTo: (page: string) => void;
}

export function Footer({ navigateTo }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy-900 border-t border-gold-500/10 relative">
      {/* Decorative top line */}
      <div className="h-1 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & info */}
          <div className="lg:col-span-1">
            <button onClick={() => navigateTo("home")} className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <Landmark className="text-navy-900" size={20} />
              </div>
              <div>
                <span className="font-serif font-bold text-white text-lg block leading-tight">Ateny Roztocza</span>
                <span className="text-gold-400/60 text-xs font-cormorant italic">Prawda · Dobro · Piękno</span>
              </div>
            </button>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Fundacja Ateny Roztocza - Ośrodek Kultury i Myśli im. ks. prof. Tadeusza Guza.
              Promujemy wartości klasycznej filozofii i tradycji chrześcijańskiej.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-white/40 hover:text-gold-400 hover:bg-white/10 transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-white/10 transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">Fundacja</h4>
            <ul className="space-y-2">
              {[
                { label: "O Fundacji", page: "o-fundacji" },
                { label: "Statut", page: "statut" },
                { label: "Władze Fundacji", page: "wladze" },
                { label: "Sprawozdania", page: "sprawozdania" },
                { label: "Kontakt", page: "kontakt" },
              ].map(item => (
                <li key={item.page}>
                  <button onClick={() => navigateTo(item.page)} className="text-white/40 hover:text-gold-300 text-sm transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">Ks. Prof. Guz</h4>
            <ul className="space-y-2">
              {[
                { label: "Biografia", page: "biografia" },
                { label: "Publikacje", page: "publikacje" },
                { label: "Wykłady", page: "wyklady" },
                { label: "Kazania", page: "kazania" },
                { label: "Nagrania wideo", page: "nagrania" },
              ].map(item => (
                <li key={item.page}>
                  <button onClick={() => navigateTo(item.page)} className="text-white/40 hover:text-gold-300 text-sm transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">Aktualności</h4>
            <ul className="space-y-2">
              {[
                { label: "Wiadomości", page: "wiadomosci" },
                { label: "Wydarzenia", page: "wydarzenia" },
                { label: "Galeria", page: "galeria" },
                { label: "Filmy", page: "filmy" },
                { label: "Wesprzyj Fundację", page: "wsparcie" },
              ].map(item => (
                <li key={item.page}>
                  <button onClick={() => navigateTo(item.page)} className="text-white/40 hover:text-gold-300 text-sm transition-colors flex items-center gap-1">
                    {item.label === "Wesprzyj Fundację" && <Heart size={12} className="text-red-400" />}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Fundacja Ateny Roztocza. Wszelkie prawa zastrzeżone.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Projekt inspirowany ideą Prawdy, Dobra i Piękna.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold-500/10 border border-gold-500/20 rounded-lg flex items-center justify-center text-gold-400 hover:bg-gold-500/20 transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
