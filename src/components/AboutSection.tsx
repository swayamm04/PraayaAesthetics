import Image from "next/image";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpeg";
import aboutMedia from "@/assets/about-media.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mobile Only - About Us Label */}
          <p className="text-primary tracking-[0.25em] text-sm font-semibold uppercase text-center md:hidden w-full">About Us</p>

          {/* Left - Images */}
          <div className="relative flex gap-4 w-full order-2 md:order-first">
            <div className="flex flex-col gap-4 flex-1">
              <Image src={about1} alt="Praaya Aesthetics clinic" className="rounded-2xl object-cover h-64 w-full shadow-lg" />
              <Image src={aboutMedia} alt="Praaya Aesthetics media" className="rounded-2xl object-cover h-48 w-full shadow-lg" />
            </div>
            <div className="flex-1 pt-8">
              <Image src={about2} alt="Praaya Aesthetics team" className="rounded-2xl object-cover h-80 w-full shadow-lg" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full order-3">
            <p className="text-primary tracking-[0.25em] text-sm font-semibold uppercase mb-3 hidden md:block">About Us</p>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6 leading-tight text-center md:text-left">
              Empowering Your True Beauty
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center md:text-left">
              At Praaya Aesthetics, Shimoga, we are dedicated to enhancing your natural beauty with cutting-edge cosmetic and plastic surgery treatments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center md:text-left">
              Our team of highly skilled surgeons specializes in <strong className="text-foreground">Rhinoplasty, Hair Transplantation, Plastic Surgery, and more</strong>. Whether it's reshaping your nose, restoring hair growth, or achieving flawless skin, our experts provide personalized care tailored to your needs.
            </p>
            <div className="text-center md:text-left">
              <a
                href="#contact"
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold-dark transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
