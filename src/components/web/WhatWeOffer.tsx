"use client";

import React from "react";
import { SiWordpress } from "@icons-pack/react-simple-icons";
import {
  Cog,
  DollarSign,
  Image as ImageIcon,
  Mail,
  Paperclip,
  Search,
  Shield,
  User2,
} from "lucide-react";
import ServicesCard from "@/components/global/ServiceCard";

export default function WhatWeOffer() {
  return (
    <div className="md:grid-cols-3 grid grid-cols-1 gap-10 w-4/5 mx-auto mb-28 relative z-10">
      <ServicesCard
        name="WordPress"
        Icon={SiWordpress}
        desc="Get a custom WordPress website that is fast, secure, and easy to manage. Perfect for blogs, business sites, and more."
      />
      <ServicesCard
        name="E-Commerce"
        Icon={DollarSign}
        desc="Grow your business with a powerful e-commerce platform. Accept payments via MPaisa, MyCash, Visa, and MasterCard."
      />
      <ServicesCard
        name="Custom Website"
        Icon={Cog}
        desc="Build a tailor-made website using modern technologies to suit your unique needs and integrate with your systems."
      />
      <ServicesCard
        name="Authentication"
        Icon={User2}
        desc="Secure your web application with custom login, signup, and user authentication systems including OAuth and 2FA."
      />
      <ServicesCard
        name="Free Emails & Domain"
        Icon={Mail}
        desc="Enjoy a free 2GB email inbox and a custom .com domain with every website purchase to establish your online presence."
      />
      <ServicesCard
        name="Free Consultation"
        Icon={Paperclip}
        desc="Get a free one-on-one consultation to discuss your ideas, business goals, and how we can bring them to life online."
      />
      <ServicesCard
        name="Image & Video"
        Icon={ImageIcon}
        desc="Enhance your website with high-quality images and videos. We offer media optimization and custom content integration."
      />
      <ServicesCard
        name="Security & Backup"
        Icon={Shield}
        desc="Keep your website safe with advanced security measures and regular backups to protect your data and uptime."
      />
      <ServicesCard
        name="SEO"
        Icon={Search}
        desc="Boost your website's visibility and ranking on search engines with tailored SEO strategies, including keyword optimization, on-page SEO, and link building."
      />
    </div>
  );
}
