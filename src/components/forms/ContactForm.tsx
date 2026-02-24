"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "442a4441-51e6-4817-b08c-4b39ab1ac03e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("success");
        event.currentTarget.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("error");
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      setResult("error");
      setTimeout(() => setResult(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Your Name *</label>
          <input 
            type="text" 
            name="name" 
            required
            placeholder="John Doe" 
            className="w-full p-3 border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Email *</label>
          <input 
            type="email" 
            name="email" 
            required
            placeholder="john@example.com" 
            className="w-full p-3 border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1 block">Child's Grade/Year</label>
        <input 
          type="text" 
          name="grade" 
          placeholder="e.g., Grade 5, Year 7, etc." 
          className="w-full p-3 border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1 block">Message *</label>
        <textarea 
          name="message" 
          required
          placeholder="Tell us a bit about your child's goals, challenges, or questions..." 
          rows={4} 
          className="w-full p-3 border border-border rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
        ></textarea>
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-12 text-base font-medium rounded-sm bg-primary hover:bg-primary/90 transition-all group"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Request a Spark Session
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      {/* Result Message */}
      {result === "success" && (
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-sm">
          <CheckCircle className="h-4 w-4" />
          Form Submitted Successfully! We'll get back to you soon.
        </div>
      )}
      
      {result === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-sm">
          <AlertCircle className="h-4 w-4" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  );
}

