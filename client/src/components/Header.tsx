import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="button-nav-about"
              className="text-sm font-medium"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("gallery")}
              data-testid="button-nav-gallery"
              className="text-sm font-medium"
            >
              Gallery
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              data-testid="button-nav-services"
              className="text-sm font-medium"
            >
              Services
            </Button>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              data-testid="button-nav-contact"
              className="text-sm font-medium ml-2"
            >
              Contact
            </Button>
          </nav>

          <Button
            variant="default"
            onClick={() => scrollToSection("contact")}
            data-testid="button-mobile-contact"
            className="md:hidden text-sm"
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
