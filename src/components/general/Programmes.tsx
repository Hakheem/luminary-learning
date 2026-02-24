import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Baby, Zap, ArrowRight } from "lucide-react";

const programmes = [
  {
    title: "IGCSE Excellence",
    desc: "Rigorous preparation for Cambridge & Edexcel exams. Science, Commerce, and Humanities.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    tag: "Ages 14-16",
    gradient: "from-primary/20 to-transparent"
  },
  {
    title: "Montessori Path",
    desc: "Child-led learning focusing on independence, empathy, and natural development.",
    icon: <Baby className="h-8 w-8 text-primary" />,
    tag: "Ages 3-12",
    gradient: "from-accent/20 to-transparent"
  },
  {
    title: "Value-Add Skills",
    desc: "Future-proof skills including Coding, Graphic Design, and Financial Literacy.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    tag: "All Ages",
    gradient: "from-primary/20 via-accent/10 to-transparent"
  }
];

export default function Programmes() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            What We Offer
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Learning Paths That
            <span className="text-primary block mt-2">Actually Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
             Distinct approaches, one shared commitment: nurturing confident, capable learners ready for tomorrow's world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {programmes.map((p, i) => (
            <div 
              key={i} 
              className="group relative bg-slate-50 rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 "
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm`} />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon with subtle background */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm mb-6  transition-colors duration-300">
                  <div className="transform group-hover:scale-103 transition-transform duration-300">
                    {p.icon}
                  </div>
                </div>

                {/* Tag */}
                <span className="inline-block ml-2 text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-sm mb-4">
                  {p.tag}
                </span>

                {/* Title */}
                <h3 className="font-title text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {p.desc}
                </p>

                {/* CTA */}
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-medium text-foreground/70 hover:text-primary transition-colors group/btn"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              </div>

              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 text-sm">
            Not sure which path is right?
          </p>
          <Button className="rounded-sm px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

