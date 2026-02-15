import { MapPin, Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-topbar text-topbar py-2 text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4">
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Kuvempu Rd, Near Jail Circle, Shivamogga</span>
        </a>
        <a href="mailto:praayaaesthetics@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
          <Mail className="h-4 w-4 text-primary" />
          <span>praayaaesthetics@gmail.com</span>
        </a>
        <a href="tel:+918107847523" className="flex items-center gap-2 hover:text-gold transition-colors">
          <Phone className="h-4 w-4 text-primary" />
          <span>+91 81078 47523</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
