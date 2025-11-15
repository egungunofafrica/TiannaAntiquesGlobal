import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const countries = [
  { name: "Dubai", flag: "🇦🇪", region: "Middle East" },
  { name: "USA", flag: "🇺🇸", region: "North America" },
  { name: "Italy", flag: "🇮🇹", region: "Europe" },
  { name: "Germany", flag: "🇩🇪", region: "Europe" },
  { name: "France", flag: "🇫🇷", region: "Europe" },
  { name: "Canada", flag: "🇨🇦", region: "North America" },
];

export function InternationalPresence() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Global Operations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by institutions and collectors across six countries
            </p>
          </div>

          <Card className="p-8 sm:p-12 border-card-border">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-md hover-elevate"
                  data-testid={`country-${country.name.toLowerCase()}`}
                >
                  <span className="text-5xl" role="img" aria-label={country.name}>
                    {country.flag}
                  </span>
                  <div className="text-center">
                    <p className="font-serif font-semibold text-foreground">
                      {country.name}
                    </p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {country.region}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground italic">
                Headquartered in Redbank Plains, Queensland, Australia
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
