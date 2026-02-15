import Image from "next/image";

const services = [
  { name: "Facial Plastic Surgery", image: "/services/Facial Plastic Surgery.png" },
  { name: "Cleft Surgeries", image: "/services/Cleft Surgeries.png" },
  { name: "Rhinoplasty", image: "/services/Rhinoplasty.png" },
  { name: "ENT", image: "/services/ENT.png" },
  { name: "Tumours / Cysts", image: "/services/Tumours Cysts.png" },
  { name: "Temporomandibular Joint", image: "/services/placeholder.png" },
  { name: "Occuloplastic Surgery", image: "/services/placeholder.png" },
  { name: "Gynaecomastia", image: "/services/placeholder.png" },
  { name: "Sleep Clinic", image: "/services/placeholder.png" },
  { name: "Dermatology", image: "/services/placeholder.png" },
  { name: "Skin Rejuvenation", image: "/services/placeholder.png" },
  { name: "Dermal Fillers", image: "/services/placeholder.png" },
  { name: "Botox", image: "/services/placeholder.png" },
  { name: "Laser Hair Reduction", image: "/services/placeholder.png" },
  { name: "Anti-aging", image: "/services/placeholder.png" },
  { name: "IV Glutathione", image: "/services/placeholder.png" },
  { name: "Hair Regrowth", image: "/services/placeholder.png" },
  { name: "Hair Transplant", image: "/services/placeholder.png" },
  { name: "Laser Scar Treatment", image: "/services/placeholder.png" },
  { name: "Medifacials", image: "/services/placeholder.png" },
  { name: "Microblading & Micropigmentation", image: "/services/placeholder.png" },
  { name: "Tattoo & Birthmark Removal", image: "/services/placeholder.png" },
  { name: "Oral Cancer", image: "/services/placeholder.png" },
  { name: "Liposuction / Abdominoplasty", image: "/services/placeholder.png" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary tracking-[0.25em] text-sm font-semibold uppercase mb-3">
          What We Offer
        </p>
        <h2 className="text-center text-4xl md:text-5xl font-heading font-semibold text-foreground mb-12">
          Our Services
        </h2>
        <div className="grid grid-rows-2 grid-flow-col auto-cols-[150px] md:auto-cols-[200px] gap-4 overflow-x-auto pb-6 snap-x snap-mandatory lg:grid-cols-6 lg:grid-rows-none lg:grid-flow-row lg:auto-cols-auto lg:pb-0 scrollbar-hide">
          {services.map((service) => (
            <div
              key={service.name}
              className="group flex flex-col items-center justify-start text-center cursor-pointer snap-center h-full min-w-[100px]"
            >
              <div className="mb-4 relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
