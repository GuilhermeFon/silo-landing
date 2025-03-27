import {Navbar} from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <ContactSection />
    </>
  );
}
