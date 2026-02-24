import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


export default function FAQ() {
  const faqs = [
    {
      question: "How does homeschooling work with your platform?",
      answer: "We provide the structure, you provide the space. Your child follows a structured yet flexible path led by expert mentors. It's a full-time academic solution that removes the stress of planning lessons yourself while giving you total control over your schedule."
    },
    {
      question: "Will my child still get globally recognized qualifications?",
      answer: "Absolutely. We prepare students for international standards that are accepted by top universities worldwide. Your child will sit for the same prestigious exams as private school students, just with better, more personalized preparation."
    },
    {
      question: "Do I need to be a teacher to help my child?",
      answer: "Not at all. Our certified educators handle the heavy lifting of instruction and curriculum. Your role is simply to support their journey. We provide all the resources, live sessions, and guidance needed for success."
    },
    {
      question: "How do you handle social interaction and peer learning?",
      answer: "Education isn't just about books. We foster a vibrant community through moderated peer groups, collaborative projects, and interactive sessions where students can connect with like-minded learners from around the globe."
    },
    {
      question: "What if my child falls behind or wants to move faster?",
      answer: "That is the beauty of our approach. Unlike a traditional classroom that moves at one speed, our platform allows students to pause and master difficult concepts or accelerate through topics they've already grasped."
    },
    {
      question: "Is there support for parents to track progress?",
      answer: "Yes. You'll have access to a dedicated dashboard showing real-time updates on assignments, milestones, and areas for improvement. You are never in the dark about your child's academic growth."
    }
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Common <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about the transition to better learning.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 " >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border/50 rounded-sm px-6 bg-gradient-to-b from-background to-secondary/5 backdrop-blur-sm data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="cursor-pointer font-title text-lg hover:no-underline hover:text-primary text-left py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Optional bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Still have questions? We're here to help.
          </p>
          <Button variant="link" className="text-primary hover:text-accent mt-2">
            Contact Our Team →
          </Button>
        </div>
      </div>
    </section>
  );
}

