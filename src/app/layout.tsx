import Footer from "@/components/global/Footer";
import DropDownNav from "@/components/global/navbar/DropDownNav";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Procyon",
  description:
    "Home page for Procyon Fiji. The leading experts in webdevelopment, email hosting, design, networking and computer repairs.",
  keywords:
    "webdevelopment, website, webhosting, hosting, email, server, networking, repairs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-clip">
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
        </body>
      </ThemeProvider>
    </html>
  );
}
