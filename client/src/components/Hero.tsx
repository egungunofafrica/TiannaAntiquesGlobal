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
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2340&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight" data-testid="heading-hero">
            Curating History,
            <br />
            <span className="text-primary">Preserving Excellence</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-motto">
            International dealer specializing in premium European and Asian antiques
            for discerning collectors, museums, and institutions worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-hero-contact"
              className="bg-primary border border-primary-border"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-hero-gallery"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
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
