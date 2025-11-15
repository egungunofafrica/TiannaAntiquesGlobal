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
              <p className="text-sm text-muted-foreground leading-relaxed">
                International dealer specializing in premium European and Asian antiques 
                for museums, companies, and collectors worldwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Antique Acquisition</li>
                <li>Collection Supply</li>
                <li>Authentication & Appraisal</li>
                <li>International Shipping</li>
              </ul>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:michelletianna616@gmail.com" className="hover:text-primary transition-colors">
                    michelletianna616@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:0434654261" className="hover:text-primary transition-colors">
                    0434 654 261
                  </a>
                </li>
                <li>Redbank Plains, QLD, Australia</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Michelle Tianna Antiques. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Serving Dubai • USA • Italy • Germany • France • Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
