import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="font-title text-2xl font-bold tracking-tighter mb-4">
              LUMINARY<span className="text-accent">LEARNING</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Illuminating potential through flexible, expert-led homeschooling and future-ready skills for the next generation.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link href="#" className="h-9 w-9 rounded-sm bg-primary/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4 text-primary" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-sm bg-primary/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4 text-primary" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-sm bg-primary/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-sm bg-primary/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="md:col-span-3">
            <h4 className="font-title text-lg font-bold mb-5 text-foreground">Programmes</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  IGCSE Excellence
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Montessori Path
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Value-Add Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Custom Paths
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-title text-lg font-bold mb-5 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

       {/* Contact & Newsletter */}
<div className="md:col-span-3">
  <h4 className="font-title text-lg font-bold mb-5 text-foreground">Get in Touch</h4>
  
  <div className="space-y-3 mb-6">
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
      <a 
        href="mailto:hello@luminarylearning.com" 
        className="hover:text-primary transition-colors"
      >
        hello@luminarylearning.com
      </a>
    </div>
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
      <a 
        href="tel:+254769403162" 
        className="hover:text-primary transition-colors"
      >
        +254 (769) 403-162
      </a>
    </div>
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
      <span>London • Nairobi • Singapore</span>
    </div>
  </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Luminary Learning. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

