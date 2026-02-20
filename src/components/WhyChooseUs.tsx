import Image from "next/image";
import doctor from "@/assets/doctor.jpeg";
import { UserCheck, Sparkles, ClipboardList, Gem, Trophy } from "lucide-react";

const reasons = [
  {
    title: "Highly Skilled Surgeons",
    desc: "Our experienced specialists provide advanced Rhinoplasty, Hair Transplants, and more.",
    icon: UserCheck,
  },
  {
    title: "State-of-the-Art Technology",
    desc: "We use cutting-edge equipment and the latest techniques for safe and effective treatments.",
    icon: Sparkles,
  },
  {
    title: "Personalized Treatment Plans",
    desc: "Every procedure is tailored to meet your unique beauty goals.",
    icon: ClipboardList,
  },
  {
    title: "Comprehensive Aesthetic Solutions",
    desc: "From skin rejuvenation to body contouring, we offer a complete range of services.",
    icon: Gem,
  },
  {
    title: "Top-Rated Hospital in Shimoga",
    desc: "We offer world-class aesthetic and cosmetic procedures with expert care.",
    icon: Trophy,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-[#FFF9F5]">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-center text-3xl md:text-4xl font-heading font-semibold text-foreground">
            Why Choose Us?
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-2" />
        </div>

        {/* Desktop Layout (lg+ screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column (Right Aligned - Icon on Right) */}
          <div className="flex flex-col gap-12 text-right">
            {reasons.slice(0, 3).map((r) => (
              <div key={r.title} className="flex flex-row items-start justify-end gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-3xl font-medium text-foreground text-[#1a1a1a]">
                    {r.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed ml-auto">
                    {r.desc}
                  </p>
                </div>
                <div className="min-w-fit mt-1">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative h-[480px] w-full items-center justify-center flex">
            <div className="relative h-full w-full max-w-[320px] overflow-hidden rounded-tr-[160px] rounded-tl-[160px] rounded-bl-[160px] rounded-br-[40px] bg-[#E8D556] pt-8 shadow-xl">
              <Image
                src={doctor}
                alt="Dr Prajwal"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column (Left Aligned - Icon on Left) */}
          <div className="flex flex-col gap-12 text-left">
            {reasons.slice(3).map((r) => (
              <div key={r.title} className="flex flex-row items-start justify-start gap-4">
                <div className="min-w-fit mt-1">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-3xl font-medium text-foreground text-[#1a1a1a]">
                    {r.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout (< lg screens) */}
        <div className="lg:hidden flex flex-col gap-10">
          <div className="relative h-[320px] w-full rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[20px] overflow-hidden shadow-lg mx-auto max-w-sm bg-[#E8D556] pt-6">
            <Image
              src={doctor}
              alt="Dr Prajwal"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-1 text-center">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 items-center">
                <r.icon className="w-6 h-6 text-primary" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
