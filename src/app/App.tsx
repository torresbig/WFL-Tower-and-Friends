import { Hero } from "./components/Hero";
import { ImageSlideshow } from "./components/ImageSlideshow";
import { FactsSection } from "./components/FactsSection";
import { CTASection } from "./components/CTASection";
import { VideoSection } from "./components/VideoSection";
import { InfoAccordion } from "./components/InfoAccordion"; // Neu hinzugefügt
import { StorySection } from "./components/StorySection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section mit Logo und Team Name */}
      <Hero />

      {/* Video Section */}
      <VideoSection variant="whatis"/>

      {/* Einklappbare Infos */}
      <InfoAccordion />

      {/* Thomas' Geschichte direkt unter der Slideshow */}
      <StorySection />

      {/* Slideshow */}
      <ImageSlideshow />

      {/* Fakten zu Wings for Life */}
      <FactsSection />

      {/* CTA - Erste Einladung */}
      <CTASection variant="secondary" />

      {/* Video Section */}
      <VideoSection variant="mission"/>

      {/* CTA - Zweite Einladung */}
      <CTASection variant="secondary" />

      {/* Haupt-CTA - Finale Einladung */}
      <CTASection variant="primary" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
