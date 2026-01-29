import Cases from '@/components/Cases';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
