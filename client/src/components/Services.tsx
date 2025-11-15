import { Card } from "@/components/ui/card";
import { ShoppingBag, Package, Building, Store } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive antique acquisition and supply services for institutional and commercial clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Acquiring Service */}
            <Card className="p-10 border-card-border hover-elevate">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-md">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Acquiring Antiques
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Sourcing Excellence
                  </p>
                </div>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed mb-6">
                We specialize in sourcing exceptional antique pieces from established dealers, auctions, 
                and private collections worldwide. Our extensive network and deep market knowledge ensure 
                access to the finest European and Asian antiques.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Authentication and provenance verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Competitive pricing and negotiation expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure international shipping and customs handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Comprehensive documentation and certification</span>
                </li>
              </ul>
            </Card>

            {/* Supplying Service */}
            <Card className="p-10 border-card-border hover-elevate">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-md">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Supplying Collections
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Curated Solutions
                  </p>
                </div>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed mb-6">
                We provide carefully curated antique collections tailored to the unique needs of museums, 
                corporate offices, and retail establishments. Each piece is selected to enhance your space 
                and tell a compelling story.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Custom collection curation for specific themes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Flexible leasing and purchase options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Installation and display consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Ongoing maintenance and conservation guidance</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Client Types */}
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-8 text-center border-card-border hover-elevate">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2">Companies</h4>
              <p className="text-sm text-muted-foreground">
                Corporate offices and headquarters seeking distinguished decor
              </p>
            </Card>
            
            <Card className="p-8 text-center border-card-border hover-elevate">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2">Museums</h4>
              <p className="text-sm text-muted-foreground">
                Cultural institutions requiring authenticated historical pieces
              </p>
            </Card>
            
            <Card className="p-8 text-center border-card-border hover-elevate">
              <Store className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-semibold mb-2">Malls</h4>
              <p className="text-sm text-muted-foreground">
                Retail centers seeking elegant showpieces and displays
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
