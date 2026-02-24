import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full  backdrop-blur-lg">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 h-20 items-center justify-between px-4">
       <div className='flex justify-start' >
        <Link 
          href="/" 
          className="font-title text-xl font-bold tracking-tighter text-primary  hover:opacity-80 transition-opacity"
        >
          LUMINARY <span className="text-primary/70">LEARNING</span>
        </Link>
        </div>
        
        <div className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
          <Link 
            href="/programmes" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Programmes
          </Link>
          <Link 
            href="/courses" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link 
            href="/about" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </Link>
          {/* <Link 
            href="/blog" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Blog
          </Link> */}
          <Link 
            href="/contact" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

<div className='flex justify-end' >
        <Button className="rounded-sm px-4 h-10 shadow-md w-fit ">
          Start Learning
        </Button>
        </div>
      </div>
    </nav>
  );
}

