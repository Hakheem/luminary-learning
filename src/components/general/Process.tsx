"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    displayTitle: "The Initial Chat", 
    cardTitle: "Consult",
    text: "Book a free call to discuss goals.",
    desc: "Book a 30-minute chat to help us get a feel for your child's personality and your daily routine. We’ll figure out the best path forward together, with zero pressure to commit to anything.",
    image: "/consult.jpg",
    color: "from-primary/20 to-transparent"
  },
  {
    number: "02",
    displayTitle: "Finding the Right Teacher", 
    cardTitle: "Match",
    text: "Get paired with expert educators.",
    desc: "Get matched with an expert tutor who actually gets how your child thinks. We find people who know their subjects inside out but also know how to keep a student motivated and curious.",
    image: "/match.jpg",
    color: "from-accent/20 to-transparent"
  },
  {
    number: "03",
    displayTitle: "Focused 1:1 Learning",
    cardTitle: "Learn",
    text: "Engage in personalized live sessions.",
    desc: "Sessions happen live and one-on-one, moving only as fast as your child is ready to go. Every lesson is built around how they learn, making sure they actually understand the topic before moving to the next one.",
    image: "/learn.jpg",
    color: "from-primary/20 via-accent/10 to-transparent"
  },
  {
    number: "04",
    displayTitle: "Results & Certification", 
    cardTitle: "Succeed",
    text: "Track progress and get certified.",
    desc: "See exactly how your child is doing with easy-to-follow reports. They’ll earn official certifications that are respected globally, giving them everything they need to get into top-tier schools and colleges later on.",
    image: "/succeed.jpg",
    color: "from-accent/20 to-primary/10"
  }
];

export default function Process() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            Your Roadmap
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Journey to
            <span className="text-primary block mt-2">Mastery & Beyond</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Simple steps from where you are to where you want to be.
          </p>
        </div>

        {/* Alternating Steps */}
        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                {/* Image Column */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative w-full max-w-[550px] mx-auto lg:mx-0">
                    <div className="relative aspect-[4/3] z-10 rounded-sm overflow-hidden shadow-md">
                      <Image
                        src={step.image}
                        alt={step.cardTitle}
                        fill
                        className="object-cover hover:scale-102 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${step.color} mix-blend-overlay pointer-events-none`} />
                    </div>

                    {/* Large Background Number */}
                    <div className="absolute -top-8 -left-8 font-title text-[180px] lg:text-[220px] font-black text-primary/10 leading-none select-none pointer-events-none z-20">
                      {step.number}
                    </div>

                    {/* Floating Card - Position changes based on image side */}
                    <div 
                      className={`absolute -bottom-6 z-30 bg-white p-4 rounded-sm shadow-lg border-l-4 border-primary hidden lg:block ${
                        index % 2 === 0 ? '-right-6' : '-left-6'
                      }`}
                    >
                      <p className="text-xs font-medium text-foreground/70">Step {step.number}</p>
                      <p className="text-lg font-bold text-primary">{step.cardTitle}</p>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <span className="font-title text-4xl font-black text-primary/30">{step.number}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  {/* Title - NEW TRANSFORMED TITLES */}
                  <h3 className="font-title text-3xl md:text-4xl font-bold mb-4">
                    {step.displayTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Key Point  */}
                  <div className="flex items-center justify-start gap-3">
                    <div className="min-w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{step.number}</span>
                    </div>
                    <p className="text-sm text-foreground/70 italic leading-relaxed">
                      {step.text}
                    </p>
                  </div>

                  <div className="absolute -bottom-8 left-0 w-20 h-px bg-gradient-to-r from-primary to-accent hidden lg:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to begin your journey?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-sm px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="rounded-sm px-8 h-12 border-2 border-primary/20">
              See Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

