import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-sm overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cta.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
            />
          </div>
          
          <div className="relative z-10 p-12 lg:p-16 text-center text-white max-w-3xl mx-auto">
            <h2 className="font-title text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
              Ready to Transform Your Child's Future?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              No rigid schedules. No one-size-fits-all. Just world-class education that actually fits your life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="rounded-sm px-8 bg-white text-primary hover:bg-white hover: transition-all group shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-sm px-8 border-2 border-white/30 text-white bg-white/10"
              >
                Book Free Consultation
              </Button>
            </div>
            
            <p className="text-sm text-white/90 my-4">
              10,000+ families • 98% satisfaction • Cancel anytime
            </p>
            
        
          </div>
        </div>
      </div>
    </section>
  );
}

