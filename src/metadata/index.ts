import { Metadata } from "next";
import React from "react";

export const globalMetadata: Metadata = {
  title: "Procyon | Apps & Web Development, Hosting & SEO Services in Fiji",
  description:
    "Procyon offers professional app development, web development, and email hosting services in Fiji. We specialize in SEO, computer repairs, networking, dashboard and system development, and database solutions. Empowering businesses with reliable digital solutions.",
  keywords: [
    "Procyon Fiji",
    "app development Fiji",
    "web development Fiji",
    "email hosting Fiji",
    "SEO Fiji",
    "computer repairs",
    "dashboard development",
    "networking services",
    "database solutions",
    "system development",
    "website hosting",
    "IT services Fiji",
    "Procyon web services",
  ],
  openGraph: {
    title: "Procyon | App Development, Web & Email Hosting in Fiji",
    description:
      "Professional app development, website design, SEO, and IT solutions from Fiji's trusted tech experts. Get your digital presence right with Procyon.",
    url: "https://yourdomain.com",
    siteName: "Procyon",
    images: [
      {
        url: "https://yourdomain.com/images/og-banner.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Procyon - App Development and Web Services in Fiji",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procyon | Fiji Web & App Development Experts",
    description:
      "Get your business online with Procyon — offering app development, web hosting, SEO, computer repairs, and IT services in Fiji.",
    images: ["https://yourdomain.com/images/og-banner.jpg"], // Replace with actual image
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
};
