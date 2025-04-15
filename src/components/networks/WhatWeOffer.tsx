"use client";

import ServicesCard from "@/components/global/ServiceCard";
import {
  Cog,
  GlobeIcon,
  Image as ImageIcon,
  Infinity,
  Link2,
  Lock,
  Mail,
  Paperclip,
  Search,
  ServerIcon,
  Shield,
  User2,
} from "lucide-react";

export default function WhatWeOffer() {
  return (
    <div className="md:grid-cols-3 grid grid-cols-1 gap-10 w-4/5 mx-auto mb-28 relative z-10">
      <ServicesCard
        name="Free Domain"
        Icon={Link2}
        desc="Get your free & custom .com domain with the purchase of any email hosting service."
      />
      <ServicesCard
        name="Unlmited Emails"
        Icon={Infinity}
        desc="Grow your business with us and get unlimited emails for your team. Get the Enterprise package to start now"
      />
      <ServicesCard
        name="Storage"
        Icon={ServerIcon}
        desc="Get a range of inbox storage options from 2GB to 100GB. Choose the plan that fits your needs."
      />
      <ServicesCard
        name="Admin Panel"
        Icon={User2}
        desc="Manage your team and their emails with our easy-to-use admin panel. Add or remove users, reset passwords, and more."
      />
      <ServicesCard
        name="Email Clients"
        Icon={GlobeIcon}
        desc="Access your emails from anywhere with our webmail. Or connect outlook, thunderbird, or your favorite email client."
      />
      <ServicesCard
        name="Free Consultation"
        Icon={Paperclip}
        desc="Get a free one-on-one consultation to discuss your ideas, business goals, and how we can bring them to life online."
      />
      <ServicesCard
        name="Image & Video"
        Icon={ImageIcon}
        desc="All attachments are stored in our secure cloud storage. We offer media optimization and custom content integration."
      />
      <ServicesCard
        name="Spam Protection"
        Icon={Shield}
        desc="Keep your inbox clean with our advanced spam protection. We use AI and machine learning to filter out unwanted emails."
      />
      <ServicesCard
        name="Auth & MFA"
        Icon={Lock}
        desc="We prioritise security. Secure login with user authentication systems including OAuth and 2FA."
      />
    </div>
  );
}
