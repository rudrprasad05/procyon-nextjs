import ServicesCard from "@/components/global/ServiceCard";
import {
  Globe,
  Laptop,
  Mail,
  Paintbrush,
  Rocket,
  Router,
  Server,
} from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="grid h-30vw w-5/6 md:w-4/5 relative grid-cols-1 md:grid-cols-3 mx-auto gap-10 services-cont mb-28">
      <div className="absolute w-2/12 z-50 opacity-100 -bottom-1/4 -right-20">
        <img
          src="/images/star.png"
          alt=""
          className="w-full relative glow2"
          id="star"
        />
      </div>

      <ServicesCard
        name="Web Development"
        Icon={Globe}
        path="/web"
        desc="Transform Your Vision into Reality with Our Cutting-Edge Web Development Services!"
        learnMore="Our Websites"
      />

      <ServicesCard
        name="Email Hosting"
        Icon={Mail}
        path="/email"
        desc="Our secure and reliable email hosting ensures smooth communication and spam-free inboxes"
        learnMore="Get a company Email"
      />

      <ServicesCard
        name="Office Networks"
        Icon={Router}
        path="/networks"
        desc="We design and deploy office networks that keep your team connected, productive, and secure"
        learnMore="Start your network"
      />

      <ServicesCard
        name="Graphic Design"
        Icon={Paintbrush}
        path="/design"
        desc="Unleash Creative Brilliance: Elevate Your Brand with Our Captivating Graphic Design Services!"
        learnMore="Our Designs"
      />

      <ServicesCard
        name="System Solutions"
        Icon={Server}
        path="/custom"
        desc="From Inventory Management to POS and Payroll systems, we provide tailored solutions that fit your business needs"
        learnMore="Get your custom solution"
      />

      <ServicesCard
        name="App Development"
        Icon={Rocket}
        path="/app"
        desc="Reach a larger audience with our custom mobile app development services"
        learnMore="Get your custom app"
      />

      <div className="planet w-4/5 md:w-4/12 absolute bottom-1/4 -left-1/4 z-0 blur-xs rotate-45">
        <img
          src="/images/yellow-planet.png"
          alt=""
          className="w-full relative glow2"
          id="yellow-planet"
        />
      </div>
    </div>
  );
}
