import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark luxury background with antique imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/attached_assets/french_empire_bronze_ddd9e64e_1763209187601.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight" data-testid="heading-hero">
            Tianna's Luxury Antiques
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-motto">
            Curating Exceptional European Antiques for Distinguished Institutions Worldwide
          </p>
          
          <p className="text-lg text-white/80 font-light max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Exclusive supplier to museums, corporate collections, and multinational projects
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-hero-contact"
              className="bg-primary hover:bg-primary/90 border border-primary-border text-lg px-8"
            >
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-hero-gallery"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
            >
              View Collection
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
