"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState<{ type: 'success' | 'error' | 'sending' | null, message: string }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

 const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsSubmitting(true);
  setResult({ type: 'sending', message: "Sending..." });

  const formData = new FormData(event.currentTarget);

  // Convert to a plain object and send as JSON 
  const payload: Record<string, string> = {
    access_key: "442a4441-51e6-4817-b08c-4b39ab1ac03e",
    subject: "New Contact Form Submission from Luminary Learning",
    from_name: "Luminary Learning Website",
  };
  formData.forEach((value, key) => {
    payload[key] = value.toString();
  });

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      setResult({
        type: 'success',
        message: "Thanks! Your message has been sent. We'll get back to you within 24 hours.",
      });
      (event.target as HTMLFormElement).reset();

      setTimeout(() => {
        setResult({ type: null, message: "" });
      }, 5000);
    } else {
      console.error("Web3Forms error:", data);
      setResult({
        type: 'error',
        message: data.message || "Something went wrong. Please try again or email us directly.",
      });
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setResult({
      type: 'error',
      message: "Network error. Please check your connection and try again.",
    });
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
        className="w-full h-12 text-base font-medium rounded-sm bg-primary hover:bg-primary/90 transition-all group disabled:opacity-50"
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
      {result.type === 'success' && (
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-sm border border-green-200">
          <CheckCircle className="h-4 w-4 flex-shrink-0" />
          <span>{result.message}</span>
        </div>
      )}
      
      {result.type === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-sm border border-red-200">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{result.message}</span>
        </div>
      )}

      {result.type === 'sending' && (
        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-sm border border-blue-200">
          <div className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span>{result.message}</span>
        </div>
      )}
    </form>
  );
}




