import {
  DevelopedAndDeployed,
  ReadyToWorkWithUs,
  TalkToUs,
} from "@/components/home/CallToActions";
import ContactForm from "@/components/home/ContactForm";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import PricingTable from "@/components/home/WebHostingPriceList";
import { globalMetadata } from "@/metadata";
// import ClientTestimonial from "@/components/ClientTestimonial";
// import Contact from "@/components/Contact";

export const metadata = globalMetadata;

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <DevelopedAndDeployed />
      <PricingTable />
      <ReadyToWorkWithUs />
      <TestimonialSection />
      <TalkToUs />
      <ContactForm />
    </>
  );
}
