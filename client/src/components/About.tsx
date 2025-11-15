import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Globe2, Award, Building2 } from "lucide-react";
import founderImage from "@assets/Screenshot 2025-11-15 at 7.15.35 AM_1763209004031.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Michelle Tianna
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CEO & Founder
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-md transform rotate-3" />
                <Avatar className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-md border-4 border-card">
                  <AvatarImage 
                    src={founderImage} 
                    alt="Michelle Tianna - CEO & Founder"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-serif">MT</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  A Global Vision for Timeless Treasures
                </h3>
                <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
                  <p>
                    With extensive experience across international markets, Michelle Tianna has established herself 
                    as a trusted name in the antiques industry. Her expertise spans European and Asian antiques, 
                    with a particular focus on French Empire bronzes, Chinese porcelain, and ornate timepieces.
                  </p>
                  <p>
                    Based in Redbank Plains, Queensland, Australia, Michelle serves a distinguished clientele 
                    including museums, corporations, and premium retail establishments across multiple continents. 
                    Her keen eye for authenticity and quality has made her the go-to specialist for institutions 
                    seeking to acquire pieces of historical significance.
                  </p>
                  <p>
                    Michelle's approach combines traditional expertise with modern business practices, ensuring 
                    seamless transactions and impeccable provenance documentation. Whether sourcing rare pieces 
                    for private collections or supplying curated selections for commercial display, her commitment 
                    to excellence remains unwavering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-8 text-center hover-elevate">
              <Globe2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2">International Reach</h4>
              <p className="text-sm text-muted-foreground">
                Serving clients across 6+ countries with proven expertise
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-elevate">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2">Trusted Expertise</h4>
              <p className="text-sm text-muted-foreground">
                Specialized knowledge in European and Asian antiques
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-elevate">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2">Institutional Partner</h4>
              <p className="text-sm text-muted-foreground">
                Working with museums, companies, and premium retailers
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
