import { useState } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { MissionSection } from "./components/MissionSection";
import { AboutFoundation } from "./components/AboutFoundation";
import { NewsSection } from "./components/NewsSection";
import { VideoSection } from "./components/VideoSection";
import { EventsSection } from "./components/EventsSection";
import { GallerySection } from "./components/GallerySection";
import { QuoteSection } from "./components/QuoteSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SubPage } from "./components/SubPage";

export function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage !== "home") {
    return (
      <div className="min-h-screen bg-cream-50">
        <Header navigateTo={navigateTo} currentPage={currentPage} />
        <SubPage page={currentPage} navigateTo={navigateTo} />
        <Footer navigateTo={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <HeroBanner navigateTo={navigateTo} />
      <MissionSection />
      <AboutFoundation navigateTo={navigateTo} />
      <QuoteSection />
      <NewsSection navigateTo={navigateTo} />
      <VideoSection />
      <EventsSection navigateTo={navigateTo} />
      <GallerySection />
      <ContactSection />
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
