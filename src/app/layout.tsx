import Footer from "@/components/global/Footer";
import DropDownNav from "@/components/global/navbar/DropDownNav";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ThemeSwitcherOneClick from "@/components/theme/ThemeSwitcherOneClick";
import FixedCont from "@/components/global/FixedCont";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Procyon | Links",
  description:
    "Connect with Procyon Fiji. Access our website, socials, contact info, and services from one convenient page.",
  keywords:
    "Procyon Fiji, links, web development, contact, social media, email, website, link page, Fiji tech company",
  authors: [{ name: "Procyon" }],
  metadataBase: new URL("https://links.procyonfiji.com"),
  alternates: {
    canonical: "https://links.procyonfiji.com",
  },
  openGraph: {
    title: "Procyon Fiji | Links",
    description:
      "Explore all Procyon Fiji's resources in one place – website, socials, email and more.",
    url: "https://links.procyonfiji.com",
    siteName: "Procyon Fiji",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Procyon Fiji | Links",
    description: "All our important links in one convenient page.",
    creator: "@procyonfiji", // optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-clip scroll-smooth md:scroll-auto ">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content="Next.js" />
        <link rel="icon" type="image/png" href="/images/fav.png" />
      </head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className={rubik.className}>
          <DropDownNav />
          {children}
          <Toaster />
          <Footer />
          <FixedCont>
            <ThemeSwitcherOneClick seeName={false} />
          </FixedCont>
        </body>
      </ThemeProvider>
    </html>
  );
}
