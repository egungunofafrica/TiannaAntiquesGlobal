import { Card } from "@/components/ui/card";
import { Building2, Briefcase, Globe, Award, ShieldCheck, Search } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="heading-services">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
              Comprehensive institutional-grade services for discerning clients worldwide
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Museum Collections */}
            <Card className="p-8 border-card-border hover-elevate" data-testid="card-service-museum">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-museum">
                Museum Collections
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-museum-description">
                Specialized sourcing for permanent and exhibition collections, with complete provenance documentation 
                and authentication.
              </p>
            </Card>

            {/* Corporate Art Programs */}
            <Card className="p-8 border-card-border hover-elevate" data-testid="card-service-corporate">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-corporate">
                Corporate Art Programs
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-corporate-description">
                Curated acquisitions for executive offices, lobbies, and corporate collections that reflect prestige 
                and refinement.
              </p>
            </Card>

            {/* Multinational Projects */}
            <Card className="p-8 border-card-border hover-elevate" data-testid="card-service-multinational">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-multinational">
                Multinational Projects
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-multinational-description">
                Large-scale sourcing for luxury developments, high-end retail spaces, and international hospitality 
                ventures.
              </p>
            </Card>

            {/* VIP Consultation Services */}
            <Card className="p-8 border-card-border hover-elevate" data-testid="card-service-vip">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-vip">
                VIP Consultation Services
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-vip-description">
                Personalized guidance from initial inquiry through acquisition, ensuring each piece meets exacting 
                institutional standards.
              </p>
            </Card>

            {/* Authentication & Provenance */}
            <Card className="p-8 border-card-border hover-elevate" data-testid="card-service-authentication">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-authentication">
                Authentication & Provenance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-authentication-description">
                Comprehensive documentation, condition reports, and expert authentication for all pieces in our 
                collection.
              </p>
            </Card>

            {/* Specialized Sourcing */}
            <Card className="p-8 border-card-border hover-elevate" data-testid="card-service-sourcing">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-sourcing">
                Specialized Sourcing
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-sourcing-description">
                Bespoke search services to locate specific periods, styles, or types of European decorative arts.
              </p>
            </Card>
          </div>

          {/* Online-Only Operations Notice */}
          <Card className="p-10 bg-card/50 border-primary/20" data-testid="card-online-only">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="heading-online-only">
                Online-Only Operations • B2B Exclusively
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-online-only-description">
                We operate exclusively online to serve our international institutional clientele efficiently. All consultations, 
                viewings, and transactions are conducted remotely with the highest level of professionalism.
              </p>
              <p className="text-sm text-muted-foreground italic" data-testid="text-online-only-clients">
                Serving museums, luxury retail developments, corporate collections, and multinational projects worldwide.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
