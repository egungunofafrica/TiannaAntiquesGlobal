import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <Logo className="mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-description">
                International dealer specializing in premium European and Asian antiques 
                for museums, companies, and collectors worldwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4" data-testid="heading-footer-services">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li data-testid="text-footer-service-acquisition">Antique Acquisition</li>
                <li data-testid="text-footer-service-supply">Collection Supply</li>
                <li data-testid="text-footer-service-authentication">Authentication & Appraisal</li>
                <li data-testid="text-footer-service-shipping">International Shipping</li>
              </ul>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4" data-testid="heading-footer-contact">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:michelletianna616@gmail.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">
                    michelletianna616@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:0434654261" className="hover:text-primary transition-colors" data-testid="link-footer-phone">
                    0434 654 261
                  </a>
                </li>
                <li data-testid="text-footer-location">Redbank Plains, QLD, Australia</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
                © {new Date().getFullYear()} Tianna's Luxury Antiques. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground" data-testid="text-footer-countries">
                Serving Dubai • USA • Italy • Germany • France • Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
