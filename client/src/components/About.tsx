import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Globe2, Award, Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="heading-about">
              About Michelle Tianna
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-founder-title">
              CEO & Founder
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-md transform rotate-3" />
                <Avatar className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-md border-4 border-card" data-testid="img-founder-profile">
                  <AvatarImage 
                    src="/attached_assets/Screenshot 2025-11-15 at 7.15.35 AM_1763211208830.png" 
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
                <h3 className="font-serif text-3xl font-semibold text-foreground mb-4" data-testid="heading-vision">
                  A Global Vision for Timeless Treasures
                </h3>
                <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
                  <p data-testid="text-bio-paragraph-1">
                    With extensive experience across international markets, Michelle Tianna has established herself 
                    as a trusted name in the antiques industry. Her expertise spans European and Asian antiques, 
                    with a particular focus on French Empire bronzes, Chinese porcelain, and ornate timepieces.
                  </p>
                  <p data-testid="text-bio-paragraph-2">
                    Based in Redbank Plains, Queensland, Australia, Michelle serves a distinguished clientele 
                    including museums, corporations, and premium retail establishments across multiple continents. 
                    Her keen eye for authenticity and quality has made her the go-to specialist for institutions 
                    seeking to acquire pieces of historical significance.
                  </p>
                  <p data-testid="text-bio-paragraph-3">
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
            <Card className="p-8 text-center hover-elevate" data-testid="card-credential-reach">
              <Globe2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2" data-testid="heading-international-reach">International Reach</h4>
              <p className="text-sm text-muted-foreground" data-testid="text-international-reach-description">
                Serving clients across 6+ countries with proven expertise
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-elevate" data-testid="card-credential-expertise">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2" data-testid="heading-trusted-expertise">Trusted Expertise</h4>
              <p className="text-sm text-muted-foreground" data-testid="text-trusted-expertise-description">
                Specialized knowledge in European and Asian antiques
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-elevate" data-testid="card-credential-partner">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2" data-testid="heading-institutional-partner">Institutional Partner</h4>
              <p className="text-sm text-muted-foreground" data-testid="text-institutional-partner-description">
                Working with museums, companies, and premium retailers
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
