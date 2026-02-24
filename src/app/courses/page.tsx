"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Languages, Beaker, Landmark } from "lucide-react";

const courseClusters = [
  {
    title: "Mathematics & Logic",
    icon: <Calculator className="h-6 w-6 text-primary" />,
    courses: ["Core Mathematics", "Further Pure Maths", "Statistics", "Mechanics"],
    desc: "From basic numeracy to advanced calculus. Focus on problem-solving that prepares students for engineering and data sciences."
  },
  {
    title: "The Sciences",
    icon: <Beaker className="h-6 w-6 text-accent" />,
    courses: ["Biology", "Chemistry", "Physics", "Environmental Management"],
    desc: "Hands-on theory and exam preparation following the IGCSE and A-Level standards."
  },
  {
    title: "Humanities & Business",
    icon: <Landmark className="h-6 w-6 text-blue-500" />,
    courses: ["Economics", "Business Studies", "History", "Geography", "Psychology"],
    desc: "Understand global markets, history, and human behavior. Built for future leaders and entrepreneurs."
  },
  {
    title: "Languages & Literacy",
    icon: <Languages className="h-6 w-6 text-primary" />,
    courses: ["English Language", "English Literature", "Arabic", "French", "Spanish"],
    desc: "Master communication. Focus on critical analysis and fluent expression in multiple languages."
  }
];

export default function Courses() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h1 className="font-title text-5xl font-black mb-4">Subject <span className="text-primary">Clusters</span></h1>
          <p className="text-muted-foreground text-lg max-w-xl">Everything your child needs to earn their international certifications, taught one-on-one.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {courseClusters.map((cluster, i) => (
            <div key={i} className="p-8 border-2 border-slate-100 rounded-sm hover:border-primary/20 transition-all">
              <div className="mb-4">{cluster.icon}</div>
              <h3 className="font-title text-2xl font-bold mb-3">{cluster.title}</h3>
              <p className="text-muted-foreground mb-6">{cluster.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {cluster.courses.map((c, j) => (
                  <span key={j} className="text-xs font-bold border px-3 py-1 rounded-sm bg-slate-50">{c}</span>
                ))}
              </div>
              <Button variant="link" className="p-0 font-bold text-primary group">
                View Syllabus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

