'use client'

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
    // Reset or show success message
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 my-8 ">
      <p className="text-sm font-medium text-foreground mb-3">
        Join 10,000+ families receiving weekly insights
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required
          className="flex-1 px-4 py-2 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
        />
        <button 
          type="submit"
          className="px-5 py-2 bg-primary text-primary-foreground text-sm rounded-sm hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      <p className="text-[10px] text-muted-foreground/70 mt-3">
        No spam. Unsubscribe anytime. We respect your inbox.
      </p>
    </div>
  );
}

