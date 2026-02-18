import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, Church, BookOpen, Users, Calendar,
  Image, Mail, Play, Globe, Heart, Star, Award, Landmark,
  GraduationCap, Mic, FileText, Video, MapPin, Phone, Scroll
} from "lucide-react";

interface NavItem {
  label: string;
  page?: string;
  icon?: React.ReactNode;
  children?: { label: string; page: string; icon: React.ReactNode; desc?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Fundacja",
    children: [
      { label: "O Fundacji", page: "o-fundacji", icon: <Landmark size={18} />, desc: "Historia i misja Fundacji Ateny Roztocza" },
      { label: "Statut", page: "statut", icon: <FileText size={18} />, desc: "Statut i dokumenty fundacyjne" },
      { label: "Władze Fundacji", page: "wladze", icon: <Users size={18} />, desc: "Zarząd i Rada Fundacji" },
      { label: "Patroni i Partnerzy", page: "partnerzy", icon: <Award size={18} />, desc: "Współpraca i patronaty" },
      { label: "Sprawozdania", page: "sprawozdania", icon: <Scroll size={18} />, desc: "Raporty roczne i finansowe" },
    ]
  },
  {
    label: "Ks. Prof. Tadeusz Guz",
    children: [
      { label: "Biografia", page: "biografia", icon: <BookOpen size={18} />, desc: "Życiorys ks. prof. Tadeusza Guza" },
      { label: "Publikacje naukowe", page: "publikacje", icon: <FileText size={18} />, desc: "Książki, artykuły i opracowania" },
      { label: "Wykłady i konferencje", page: "wyklady", icon: <GraduationCap size={18} />, desc: "Wystąpienia akademickie i publiczne" },
      { label: "Kazania i homilie", page: "kazania", icon: <Church size={18} />, desc: "Słowo Boże i nauczanie" },
      { label: "Wywiady", page: "wywiady", icon: <Mic size={18} />, desc: "Rozmowy i wywiady medialne" },
      { label: "Nagrania wideo", page: "nagrania", icon: <Video size={18} />, desc: "Filmy i materiały audiowizualne" },
    ]
  },
  {
    label: "Prawda · Dobro · Piękno",
    children: [
      { label: "Idea Transcendentaliów", page: "transcendentalia", icon: <Star size={18} />, desc: "Filozofia prawdy, dobra i piękna" },
      { label: "Filozofia klasyczna", page: "filozofia", icon: <BookOpen size={18} />, desc: "Tradycja myśli filozoficznej" },
      { label: "Teologia", page: "teologia", icon: <Church size={18} />, desc: "Refleksja teologiczna" },
      { label: "Kultura i sztuka", page: "kultura", icon: <Heart size={18} />, desc: "Dziedzictwo kulturowe Roztocza" },
      { label: "Duchowość", page: "duchowosc", icon: <Globe size={18} />, desc: "Życie duchowe i modlitwa" },
    ]
  },
  {
    label: "Aktualności",
    children: [
      { label: "Wiadomości", page: "wiadomosci", icon: <FileText size={18} />, desc: "Najnowsze informacje" },
      { label: "Wydarzenia", page: "wydarzenia", icon: <Calendar size={18} />, desc: "Kalendarz wydarzeń" },
      { label: "Galeria zdjęć", page: "galeria", icon: <Image size={18} />, desc: "Fotografie z wydarzeń" },
      { label: "Filmy", page: "filmy", icon: <Play size={18} />, desc: "Materiały wideo" },
    ]
  },
  {
    label: "Kontakt",
    children: [
      { label: "Dane kontaktowe", page: "kontakt", icon: <Phone size={18} />, desc: "Telefon, email, formularz" },
      { label: "Lokalizacja", page: "lokalizacja", icon: <MapPin size={18} />, desc: "Jak do nas dotrzeć" },
      { label: "Wesprzyj Fundację", page: "wsparcie", icon: <Heart size={18} />, desc: "Darowizny i wolontariat" },
    ]
  }
];

interface HeaderProps {
  navigateTo: (page: string) => void;
  currentPage: string;
}

