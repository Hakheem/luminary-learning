"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
              Our Mission
            </span>
            <h1 className="font-title text-5xl md:text-7xl font-black mb-8 leading-tight">
              Education Built for the <br />
              <span className="text-primary">Individual.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Traditional classrooms were designed for the masses. We were built for the student who needs a different pace, a different focus, and a direct path to global success.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Image + Text */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <Image 
                  src="/philosophy.jpg" 
                  alt="Our Philosophy" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 -z-0 rounded-sm" />
            </div>

            <div className="space-y-8">
              <h2 className="font-title text-4xl md:text-5xl font-black">
                Why we started.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We saw too many bright students losing their spark in crowded classrooms. We decided to build a place where the education fits the child, not the other way around. 
              </p>
              <div className="p-8 border-l-8 border-primary bg-slate-50 rounded-sm">
                <p className="text-xl font-bold italic text-foreground">
                  "Our goal is to turn academic stress into academic mastery, one student at a time."
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every educator in our network is certified, experienced, and vetted for their ability to connect with students online. We don't just hire tutors; we hire mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-bold mb-4">Our Core Standards</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Transparency", text: "Direct communication between parents, students, and mentors at every stage." },
              { title: "Rigor", text: "Global standards that ensure certifications are recognized by the world's best universities." },
              { title: "Flexibility", text: "Learning that respects your family's schedule and your child's natural learning rhythm." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <h4 className="font-title text-2xl font-bold text-primary">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold mb-8">Ready to see the difference?</h2>
          <button className="px-10 h-14 bg-primary text-white font-bold rounded-sm hover:bg-primary/90 transition-all shadow-xl">
            Meet Our Mentors
          </button>
        </div>
      </section>
    </main>
  );
}

