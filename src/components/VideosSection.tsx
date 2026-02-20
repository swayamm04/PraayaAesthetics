"use client";

import { useState, useRef } from "react";

const videos = [
  { id: "H99Pvi-oqJU", title: "Immediate surgery results after ethnic thick skin rhinoplasty" },
  { id: "DcfkCMpGZqw", title: "A young boy with a huge dorsal hump visits Praaya for Rhinoplasty" },
  { id: "LO-lWjARV1I", title: "A man gets best hair transplant in India" },
  { id: "sYHs8lnjzG0", title: "Best Rib cartilage rhinoplasty by Dr Prajwal Kathagi" },
];

const VideosSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const itemWidth = scrollWidth / videos.length;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-center text-4xl md:text-5xl font-heading font-semibold text-foreground">
            Popular Videos
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-2" />
        </div>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 cursor-grab active:cursor-grabbing"
        >
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow min-w-[85%] md:min-w-[48%] lg:min-w-[31%] snap-center flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background">
                <p className="text-sm font-semibold text-foreground line-clamp-2">{video.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary w-4" : "bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