export function Header({ navigateTo, currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <>
      {/* Top bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || currentPage !== "home"
          ? "bg-navy-900/98 shadow-2xl shadow-black/30 backdrop-blur-md"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}>
        {/* Upper info bar */}
        <div className={`border-b border-gold-500/20 transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs text-gold-300/70">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Phone size={11} /> +48 123 456 789</span>
              <span className="hidden sm:flex items-center gap-1"><Mail size={11} /> kontakt@atenyroztocza.pl</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => navigateTo("wsparcie")} className="bg-gold-500/20 hover:bg-gold-500/30 px-3 py-0.5 rounded-full text-gold-300 transition-colors flex items-center gap-1">
                <Heart size={11} /> Wesprzyj nas
              </button>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
            {/* Logo */}
            <button onClick={() => navigateTo("home")} className="flex items-center gap-3 group">
              <div className="relative">
                <div className={`bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>
                  <Landmark className="text-navy-900" size={isScrolled ? 20 : 24} />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-white leading-tight transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}>
                  Ateny Roztocza
                </span>
                <span className={`text-gold-400/80 font-cormorant italic transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"}`}>
                  Prawda · Dobro · Piękno
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => item.page ? navigateTo(item.page) : setActiveDropdown(activeDropdown === index ? null : index)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg
                      ${activeDropdown === index ? "text-gold-400 bg-white/5" : "text-white/90 hover:text-gold-300 hover:bg-white/5"}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`} />}
                  </button>

                  {/* Mega dropdown */}
                  {item.children && activeDropdown === index && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in-down" style={{ animationDuration: "0.2s" }}>
                      <div className="bg-navy-800/98 backdrop-blur-xl border border-gold-500/20 rounded-xl shadow-2xl shadow-black/40 p-2 min-w-[320px]">
                        <div className="px-3 py-2 border-b border-gold-500/10 mb-1">
                          <span className="text-xs text-gold-400/60 uppercase tracking-wider font-semibold">{item.label}</span>
                        </div>
                        {item.children.map((child, ci) => (
                          <button
                            key={ci}
                            onClick={() => { navigateTo(child.page); setActiveDropdown(null); }}
                            className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-gold-500/10 transition-all duration-150 group/item"
                          >
                            <div className="mt-0.5 text-gold-400/60 group-hover/item:text-gold-400 transition-colors">
                              {child.icon}
                            </div>
                            <div>
                              <div className="text-sm text-white/90 group-hover/item:text-gold-300 font-medium transition-colors">
                                {child.label}
                              </div>
                              {child.desc && (
                                <div className="text-xs text-white/40 mt-0.5 group-hover/item:text-white/60 transition-colors">
                                  {child.desc}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-navy-900 shadow-2xl overflow-y-auto">
            <div className="pt-20 pb-8 px-4">
              <div className="mb-6 px-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                    <Landmark className="text-navy-900" size={20} />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-lg">Ateny Roztocza</div>
                    <div className="text-gold-400/80 text-xs font-cormorant italic">Prawda · Dobro · Piękno</div>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
              </div>
              
              {navItems.map((item, index) => (
                <div key={index} className="mb-1">
                  <button
                    onClick={() => {
                      if (item.children) {
                        setMobileExpanded(mobileExpanded === index ? null : index);
                      } else if (item.page) {
                        navigateTo(item.page);
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-3 text-white/90 hover:text-gold-300 hover:bg-white/5 rounded-lg transition-all"
                  >
                    <span className="font-medium text-sm">{item.label}</span>
                    {item.children && <ChevronDown size={16} className={`transition-transform text-gold-400/50 ${mobileExpanded === index ? "rotate-180" : ""}`} />}
                  </button>
                  
                  {item.children && mobileExpanded === index && (
                    <div className="ml-3 pl-3 border-l border-gold-500/20 mb-2">
                      {item.children.map((child, ci) => (
                        <button
                          key={ci}
                          onClick={() => { navigateTo(child.page); setMobileMenuOpen(false); }}
                          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-white/70 hover:text-gold-300 hover:bg-white/5 rounded-lg transition-all"
                        >
                          <span className="text-gold-400/50">{child.icon}</span>
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 px-3">
                <button
                  onClick={() => { navigateTo("wsparcie"); setMobileMenuOpen(false); }}
                  className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all flex items-center justify-center gap-2"
                >
                  <Heart size={16} /> Wesprzyj Fundację
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
