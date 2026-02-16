import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-topbar text-topbar py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-heading font-bold text-primary">PRAAYA</span>
              <span className="block text-sm font-heading text-primary">Aesthetic Internationale</span>
            </div>
            <p className="text-sm text-topbar/70 leading-relaxed">
              Enhancing your natural beauty with cutting-edge cosmetic and plastic surgery treatments in Shimoga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Our Doctors", href: "/our-doctors" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors text-topbar/70">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-topbar/70">
              <a href="https://maps.google.com" className="flex items-start gap-3 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                Kuvempu Rd, Near Jail Circle, Shivamogga
              </a>
              <a href="mailto:praayaaesthetics@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                praayaaesthetics@gmail.com
              </a>
              <a href="tel:+918107847523" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                +91 81078 47523
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-topbar/20 text-center text-sm text-topbar/50">
          © {new Date().getFullYear()} Praaya Aesthetic Internationale. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
