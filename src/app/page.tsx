import ServicesCard from "@/components/global/ServiceCard";
import {
  DevelopedAndDeployed,
  ReadyToWorkWithUs,
  TalkToUs,
} from "@/components/home/CallToActions";
import ClientTestimonial from "@/components/home/ClientTestimonial";
import ContactForm from "@/components/home/ContactForm";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WebHostingPriceList from "@/components/home/WebHostingPriceList";
import { Button } from "@/components/ui/button";
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
      <WebHostingPriceList />
      <ReadyToWorkWithUs />
      <TestimonialSection />
      <TalkToUs />
      <ContactForm />
    </>
  );
}
