import Hero from "../components/general/HeroSection";
import Programmes from "../components/general/Programmes";
import Process from "../components/general/Process";
import FAQ from "../components/general/FAQ";
import CTA from "../components/general/CTA";
import Newsletter from "../components/general/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Programmes />
      <Process />
      <FAQ />
      <CTA />
      {/* <Newsletter /> */}
    </>
  );
}