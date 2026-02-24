"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Microscope, Code, Globe, ArrowRight } from "lucide-react";

const stages = [
  {
    title: "Secondary Foundation",
    years: "Years 7 - 9",
    desc: "Build a rock-solid foundation in core subjects. Focus on developing critical thinking and study habits before the high-stakes exam years begin.",
    subjects: ["English Literature", "Mathematics", "Science", "History", "Global Perspectives"],
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "IGCSE / GCSE Track",
    years: "Years 10 - 11",
    desc: "The standard for global education. Choose from a wide range of subjects designed to prepare students for international certifications (Cambridge & Edexcel).",
    subjects: ["Biology/Chemistry/Physics", "Further Maths", "Economics", "Computer Science", "Business Studies"],
    icon: <Microscope className="h-6 w-6 text-accent" />,
  },
  {
    title: "A-Level / International AS",
    years: "Years 12 - 13",
    desc: "Advanced specialization for university entrance. Deep-dive into specific subjects to build a competitive portfolio for top-tier global universities.",
    subjects: ["Psychology", "Advanced Mathematics", "Physics", "Accounting", "Law"],
    icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
  }
];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
            Our Curricula
          </span>
          <h1 className="font-title text-5xl md:text-7xl font-black mb-6">
            Learning Paths for <br />
            <span className="text-primary">Every Stage.</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-medium">
            Globally recognized standards delivered through personalized, one-on-one instruction. No fluff—just a direct route to academic excellence.
          </p>
        </div>
      </section>

      {/* Stages Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stages.map((stage, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border-2 border-slate-100 rounded-sm hover:border-primary/20 hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 rounded-sm">{stage.icon}</div>
                  <span className="text-xs font-black bg-primary/10 text-primary px-3 py-1 rounded-full italic">
                    {stage.years}
                  </span>
                </div>
                
                <h3 className="font-title text-2xl font-bold mb-4">{stage.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {stage.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Popular Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.subjects.map((sub, j) => (
                      <span key={j} className="text-sm font-semibold bg-slate-50 border px-3 py-1 rounded-sm text-slate-700">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full rounded-sm font-bold group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Add / Extra Skills Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-title text-4xl md:text-6xl font-black mb-6 leading-tight">
                More Than Just <br />Textbooks.
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg leading-relaxed">
                Academic success is the priority, but the world demands more. Every student can add high-impact skill modules to their core curriculum.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-2 rounded-sm"><Code className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Digital Mastery</h4>
                    <p className="text-sm text-primary-foreground/60">Coding, UI/UX, & AI tools.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-2 rounded-sm"><Globe className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Global Languages</h4>
                    <p className="text-sm text-primary-foreground/60">Arabic, French, & Spanish.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-full absolute -top-20 -right-20 w-[500px] h-[500px] blur-3xl" />
              <div className="relative z-10 p-8 border border-white/20 rounded-sm bg-white/5 backdrop-blur-sm">
                <h3 className="font-title text-2xl font-bold mb-4 italic">"The Academic Core + Digital Mastery module was a game changer for my son's university application."</h3>
                <p className="font-bold">— Sarah J., Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

