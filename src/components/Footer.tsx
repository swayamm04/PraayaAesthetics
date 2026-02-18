import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, ChevronRight, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1C252B] text-white">
      {/* Top Section with Borders */}
      <div className="border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Social Icons */}
            <div className="py-8 md:py-12 flex justify-center items-center border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex gap-6">
                <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="py-8 md:py-12 flex justify-center items-center border-b md:border-b-0 md:border-r border-white/10">
              <Link href="/" className="relative h-16 w-48">
                <Image
                  src="/logo.png"
                  alt="Praaya Aesthetic Internationale"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* WhatsApp Button */}
            <div className="py-8 md:py-12 flex justify-center items-center">
              <a
                href="https://wa.me/918107847523"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg"
              >
                <span>Connect With</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* About Column */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-xl font-heading font-medium tracking-wider mb-2 uppercase text-primary">
              ABOUT PRAAYA AESTHETIC
              <div className="h-0.5 w-10 bg-primary mt-1" />
            </h3>
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jail circle, shimoga Shimoga, India 577201<br />Karnataka
                </p>
              </div>
              <a href="tel:+918107847523" className="flex items-center gap-4 group">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">+91 81078 47523</span>
              </a>
              <a href="mailto:praayaaesthetics@gmail.com" className="flex items-center gap-4 group">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">praayaaesthetics@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-xl font-heading font-medium tracking-wider mb-2 uppercase text-primary">
              IMPORTANT LINKS
              <div className="h-0.5 w-10 bg-primary mt-1" />
            </h3>
            <ul className="grid grid-cols-1 gap-4 mt-8">
              {[
                { label: "HOME", href: "/" },
                { label: "ABOUT US", href: "/our-doctors" },
                { label: "GALLERY", href: "/gallery" },
                { label: "BLOGS", href: "/blogs" },
                { label: "CONTACT US", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-white group transition-colors text-sm font-medium">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-xl font-heading font-medium tracking-wider mb-2 uppercase text-primary">
              Open Hours
              <div className="h-0.5 w-10 bg-primary mt-1" />
            </h3>
            <div className="mt-8">
              <p className="text-gray-400 text-sm">
                Sun to Sat <span className="text-white font-bold ml-2">08:00 AM - 09:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-[#141B1F] py-6 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()}. All Rights Reserved By PRAAYA AESTHETIC INTERNATIONALE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
