"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/buildings", label: "Buildings" },
  { href: "/office-types", label: "Office Types" },
  { href: "/tenant-guide", label: "Tenant Guide" },
  { href: "/promotions", label: "Promotions 🎁" },
  { href: "/consultation", label: "AI Consultant" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`font-bold text-lg tracking-wide ${
                scrolled ? "text-[#0f2044]" : "text-white"
              }`}
            >
              Li Yan <span style={{ color: "#c9a84c" }}>| CBD Office</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-[#c9a84c] transition-colors ${
                  scrolled ? "text-[#0f2044]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#c9a84c] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#b8953d] transition-colors"
            >
              <Phone size={14} />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className={scrolled ? "text-[#0f2044]" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-[#0f2044]" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0f2044] font-medium py-2 border-b border-gray-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#c9a84c] text-white px-4 py-3 rounded-full font-semibold mt-2"
            >
              <Phone size={16} />
              WhatsApp Li Yan
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
