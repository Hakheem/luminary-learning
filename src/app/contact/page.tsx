import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Luminary Learning",
  description: "Get in touch with our team for a free consultation about your child's education.",
};

export default function ContactPage() {
  return (
    <main className="py-20 bg-gradient-to-b from-background to-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-sm shadow-lg border border-border/50">
          
          {/* Left Column - Contact Info  */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
                Get in Touch
              </span>
              <h1 className="font-title text-5xl font-black mb-6 leading-[1.1]">
                Let's <span className="text-primary">Talk.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Book your 30-minute chat to see how we can help your child thrive. No pressure, just a real conversation about their future.
              </p>
            </div>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email us</p>
                  <a href="mailto:hello@luminarylearning.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                    hello@luminarylearning.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Call us</p>
                  <a href="tel:+254769403162" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                    +254 (769) 403-162
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Locations</p>
                  <p className="text-lg font-bold text-foreground">London • Nairobi • Singapore</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-4 rounded-sm border border-border/50">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Typically replies within 2 hours
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

