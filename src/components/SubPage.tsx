import { ChevronRight, Home, BookOpen, Users, FileText, Church, Star, Heart, Calendar, Image, Play, MapPin, Phone, GraduationCap, Mic, Video, Award, Globe, Scroll } from "lucide-react";

interface SubPageProps {
  page: string;
  navigateTo: (page: string) => void;
}

interface PageContent {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  breadcrumb: string[];
  content: React.ReactNode;
}

function getPageContent(page: string, navigateTo: (page: string) => void): PageContent {
  const pages: Record<string, PageContent> = {
    "o-fundacji": {
      title: "O Fundacji",
      subtitle: "Historia i misja Fundacji Ateny Roztocza",
      icon: <Home size={24} />,
      breadcrumb: ["Fundacja", "O Fundacji"],
      content: (
        <div className="prose prose-lg max-w-none">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-navy-700 leading-relaxed text-lg">
                <span className="font-serif text-3xl text-gold-600 float-left mr-3 mt-1 leading-none">F</span>
                undacja "Ateny Roztocza" to instytucja powołana z inicjatywy ks. prof. dr. hab. Tadeusza Guza,
                wybitnego polskiego filozofa i teologa. Jej celem jest budowanie ośrodka kultury i myśli,
                który łączy tradycję filozofii klasycznej z dynamicznym zaangażowaniem w kształtowanie
                współczesnej kultury duchowej i intelektualnej.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Nazwa "Ateny Roztocza" odwołuje się do starożytnych Aten jako kolebki filozofii europejskiej,
                przenosząc tę ideę na grunt pięknego regionu Roztocza. Fundacja pragnie uczynić z tego
                miejsca centrum myśli filozoficznej, teologicznej i kulturalnej, otwarte dla wszystkich
                poszukujących prawdy.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Działalność Fundacji obejmuje organizację wykładów, konferencji naukowych, rekolekcji,
                spotkań autorskich oraz wydarzeń kulturalnych. Prowadzimy również działalność wydawniczą,
                publikując prace naukowe i popularnonaukowe z zakresu filozofii, teologii i kultury.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <BookOpen size={20} />, title: "Edukacja", desc: "Wykłady, seminaria i kursy filozoficzne" },
                  { icon: <Church size={20} />, title: "Duchowość", desc: "Rekolekcje, dni skupienia, modlitwa" },
                  { icon: <Users size={20} />, title: "Wspólnota", desc: "Budowanie wspólnoty wokół wartości" },
                  { icon: <Globe size={20} />, title: "Kultura", desc: "Wydarzenia artystyczne i kulturalne" },
                ].map((item, i) => (
                  <div key={i} className="bg-navy-50 rounded-xl p-4 flex gap-3 items-start">
                    <div className="text-gold-500">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-navy-800 text-sm">{item.title}</h4>
                      <p className="text-navy-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Ośrodek"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover mb-4"
              />
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center">
                <Star className="text-gold-500 mx-auto mb-2" size={24} />
                <p className="font-cormorant text-lg text-navy-700 italic">
                  "Prawda, Dobro i Piękno - fundamenty ludzkiej egzystencji"
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "biografia": {
      title: "Ks. Prof. Tadeusz Guz",
      subtitle: "Życiorys i działalność naukowa",
      icon: <BookOpen size={24} />,
      breadcrumb: ["Ks. Prof. Tadeusz Guz", "Biografia"],
      content: (
        <div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Ks. prof. Tadeusz Guz"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="mt-4 bg-navy-800 rounded-xl p-4 text-center">
                <h4 className="text-gold-400 font-serif font-bold text-lg">Ks. prof. dr hab. Tadeusz Guz</h4>
                <p className="text-white/50 text-sm mt-1">Profesor filozofii, KUL</p>
                <p className="text-white/30 text-xs mt-1">Założyciel Fundacji Ateny Roztocza</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-navy-700 leading-relaxed text-lg">
                <span className="font-serif text-3xl text-gold-600 float-left mr-3 mt-1 leading-none">K</span>
                s. prof. dr hab. Tadeusz Guz jest wybitnym polskim filozofem i teologiem,
                profesorem nauk humanistycznych, związanym z Katolickim Uniwersytetem Lubelskim
                Jana Pawła II. Specjalizuje się w filozofii klasycznej, metafizyce oraz filozofii
                prawa i polityki.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Urodził się na Roztoczu, z którym jest głęboko związany duchowo i intelektualnie.
                Studia filozoficzne i teologiczne odbył na KUL-u oraz na uniwersytetach w Niemczech,
                gdzie pogłębiał swoją wiedzę z zakresu filozofii niemieckiej, w szczególności
                myśli Hegla, Kanta i współczesnej filozofii niemieckiej.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Jest autorem licznych publikacji naukowych z zakresu metafizyki, filozofii prawa,
                filozofii kultury oraz teologii. Prowadzi intensywną działalność dydaktyczną i
                popularyzatorską, wygłaszając wykłady zarówno w środowisku akademickim, jak i
                na forum publicznym.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Jako kapłan łączy głęboką refleksję filozoficzną z duchowością chrześcijańską,
                ukazując nierozerwalne więzi między rozumem a wiarą. Jego kazania i homilie
                cechuje niezwykła głębia teologiczna i filozoficzna.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Publikacje", value: "150+", icon: <FileText size={16} /> },
                  { label: "Wykłady", value: "500+", icon: <GraduationCap size={16} /> },
                  { label: "Konferencje", value: "80+", icon: <Mic size={16} /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-gold-50 border border-gold-200 rounded-xl p-4 text-center">
                    <div className="text-gold-500 flex justify-center mb-1">{stat.icon}</div>
                    <div className="font-serif text-2xl font-bold text-navy-800">{stat.value}</div>
                    <div className="text-navy-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* YouTube section */}
          <div className="bg-navy-800 rounded-2xl p-8 mt-8">
            <h3 className="font-serif text-2xl text-white font-bold mb-4 text-center">Wykłady i wystąpienia</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Wykład"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/jNQXAC9IVRw"
                  title="Wykład"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    "transcendentalia": {
      title: "Transcendentalia",
      subtitle: "Filozofia Prawdy, Dobra i Piękna",
      icon: <Star size={24} />,
      breadcrumb: ["Prawda · Dobro · Piękno", "Transcendentalia"],
      content: (
        <div className="space-y-12">
          <p className="text-navy-700 leading-relaxed text-lg max-w-3xl">
            Transcendentalia - Prawda (Verum), Dobro (Bonum) i Piękno (Pulchrum) - to fundamentalne
            właściwości bytu, które w tradycji filozofii klasycznej stanowią nierozerwalne aspekty
            każdej istniejącej rzeczywistości. Fundacja Ateny Roztocza czyni z nich fundament
            swojej działalności.
          </p>
          
          {[
            { latin: "Verum", polish: "Prawda", color: "blue", icon: <Star size={32} />,
              text: "W tradycji arystotelesowsko-tomistycznej prawda jest zgodnością umysłu z rzeczywistością (adaequatio intellectus et rei). Poszukiwanie prawdy jest najgłębszym dążeniem ludzkiego rozumu, a jej odkrywanie prowadzi do poznania Boga jako Prawdy Najwyższej." },
            { latin: "Bonum", polish: "Dobro", color: "red", icon: <Heart size={32} />,
              text: "Dobro w filozofii klasycznej jest tym, co doskonali byt i prowadzi go ku pełni. Każde istnienie jest dobre, ponieważ uczestniczy w Dobru Najwyższym - w Bogu. Fundacja promuje dobro moralne, społeczne i duchowe jako niezbędne elementy autentycznego ludzkiego rozwoju." },
            { latin: "Pulchrum", polish: "Piękno", color: "amber", icon: <Globe size={32} />,
              text: "Piękno jest blaskiem prawdy i dobra. W tradycji klasycznej piękno charakteryzuje się integralnością, proporcją i jasnością (integritas, proportio, claritas). Piękno natury, sztuki i liturgii otwiera duszę na Boga i przemienia człowieka od wewnątrz." },
          ].map((item, i) => (
            <div key={i} className={`grid md:grid-cols-5 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={`md:col-span-2 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="bg-navy-800 rounded-2xl p-8 text-center">
                  <div className="text-gold-400 mb-3 flex justify-center">{item.icon}</div>
                  <div className="font-cormorant text-4xl text-gold-300/60 italic mb-1">{item.latin}</div>
                  <div className="font-serif text-3xl text-white font-bold">{item.polish}</div>
                </div>
              </div>
              <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-navy-600 leading-relaxed text-lg">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    "wiadomosci": {
      title: "Wiadomości",
      subtitle: "Najnowsze aktualności z życia Fundacji",
      icon: <FileText size={24} />,
      breadcrumb: ["Aktualności", "Wiadomości"],
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Filozofia klasyczna wobec wyzwań współczesności", date: "15 Sty 2025", cat: "Wykład", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop" },
            { title: "Międzynarodowa Konferencja o Transcendentaliach", date: "8 Sty 2025", cat: "Konferencja", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=250&fit=crop" },
            { title: 'Nowa publikacja naukowa', date: "2 Sty 2025", cat: "Publikacja", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop" },
            { title: "Koncert Bożonarodzeniowy", date: "20 Gru 2024", cat: "Kultura", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=250&fit=crop" },
            { title: "Rekolekcje adwentowe", date: "10 Gru 2024", cat: "Duchowość", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" },
            { title: "Spotkanie autorskie z ks. prof. Guzem", date: "1 Gru 2024", cat: "Spotkanie", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-gold-500 text-navy-900 text-xs font-bold px-2 py-0.5 rounded-full">{item.cat}</span>
              </div>
              <div className="p-5">
                <span className="text-navy-400 text-xs">{item.date}</span>
                <h3 className="font-serif text-lg font-bold text-navy-800 mt-1 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                <p className="text-navy-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    "wydarzenia": {
      title: "Wydarzenia",
      subtitle: "Kalendarz wydarzeń Fundacji",
      icon: <Calendar size={24} />,
      breadcrumb: ["Aktualności", "Wydarzenia"],
      content: (
        <div className="space-y-4">
          {[
            { day: "25", month: "STY", title: "Wykład: Metafizyka bytu", time: "18:00", loc: "Ośrodek Kultury i Myśli" },
            { day: "02", month: "LUT", title: "Konferencja: Prawda w filozofii", time: "10:00-17:00", loc: "Aula im. Jana Pawła II" },
            { day: "14", month: "LUT", title: "Rekolekcje wielkopostne", time: "09:00-15:00", loc: "Kaplica Ośrodka" },
            { day: "01", month: "MAR", title: "Spotkanie autorskie", time: "17:00", loc: "Biblioteka Ośrodka" },
            { day: "15", month: "MAR", title: "Koncert muzyki klasycznej", time: "19:00", loc: "Sala koncertowa" },
            { day: "22", month: "MAR", title: "Seminarium filozoficzne", time: "14:00", loc: "Sala seminaryjna" },
          ].map((ev, i) => (
            <div key={i} className="flex items-center gap-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 cursor-pointer group">
              <div className="w-16 h-16 bg-navy-800 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-gold-400 text-xl font-serif font-bold leading-none">{ev.day}</span>
                <span className="text-gold-300/60 text-xs font-semibold">{ev.month}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-navy-800 group-hover:text-gold-600 transition-colors">{ev.title}</h3>
                <div className="flex gap-4 text-navy-400 text-sm mt-1">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {ev.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {ev.loc}</span>
                </div>
              </div>
              <ChevronRight className="text-navy-300 group-hover:text-gold-500 transition-colors" size={20} />
            </div>
          ))}
        </div>
      ),
    },
    "galeria": {
      title: "Galeria zdjęć",
      subtitle: "Fotografie z wydarzeń i życia Fundacji",
      icon: <Image size={24} />,
      breadcrumb: ["Aktualności", "Galeria"],
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
          ].map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-all flex items-center justify-center">
                <Image className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    "kontakt": {
      title: "Kontakt",
      subtitle: "Skontaktuj się z Fundacją Ateny Roztocza",
      icon: <Phone size={24} />,
      breadcrumb: ["Kontakt", "Dane kontaktowe"],
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-serif text-xl text-navy-800 font-bold mb-4">Dane kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex gap-3"><MapPin className="text-gold-500 flex-shrink-0" size={18} /><div><strong className="text-navy-800">Adres:</strong><br/><span className="text-navy-500">Fundacja Ateny Roztocza, ul. Roztoczańska 1, 22-400 Zamość</span></div></div>
                <div className="flex gap-3"><Phone className="text-gold-500 flex-shrink-0" size={18} /><div><strong className="text-navy-800">Telefon:</strong><br/><span className="text-navy-500">+48 123 456 789</span></div></div>
                <div className="flex gap-3"><FileText className="text-gold-500 flex-shrink-0" size={18} /><div><strong className="text-navy-800">Email:</strong><br/><span className="text-navy-500">kontakt@atenyroztocza.pl</span></div></div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d22.9!3d50.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722e4c0a7f4fb05%3A0x8e0b8b86e7e4e55c!2zWmFtb8WbxIc!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Mapa"
            />
          </div>
        </div>
      ),
    },
    "wsparcie": {
      title: "Wesprzyj Fundację",
      subtitle: "Pomóż nam kontynuować naszą misję",
      icon: <Heart size={24} />,
      breadcrumb: ["Kontakt", "Wesprzyj Fundację"],
      content: (
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="text-gold-500 mx-auto mb-4" size={48} />
          <p className="text-navy-600 leading-relaxed text-lg mb-8">
            Fundacja Ateny Roztocza realizuje swoją misję dzięki wsparciu ludzi dobrej woli.
            Twoja darowizna pomaga nam organizować wykłady, konferencje, wydawać publikacje
            i utrzymywać Ośrodek Kultury i Myśli jako miejsce spotkania z Prawdą, Dobrem i Pięknem.
          </p>
          <div className="bg-navy-800 rounded-2xl p-8 mb-8">
            <h3 className="text-gold-400 font-serif text-xl font-bold mb-4">Dane do przelewu</h3>
            <div className="space-y-3 text-white/70">
              <p><strong className="text-white">Fundacja Ateny Roztocza</strong></p>
              <p>ul. Roztoczańska 1, 22-400 Zamość</p>
              <div className="bg-white/5 rounded-lg p-4 mt-4">
                <span className="text-gold-400/60 text-xs uppercase tracking-wider block mb-1">Numer konta bankowego</span>
                <span className="text-white font-mono text-lg">PL 12 3456 7890 1234 5678 9012 3456</span>
              </div>
              <p className="text-sm">Tytuł przelewu: Darowizna na cele statutowe</p>
            </div>
          </div>
          <p className="text-navy-500 text-sm">
            Fundacja posiada status organizacji pożytku publicznego. Darowizny można odliczyć od dochodu.
          </p>
        </div>
      ),
    },
  };

  // Default page for unmapped routes
  const defaultPage: PageContent = {
    title: page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, ' '),
    subtitle: "Strona w przygotowaniu",
    icon: <FileText size={24} />,
    breadcrumb: [page],
    content: (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="text-gold-500" size={32} />
        </div>
        <h3 className="font-serif text-2xl text-navy-800 font-bold mb-3">Strona w przygotowaniu</h3>
        <p className="text-navy-500 max-w-md mx-auto mb-6">
          Ta sekcja jest obecnie w przygotowaniu. Zapraszamy wkrótce po aktualizację treści.
        </p>
        <button
          onClick={() => navigateTo("home")}
          className="bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-700 transition-colors"
        >
          Wróć na stronę główną
        </button>
      </div>
    ),
  };

  return pages[page] || defaultPage;
}

export function SubPage({ page, navigateTo }: SubPageProps) {
  const content = getPageContent(page, navigateTo);
  // Mark some icons as used to avoid lint warnings
  void Award; void Scroll; void Video; void Play;

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <div className="bg-navy-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(201, 168, 60, 0.4), transparent 60%)`,
        }} />
        <div className="absolute top-20 left-8 w-32 h-32 border-t border-l border-gold-400/10 rounded-tl-lg" />
        <div className="absolute bottom-4 right-8 w-24 h-24 border-b border-r border-gold-400/10 rounded-br-lg" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <button onClick={() => navigateTo("home")} className="hover:text-gold-300 transition-colors flex items-center gap-1">
              <Home size={14} /> Strona główna
            </button>
            {content.breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} />
                <span className={i === content.breadcrumb.length - 1 ? "text-gold-400" : ""}>{item}</span>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center text-gold-400">
              {content.icon}
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">{content.title}</h1>
              <p className="text-gold-300/60 font-cormorant italic text-lg mt-1">{content.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {content.content}
      </div>
    </div>
  );
}
