"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const GalleryGrid = () => {
    const images = [
        { src: "/gallery/gallery-1.jpg", alt: "Gallery Image 1", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-2.jpg", alt: "Gallery Image 2", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-3.jpg", alt: "Gallery Image 3", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-4.jpg", alt: "Gallery Image 4", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-5.jpg", alt: "Gallery Image 5", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-6.jpg", alt: "Gallery Image 6", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-7.jpg", alt: "Gallery Image 7", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-8.jpg", alt: "Gallery Image 8", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-9.jpg", alt: "Gallery Image 9", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-10.jpg", alt: "Gallery Image 10", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-11.jpeg", alt: "Gallery Image 11", className: "col-span-1 row-span-1" },
        { src: "/gallery/gallery-12.jpeg", alt: "Gallery Image 12", className: "col-span-1 row-span-1" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const scrollWidth = scrollRef.current.scrollWidth;
            const itemWidth = scrollWidth / images.length;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading text-center mb-12 text-primary">Our Clinic Gallery</h2>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:auto-rows-[300px] pb-4 md:pb-0 scrollbar-hide"
                >
                    {images.map((image, index) => (
                        <div key={index} className={`relative rounded-xl overflow-hidden group min-w-[90%] md:min-w-0 h-[300px] md:h-auto snap-center flex-shrink-0 ${image.className}`}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile Indicators */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {images.map((_, index) => (
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

export default GalleryGrid;
