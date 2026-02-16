import Image from "next/image";
import doctor from "@/assets/doctor.jpeg";

const reasons = [
  {
    title: "Highly Skilled Surgeons",
    desc: "Our experienced specialists provide advanced Rhinoplasty, Hair Transplants, and more.",
  },
  {
    title: "State-of-the-Art Technology",
    desc: "We use cutting-edge equipment and the latest techniques for safe and effective treatments.",
  },
  {
    title: "Personalized Treatment Plans",
    desc: "Every procedure is tailored to meet your unique beauty goals.",
  },
  {
    title: "Comprehensive Aesthetic Solutions",
    desc: "From skin rejuvenation to body contouring, we offer a complete range of services.",
  },
  {
    title: "Top-Rated Hospital in Shimoga",
    desc: "We offer world-class aesthetic and cosmetic procedures with expert care.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-[#FFF9F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-semibold text-foreground mb-10">
          Why Choose Us?
        </h2>

        {/* Desktop Layout (lg+ screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 items-center">
          {/* Left Column (Right Aligned) */}
          <div className="flex flex-col gap-10 text-right">
            {reasons.slice(0, 3).map((r) => (
              <div key={r.title} className="flex flex-col gap-1">
                <h3 className="font-heading text-xl font-medium text-foreground text-[#1a1a1a]">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[300px] ml-auto">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative h-[400px] w-full items-center justify-center flex">
            <div className="relative h-full w-full max-w-[300px] overflow-hidden rounded-t-[100px] bg-[#E8D556] pt-8">
              <Image
                src={doctor}
                alt="Dr Prajwal"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column (Left Aligned) */}
          <div className="flex flex-col gap-10 text-left">
            {reasons.slice(3).map((r) => (
              <div key={r.title} className="flex flex-col gap-1">
                <h3 className="font-heading text-xl font-medium text-foreground text-[#1a1a1a]">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[300px]">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout (< lg screens) */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg mx-auto max-w-sm">
            <Image
              src={doctor}
              alt="Dr Prajwal"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-1 text-center">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-1 items-center">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
