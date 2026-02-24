"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BookOpen, Users, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative pt-12 lg:mb-8 md:pt-4 lg:flex lg:items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 size-28 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-foreground/80">
                Accredited • Cambridge & Montessori • Since 2015
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="font-title text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight"
            >
           Schooling That <br /> Actually <span className="text-primary">Makes Sense.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground mt-4 leading-relaxed"
            >
              Trade the rigid classroom for a world-class education that moves at your child's pace. We provide the expert mentorship and flexibility they need to thrive without the school-day stress.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button
                className="rounded-sm px-5 h-12 bg-primary hover:bg-primary/90 font-light group"
              >
                Explore Programmes
              </Button>

              <Button
                variant="outline"
                className="rounded-sm px-5 h-12 border-primary/20 text-foreground font-light hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 "
              >
                Book Free Consultation
              </Button>

            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-row gap-8 mt-12 "
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">50+ Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Global Standards</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block mb-8 lg:mb-0"
          >
            <div className="relative flex justify-center">
              <Image
                src="/home.png"
                alt="Students learning in a modern classroom"
                width={400}
                height={500}
                className="object-cover"
                priority
              />

              {/* Student Satisfaction */}
              <motion.div
                className="absolute top-22 -right-3 bg-white p-4 rounded-sm shadow-lg border-l-3 border-accent"
                animate={{
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-xs md:text-sm font-medium text-foreground/70">Student Satisfaction</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary">98%</p>
              </motion.div>



              <motion.div
                className="absolute top-22 -left-3 -z-20  "
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/grids.png"
                  alt="Brain icon"
                  width={100}
                  height={100}
                  className="object-cover opacity-40"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-6 -left-6 bg-white p-4 rounded-sm shadow-lg border-l-3 border-primary"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-xs md:text-sm font-medium text-foreground/70">Students Enrolled</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary">3000+</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

