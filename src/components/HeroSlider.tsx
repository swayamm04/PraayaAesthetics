"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


const slides = [
  {
    desktop: "/banners/desktop/desktop-banner-1.png",
    mobile: "/banners/mobile/mobile-banner-1.png",
    content: {
      title: "Transform Your Look with Confidence",
      subtitle: "Expert Cosmetic and Aesthetic Procedures for",
      highlight: "Face - Body - Hair",
      cta: "CONSULT OUR SPECIALISTS NOW!"
    }
  },
  {
    desktop: "/banners/desktop/desktop-banner-2.png",
    mobile: "/banners/mobile/mobile-banner-2.png",
    content: {
      title: "Personalized Care Exceptional Results",
      subtitle: "Experience advanced Plastic and Cosmetic Surgeries From",
      highlight: "Leading Specialists",
      cta: "CONTACT US TODAY!",
      isBanner2: true
    }
  },
  {
    desktop: "/banners/desktop/desktop-banner-3.png",
    mobile: "/banners/mobile/mobile-banner-3.png",
    content: {
      title: "HAIR TRANSPLANT & RHINOPLASTY EXPERTS",
      subtitle: "Achieve a youthful and confident Look with",
      highlight: "Advanced Hair Restoration and Facial Surgeries",
      isBanner3: true
    }
  },
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
                className="object-contain object-top bg-background"
                priority={i === 0}
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden h-full w-full relative">
              <Image
                src={slide.mobile}
                alt={`Praaya Aesthetics slide ${i + 1}`}
                fill
                className="object-contain object-top bg-background"
                priority={i === 0}
              />
            </div>

            {/* Desktop Overlay Content */}
            {slide.content && (
              <div className={`hidden md:flex absolute inset-0 items-start justify-end pr-[5%] lg:pr-[8%] ${slide.content.isBanner2 ? 'pt-[2%] lg:pt-[1%]' : 'pt-[5%] lg:pt-[4%]'
                }`}>
                <div className="max-w-2xl lg:max-w-3xl text-center flex flex-col items-center font-body">
                  {slide.content.isBanner2 ? (
                    <>
                      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-wide leading-tight uppercase">
                        {slide.content.title.split(' ').slice(0, 2).join(' ')}<br />
                        {slide.content.title.split(' ').slice(2).join(' ')}
                      </h2>
                      <div className="bg-primary text-white py-2 px-8 mb-4">
                        <p className="text-sm lg:text-base xl:text-lg font-bold tracking-wider italic">
                          {slide.content.subtitle}
                        </p>
                      </div>
                      <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a1a1a] mb-8 tracking-wider">
                        {slide.content.highlight}
                      </p>
                      <button className="bg-primary text-white px-8 py-2.5 xl:px-12 xl:py-3.5 rounded-full text-xs xl:text-sm font-bold tracking-[0.3em] hover:bg-gold-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg uppercase">
                        {slide.content.cta}
                      </button>
                    </>
                  ) : slide.content.isBanner3 ? (
                    <>
                      <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-wide leading-tight uppercase">
                        {slide.content.title.split(' & ').join(' &\n')}
                      </h2>
                      <p className="text-lg lg:text-xl xl:text-3xl font-bold text-primary mb-4 italic tracking-widest">
                        {slide.content.subtitle}
                      </p>
                      <div className="bg-primary text-white py-2.5 px-10 lg:px-20 rounded-xl shadow-lg">
                        <p className="text-base lg:text-lg xl:text-xl font-bold tracking-[0.1em]">
                          {slide.content.highlight}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1a1a1a] mb-2 tracking-wide">
                        {slide.content.title}
                      </h2>
                      <p className="text-sm lg:text-base xl:text-lg font-medium text-[#333] mb-2 tracking-wider">
                        {slide.content.subtitle}
                      </p>
                      <p className="text-4xl lg:text-5xl xl:text-7xl font-bold text-primary mb-8 tracking-wider">
                        {slide.content.highlight}
                      </p>
                      <button className="bg-[#1a1a1a] text-white px-8 py-2.5 xl:px-12 xl:py-3.5 rounded-full text-xs xl:text-sm font-bold tracking-[0.3em] hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-lg uppercase">
                        {slide.content.cta}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Mobile Overlay Content */}
            {slide.content && (
              <div className="block md:hidden absolute inset-0 pt-[2%] px-4 lg:px-20 font-body">
                <div className="w-full text-center flex flex-col items-center">
                  {slide.content.isBanner2 ? (
                    <>
                      <h2 className="text-base font-extrabold text-[#1a1a1a] mb-1 tracking-wide leading-tight uppercase">
                        {slide.content.title.split(' ').slice(0, 2).join(' ')}<br />
                        {slide.content.title.split(' ').slice(2).join(' ')}
                      </h2>
                      <div className="bg-primary text-white py-0.5 px-3 mb-1.5">
                        <p className="text-[8px] font-bold italic tracking-wider">
                          {slide.content.subtitle}
                        </p>
                      </div>
                      <p className="text-sm font-extrabold text-[#1a1a1a] mb-2.5 tracking-wide">
                        {slide.content.highlight}
                      </p>
                      <button className="bg-primary text-white px-5 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase shadow-md">
                        {slide.content.cta}
                      </button>
                    </>
                  ) : slide.content.isBanner3 ? (
                    <>
                      <h2 className="text-lg font-extrabold text-[#1a1a1a] mb-1 tracking-wide leading-tight uppercase">
                        {slide.content.title.split(' & ').join(' &\n')}
                      </h2>
                      <p className="text-[12px] font-bold text-primary mb-1.5 italic tracking-wider">
                        {slide.content.subtitle}
                      </p>
                      <div className="bg-primary text-white py-1 px-5 rounded-lg shadow-md">
                        <p className="text-[10px] font-bold tracking-widest">
                          {slide.content.highlight}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-base font-extrabold text-[#1a1a1a] mb-0.5 tracking-wide">
                        {slide.content.title}
                      </h2>
                      <p className="text-[9px] font-medium text-[#333] mb-1 leading-tight tracking-wider">
                        {slide.content.subtitle}
                      </p>
                      <p className="text-2xl font-bold text-primary mb-3 tracking-wide">
                        {slide.content.highlight}
                      </p>
                      <button className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-md text-[9px] font-bold tracking-widest uppercase shadow-md">
                        {slide.content.cta}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
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
