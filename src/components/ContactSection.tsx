import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Phone, Mail, MapPin, Clock, Send, Heart } from "lucide-react";

export function ContactSection() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={ref} className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 30% 70%, rgba(201, 168, 60, 0.3), transparent 50%)`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gold-400/60 text-sm uppercase tracking-[0.3em] font-semibold">Kontakt</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">
            Skontaktuj się z nami
          </h2>
          <div className="mx-auto mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        </div>

        <div className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold-400" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Adres</h4>
                  <p className="text-white/50 text-sm mt-1">
                    Fundacja Ateny Roztocza<br />
                    ul. Roztoczańska 1<br />
                    22-400 Zamość, Roztocze
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold-400" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Telefon</h4>
                  <p className="text-white/50 text-sm mt-1">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gold-400" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Email</h4>
                  <p className="text-white/50 text-sm mt-1">kontakt@atenyroztocza.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold-400" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Godziny otwarcia</h4>
                  <p className="text-white/50 text-sm mt-1">
                    Pn - Pt: 9:00 - 17:00<br />
                    Sb: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Donation box */}
            <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/20 rounded-xl p-6 text-center">
              <Heart className="text-gold-400 mx-auto mb-3" size={28} />
              <h4 className="text-white font-serif text-lg font-bold mb-2">Wesprzyj Fundację</h4>
              <p className="text-white/50 text-sm mb-4">
                Twoja darowizna pomaga nam kontynuować misję promowania Prawdy, Dobra i Piękna.
              </p>
              <div className="bg-navy-800/80 rounded-lg p-3 text-sm">
                <div className="text-gold-400/60 text-xs uppercase tracking-wider mb-1">Numer konta</div>
                <div className="text-white font-mono text-sm">PL 12 3456 7890 1234 5678 9012 3456</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <h3 className="font-serif text-xl text-white font-bold mb-6">Napisz do nas</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-semibold block mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 outline-none transition-all text-sm"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-semibold block mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 outline-none transition-all text-sm"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-white/50 text-xs uppercase tracking-wider font-semibold block mb-2">Temat</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 outline-none transition-all text-sm"
                  placeholder="Temat wiadomości"
                />
              </div>

              <div className="mb-6">
                <label className="text-white/50 text-xs uppercase tracking-wider font-semibold block mb-2">Wiadomość</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 outline-none transition-all text-sm resize-none"
                  placeholder="Treść wiadomości..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 py-3.5 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-500 transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  "✓ Wiadomość wysłana!"
                ) : (
                  <>
                    <Send size={16} />
                    Wyślij wiadomość
                  </>
                )}
              </button>
            </form>

            {/* Map embed */}
            <div className="mt-6 rounded-xl overflow-hidden h-48 bg-navy-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d22.9!3d50.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722e4c0a7f4fb05%3A0x8e0b8b86e7e4e55c!2zWmFtb8WbxIc!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
