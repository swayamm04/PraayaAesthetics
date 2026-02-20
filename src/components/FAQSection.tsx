import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import faqSide from "@/assets/faq-side.jpg";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is Rhinoplasty (Nose Surgery) safe, and how long is the recovery period?",
    a: "Yes, Rhinoplasty is a safe and effective procedure when performed by experts. Recovery time varies, but most patients resume normal activities within 7 to 10 days, with full healing in a few months.",
  },
  {
    q: "What cosmetic procedures do you offer at Praaya Aesthetics?",
    a: "We provide a wide range of services, including Rhinoplasty, Hair Transplant, Skin Rejuvenation, Anti-Aging Treatments, and Body Contouring to enhance your natural beauty.",
  },
  {
    q: "Are hair transplants permanent, and when will I see results?",
    a: "Yes, hair transplants offer a permanent solution to hair loss. New hair growth typically starts within 3 to 4 months, with full results visible in 9 to 12 months.",
  },
  {
    q: "Will there be visible scars after plastic surgery?",
    a: "Our expert surgeons use advanced techniques to minimize scarring. Most incisions are strategically placed and heal over time, making scars barely noticeable.",
  },
  {
    q: "How do I book a consultation at Praaya Aesthetics?",
    a: "You can book an appointment by visiting our clinic at Kuvempu Rd, Near Jail Circle, Shivamogga or calling us at +91 81078 47523.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Promo Content */}
          <div className="relative order-last lg:order-first">
            <Image
              src={faqSide}
              alt="Enhancing Beauty with Precision"
              className="w-full h-auto object-contain rounded-xl shadow-sm"
              priority
            />
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start mb-4">
              <h2 className="text-left text-4xl md:text-5xl font-heading font-semibold text-primary">
                Frequently Asked Questions
              </h2>
              <div className="h-0.5 w-12 bg-primary mt-2" />
            </div>

            <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionPrimitive.Item
                  key={i}
                  value={`faq-${i}`}
                  className="group border border-primary/30 bg-background px-6 py-2 transition-all duration-300 data-[state=open]:border-primary data-[state=open]:shadow-md hover:border-primary/60"
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 text-left font-heading text-sm md:text-lg font-medium text-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                      <span className="pr-4">{faq.q}</span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:text-primary" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>

                  <AccordionPrimitive.Content className="overflow-hidden text-xs md:text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-4 pt-2 text-muted-foreground leading-relaxed border-t border-dashed border-primary/20 mt-2">
                      {faq.a}
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
