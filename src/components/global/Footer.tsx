"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <>
      <footer className="w-5/6 md:w-4/5 mx-auto justify-between md:pr-96 flex flex-row flex-wrap text-sm text-white/80 p-5 rounded-md relative border border-purple-500">
        <div className="">
          <p className="md:text-xl text-sm text-white mb-1">Quick Links</p>

          <a href="/webdevelopment">
            <p className="footer-p">Web Development</p>
          </a>
          <a href="/design">
            <p className="footer-p">Graphic Design</p>
          </a>
          <a href="/repairs">
            <p className="footer-p">Computer Repairs</p>
          </a>
        </div>
        <div className="">
          <p className="md:text-xl text-sm text-white mb-1">Legal</p>

          <a href="/disclaimer">
            <p className="footer-p">Disclaimer</p>
          </a>
          <a href="/privacy">
            <p className="footer-p">Privacy Policy</p>
          </a>
          <a href="/terms">
            <p className="footer-p">Terms and Conditions</p>
          </a>
        </div>
        <div className="">
          <p className="md:text-xl text-sm text-white mb-1">Contact</p>

          <a href="mailto:procyon.websites@gmail.com">
            <p className="footer-p">Email</p>
          </a>
          <a href="tel:6798397171">
            <p className="footer-p">Phone</p>
          </a>
          <a href="https://www.instagram.com/procyon.website/">
            <p className="footer-p">Instagram</p>
          </a>
        </div>
      </footer>

      <div className="text-white text-base md:text-xs text-center p-5 relative">
        <p id="date">
          © {date} Copyright |{" "}
          <span className="text-orange-500">
            <Link href={"/"}>Procyon</Link>
          </span>
        </p>
        <div className="hidden md:block absolute -scale-x-100 bottom-0 right-32 w-1/5 z-10">
          <img
            src="/images/satelite.png"
            alt=""
            className="w-full absolute bottom-0 left-0"
          />
        </div>
      </div>
    </>
  );
}
