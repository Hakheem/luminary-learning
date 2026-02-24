"use client";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 bg-white p-8 md:p-16 rounded-sm shadow-sm border">
          <div>
            <h1 className="font-title text-5xl font-black mb-6">Let’s <span className="text-primary">Talk.</span></h1>
            <p className="text-muted-foreground text-lg mb-8">
              Book your 30-minute chat to see how we can help your child thrive. No pressure, just a real conversation about their future.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-sm uppercase text-slate-400">Email us</p>
                <p className="text-xl font-bold">hello@academix.com</p>
              </div>
              <div>
                <p className="font-bold text-sm uppercase text-slate-400">Call us</p>
                <p className="text-xl font-bold">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-4 border rounded-sm outline-primary" />
              <input type="email" placeholder="Email Address" className="p-4 border rounded-sm outline-primary" />
            </div>
            <input type="text" placeholder="Child's Grade / Year" className="w-full p-4 border rounded-sm outline-primary" />
            <textarea placeholder="Tell us a bit about your child's goals..." rows={4} className="w-full p-4 border rounded-sm outline-primary"></textarea>
            <Button className="w-full h-14 text-lg font-bold rounded-sm">Request a Spark Session</Button>
          </form>
        </div>
      </div>
    </main>
  );
}