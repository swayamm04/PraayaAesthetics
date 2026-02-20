import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Facial Plastic Surgery",
    image: "/services/Facial Plastic Surgery.png",
    description: "Enhance facial harmony and balance through advanced surgical procedures tailored to your unique features."
  },
  {
    name: "Cleft Surgeries",
    image: "/services/Cleft Surgeries.png",
    description: "Corrective surgeries for cleft lip and palate to improve function, speech, and appearance."
  },
  {
    name: "Rhinoplasty",
    image: "/services/Rhinoplasty.png",
    description: "Reshape the nose for improved aesthetics and function, creating a balanced and natural look."
  },
  {
    name: "ENT",
    image: "/services/ENT.png",
    description: "Comprehensive care for Ear, Nose, and Throat conditions, ensuring optimal health and function."
  },
  {
    name: "Tumours / Cysts",
    image: "/services/Tumours Cysts.png",
    description: "Expert diagnosis and surgical removal of benign and malignant growths with minimal scarring."
  },
  {
    name: "Temporomandibular Joint",
    image: "/services/Tempo romandibular joint.png",
    description: "Specialized treatment for jaw joint disorders to relieve pain and restore proper jaw function."
  },
  {
    name: "Occuloplastic Surgery",
    image: "/services/Occuloplastic Surgery.png",
    description: "Functional and cosmetic surgery of the eyelids, tear ducts, and orbit to rejuvenate the eyes."
  },
  {
    name: "Gynaecomastia",
    image: "/services/placeholder.png",
    description: "Male breast reduction surgery to achieve a flatter, more masculine chest contour."
  },
  {
    name: "Sleep Clinic",
    image: "/services/Sleep clinic.png",
    description: "Diagnosis and treatment of sleep disorders like sleep apnea to help you rest better."
  },
  {
    name: "Dermatology",
    image: "/services/Dermatology.png",
    description: "Advanced skin care solutions for acne, pigmentation, and other dermatological conditions."
  },
  {
    name: "Skin Rejuvenation",
    image: "/services/Skin Rejuvenation.png",
    description: "Revitalize your skin with treatments designed to restore glow, texture, and youthfulness."
  },
  {
    name: "Dermal Fillers",
    image: "/services/Dermal Fillers.png",
    description: "Restore lost volume, smooth wrinkles, and enhance facial contours with premium fillers."
  },
  {
    name: "Botox",
    image: "/services/Botox.png",
    description: "Reduce the appearance of fine lines and wrinkles for a smoother, more youthful complexion."
  },
  {
    name: "Laser Hair Reduction",
    image: "/services/Laser Hair Reduction.png",
    description: "Safe and effective long-term hair reduction using state-of-the-art laser technology."
  },
  {
    name: "Anti-aging",
    image: "/services/Anti-aging.png",
    description: "Comprehensive anti-aging treatments to combat signs of aging and maintain a youthful look."
  },
  {
    name: "IV Glutathione",
    image: "/services/IV Glutathione.png",
    description: "Skin brightening and detoxification therapy to improve overall skin health and radiance."
  },
  {
    name: "Hair Regrowth",
    image: "/services/Hair Regrowth.png",
    description: "Effective therapies to stimulate hair growth and combat thinning hair."
  },
  {
    name: "Hair Transplant",
    image: "/services/Hair Transplant.png",
    description: "Permanent hair restoration surgery to restore hairline and density with natural results."
  },
  {
    name: "Laser Scar Treatment",
    image: "/services/Laser Scar Treatment.png",
    description: "Advanced laser therapy to reduce the visibility of acne scars, surgical scars, and trauma scars."
  },
  {
    name: "Medifacials",
    image: "/services/Medifacials.png",
    description: "Medical-grade facials deep cleanse, exfoliate, and nourish your skin for a healthy glow."
  },
  {
    name: "Hollywood Facial",
    image: "/services/Hollywood Facial.png",
    description: "Get an instant red-carpet glow with our signature Hollywood Facial treatment."
  },
  {
    name: "Microblading & Micropigmentation",
    image: "/services/Microblading and Micropigmentation.png",
    description: "Semi-permanent makeup solutions for perfectly shaped eyebrows and define features."
  },
  {
    name: "Tattoo & Birthmark Removal",
    image: "/services/Tattoo and Birthmark Removal.png",
    description: "Laser removal of unwanted tattoos and birthmarks with precision and safety."
  },
  {
    name: "Oral Cancer",
    image: "/services/Oral Cancer.png",
    description: "Screening, diagnosis, and surgical management of oral cancer and pre-cancerous lesions."
  },
  {
    name: "Liposuction / Abdominoplasty",
    image: "/services/placeholder.png",
    description: "Body contouring procedures to remove stubborn fat and tighten abdominal muscles."
  },
];

const ServicesSection = ({ variant = "default" }: { variant?: "default" | "simple" }) => {
  const isSimple = variant === "simple";

  return (
    <section id="services" className={`py-20 ${isSimple ? "bg-background" : "bg-secondary/10"}`}>
      <div className="container mx-auto px-4 lg:px-20">

        {/* Header - Only on Home Page */}
        {isSimple && (
          <div className="text-center mb-16 space-y-2">
            <p className="text-primary tracking-[0.25em] text-sm font-semibold uppercase">
              WHAT WE OFFER
            </p>
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-foreground">
              Our Services
            </h2>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 ${isSimple ? "lg:grid-cols-5" : "lg:grid-cols-4"} gap-6`}>
          {services.map((service) => (
            <Link href="/services" key={service.name} className="block h-full">
              {isSimple ? (
                // Simple Variant (Home Page)
                <div className="group flex flex-col items-center text-center cursor-pointer h-full">
                  <div className="mb-4 relative h-14 w-14 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
              ) : (
                // Default Variant (Services Page - Card Style)
                <div
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-64 cursor-pointer"
                >
                  {/* Main Content (Icon + Title) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:-translate-y-8">
                    <div className="mb-3 relative h-14 w-14 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-foreground text-center group-hover:text-primary transition-colors px-1 leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Hover Content (Description Popup) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-primary/20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center h-1/2">
                    <div className="w-8 h-1 bg-primary/20 rounded-full mb-2 mx-auto" />
                    <p className="text-xs text-muted-foreground text-center leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
