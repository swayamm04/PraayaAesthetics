"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/our-doctors" },
  { label: "SERVICES", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-xl">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-20 py-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-48 lg:h-14 lg:w-56">
            <Image
              src="/logo.png"
              alt="Praaya Aesthetic Internationale"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-wide text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="hidden lg:inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
        >
          Book Appointment
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="h-7 w-7 text-primary" />
          ) : (
            <svg width="34" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <rect width="24" height="2" rx="1" fill="currentColor" />
              <rect y="7" width="24" height="2" rx="1" fill="currentColor" />
              <rect x="8" y="14" width="16" height="2" rx="1" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full border-t border-border bg-background/95 backdrop-blur-md px-4 pb-6 shadow-lg animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 block w-full rounded-full bg-primary text-primary-foreground px-6 py-3 text-center text-sm font-bold shadow-md hover:bg-primary/90 transition-all active:scale-95"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
