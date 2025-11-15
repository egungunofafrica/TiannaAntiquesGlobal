import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const countries = [
  { name: "Dubai", region: "Middle East" },
  { name: "USA", region: "North America" },
  { name: "Italy", region: "Europe" },
  { name: "Germany", region: "Europe" },
  { name: "France", region: "Europe" },
  { name: "Canada", region: "North America" },
];

export function InternationalPresence() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="heading-global-operations">
              Global Operations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-global-operations-description">
              Trusted by institutions and collectors across six countries
            </p>
          </div>

          <Card className="p-8 sm:p-12 border-card-border" data-testid="card-global-operations">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-md hover-elevate"
                  data-testid={`country-${country.name.toLowerCase()}`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif font-semibold text-foreground" data-testid={`text-country-${country.name.toLowerCase()}`}>
                      {country.name}
                    </p>
                    <Badge variant="secondary" className="mt-2 text-xs" data-testid={`badge-region-${country.name.toLowerCase()}`}>
                      {country.region}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground italic" data-testid="text-headquarters-location">
                Headquartered in Redbank Plains, Queensland, Australia
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
