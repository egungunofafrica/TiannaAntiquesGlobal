import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your antique needs? Contact Michelle Tianna today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="p-10 border-card-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Personal Email
                    </p>
                    <a
                      href="mailto:michelletianna616@gmail.com"
                      className="text-base text-primary hover:underline"
                      data-testid="link-email"
                    >
                      michelletianna616@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
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
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Phone & Text
                    </p>
                    <a
                      href="tel:0434654261"
                      className="text-base text-primary hover:underline"
                      data-testid="link-phone"
                    >
                      0434 654 261
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available for calls and texts
                    </p>
                    <p className="text-xs text-accent mt-1 font-medium">
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
                    <p className="text-sm font-semibold text-foreground mb-1">
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
                    <p className="text-xs text-muted-foreground mt-1">
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
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Location
                    </p>
                    <p className="text-base text-foreground/80">
                      Redbank Plains, Queensland
                    </p>
                    <p className="text-base text-foreground/80">
                      Australia
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-10 border-card-border bg-card">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Preferred Contact Methods
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Choose the communication method that works best for you
              </p>

              <div className="space-y-4">
                <Button
                  className="w-full justify-start text-left h-auto py-4 px-6"
                  variant="outline"
                  asChild
                  data-testid="button-contact-email"
                >
                  <a href="mailto:michelletianna616@gmail.com">
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Send an Email</div>
                      <div className="text-xs text-muted-foreground">Personal email - I respond to all</div>
                    </div>
                  </a>
                </Button>

                <Button
                  className="w-full justify-start text-left h-auto py-4 px-6"
                  variant="outline"
                  asChild
                  data-testid="button-contact-whatsapp"
                >
                  <a href="https://wa.me/61489925104" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">WhatsApp Message</div>
                      <div className="text-xs text-muted-foreground">Business inquiries preferred</div>
                    </div>
                  </a>
                </Button>

                <Button
                  className="w-full justify-start text-left h-auto py-4 px-6"
                  variant="outline"
                  asChild
                  data-testid="button-contact-phone"
                >
                  <a href="tel:0434654261">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Call or Text</div>
                      <div className="text-xs text-muted-foreground">Available for business calls</div>
                    </div>
                  </a>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic text-center">
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
