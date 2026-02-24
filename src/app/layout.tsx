import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luminary Learning | Premium Homeschooling & IGCSE Excellence",
  description: "Empowering students through personalized IGCSE prep, Montessori foundations, and future-ready skill courses. Join the evolution of learning.",
  keywords: ["Homeschooling", "IGCSE", "Montessori", "Online Learning", "Creative Writing", "Coding for Kids"],
  openGraph: {
    title: "Luminary Learning",
    description: "Illuminating potential through flexible, expert-led homeschooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} font-sans antialiased  text-slate-900`}
      >
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

