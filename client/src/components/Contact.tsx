import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="heading-contact">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
              Ready to discuss your antique needs? Contact Michelle Tianna today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="p-10 border-card-border" data-testid="card-contact-info">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-8" data-testid="heading-contact-info">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1" data-testid="text-email-label">
                      Personal Email
                    </p>
                    <a
                      href="mailto:michelletianna616@gmail.com"
                      className="text-base text-primary hover:underline"
                      data-testid="link-email"
                    >
                      michelletianna616@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1" data-testid="text-email-note">
                      I respond to all emails
                    </p>
                  </div>
                </div>

                {/* Texting Number */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1" data-testid="text-phone-label">
                      Phone & Text
                    </p>
                    <a
                      href="tel:0434654261"
                      className="text-base text-primary hover:underline"
                      data-testid="link-phone"
                    >
                      0434 654 261
                    </a>
                    <p className="text-xs text-muted-foreground mt-1" data-testid="text-phone-note-1">
                      Available for calls and texts
                    </p>
                    <p className="text-xs text-accent mt-1 font-medium" data-testid="text-phone-note-2">
                      For business purposes, calls are welcome
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1" data-testid="text-whatsapp-label">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/61489925104"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-primary hover:underline"
                      data-testid="link-whatsapp"
                    >
                      0489 925 104
                    </a>
                    <p className="text-xs text-muted-foreground mt-1" data-testid="text-whatsapp-note">
                      WhatsApp only - preferred for business inquiries
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pt-4 border-t border-border">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1" data-testid="text-location-label">
                      Location
                    </p>
                    <p className="text-base text-foreground/80" data-testid="text-location-city">
                      Redbank Plains, Queensland
                    </p>
                    <p className="text-base text-foreground/80" data-testid="text-location-country">
                      Australia
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-10 border-card-border bg-card" data-testid="card-contact-methods">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="heading-contact-methods">
                Preferred Contact Methods
              </h3>
              <p className="text-sm text-muted-foreground mb-8" data-testid="text-contact-methods-description">
                Choose the communication method that works best for you
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:michelletianna616@gmail.com"
                  className="flex items-start gap-3 w-full p-4 rounded-md border border-border bg-background hover-elevate active-elevate-2 transition-colors"
                  data-testid="button-contact-email"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Send an Email</div>
                    <div className="text-xs text-muted-foreground">Personal email - I respond to all</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/61489925104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 w-full p-4 rounded-md border border-border bg-background hover-elevate active-elevate-2 transition-colors"
                  data-testid="button-contact-whatsapp"
                >
                  <MessageSquare className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">WhatsApp Message</div>
                    <div className="text-xs text-muted-foreground">Business inquiries preferred</div>
                  </div>
                </a>

                <a 
                  href="tel:0434654261"
                  className="flex items-start gap-3 w-full p-4 rounded-md border border-border bg-background hover-elevate active-elevate-2 transition-colors"
                  data-testid="button-contact-phone"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Call or Text</div>
                    <div className="text-xs text-muted-foreground">Available for business calls</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic text-center" data-testid="text-contact-footer">
                  All inquiries are confidential and will receive a prompt response
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
