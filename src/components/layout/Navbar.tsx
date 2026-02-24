"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 h-20 items-center justify-between px-4">
        {/* Logo - Left */}
        <div className='flex justify-start'>
          <Link 
            href="/" 
            className="font-title text-xl font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            LUMINARY <span className="text-primary/70">LEARNING</span>
          </Link>
        </div>
        
        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
          <Link 
            href="/programmes" 
            className={`transition-colors ${
              isActive('/programmes') 
                ? 'text-primary' 
                : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Programmes
          </Link>
          <Link 
            href="/courses" 
            className={`transition-colors ${
              isActive('/courses') 
                ? 'text-primary' 
                : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Courses
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors ${
              isActive('/contact') 
                ? 'text-primary' 
                : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA - Right */}
        <div className='hidden md:flex justify-end'>
          <Button className="rounded-sm px-4 h-10 shadow-md w-fit">
            Start Learning
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden justify-end'>
          <button 
            onClick={toggleMenu}
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={closeMenu} />
      )}

      {/* Mobile Menu Slide-out */}
      <div className={`
        fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <span className="font-title text-lg font-bold text-primary">Menu</span>
            <button 
              onClick={closeMenu}
              className="p-1 text-foreground/60 hover:text-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <Link 
                href="/programmes" 
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive('/programmes') 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Programmes
              </Link>
              <Link 
                href="/courses" 
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive('/courses') 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Courses
              </Link>
              <Link 
                href="/contact" 
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-border/50 my-4" />

            {/* Quick Info */}
            <div className="space-y-3">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Get in touch
              </p>
              <a 
                href="mailto:hello@luminarylearning.com" 
                className="block text-sm text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                hello@luminarylearning.com
              </a>
              <a 
                href="tel:+254769403162" 
                className="block text-sm text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                +254 (769) 403-162
              </a>
            </div>
          </div>

          {/* CTA Button at Bottom */}
          <div className="pt-6 border-t border-border/50">
            <Button 
              className="w-full rounded-sm h-12 bg-primary hover:bg-primary/90"
              onClick={closeMenu}
            >
              Start Learning
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Join 10,000+ families
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

