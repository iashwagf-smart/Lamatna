"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/services", label: "المسارات" },
  { href: "/partner-apply", label: "انضم كشريك" },
  { href: "/corporate", label: "الشركات" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[5px]" style={{ background: "linear-gradient(to right, #3D3A5C, #C46878, #E07840, #F0C040)" }} />

      <nav
        className={`fixed top-[5px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
        style={{ borderBottom: "1px solid #F7F7F7" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="لمتنا"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Nav Links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors relative group"
                style={{ color: "#707070" }}
              >
                {link.label}
                <span
                  className="absolute bottom-[-4px] right-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ background: "#C46878" }}
                />
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:block text-sm font-semibold transition-colors"
              style={{ color: "#3D3A5C" }}
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/register"
              className="nir-btn text-sm"
            >
              ابدأ الآن
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#3D3A5C" }} />
              <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ background: "#3D3A5C" }} />
              <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#3D3A5C" }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-3" style={{ borderColor: "#F7F7F7" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold py-2"
                style={{ color: "#707070" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block text-sm font-semibold py-2"
              style={{ color: "#3D3A5C" }}
              onClick={() => setMenuOpen(false)}
            >
              تسجيل الدخول
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[75px]" />
    </>
  );
}
