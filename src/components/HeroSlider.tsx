"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


const slides = [
  { desktop: "/banners/desktop/desktop-banner-1.jpg", mobile: "/banners/mobile/mobile-banner-1.jpg" },
  { desktop: "/banners/desktop/desktop-banner-2.jpg", mobile: "/banners/mobile/mobile-banner-2.jpg" },
  { desktop: "/banners/desktop/desktop-banner-3.jpg", mobile: "/banners/mobile/mobile-banner-3.jpg" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[1/1] sm:aspect-[2/1] md:aspect-[3/1] lg:aspect-[3.5/1]">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
            {/* Desktop Image */}
            <div className="hidden md:block h-full w-full relative">
              <Image
                src={slide.desktop}
                alt={`Praaya Aesthetics slide ${i + 1}`}
                fill
                className="object-contain bg-background"
                priority={i === 0}
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden h-full w-full relative">
              <Image
                src={slide.mobile}
                alt={`Praaya Aesthetics slide ${i + 1}`}
                fill
                className="object-contain bg-background"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-background/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
