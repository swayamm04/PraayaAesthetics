"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const reviews = [
  {
    name: "Anand Mikkal",
    time: "8 months ago",
    text: "",
    rating: 5,
    initial: "A",
    color: "bg-orange-500",
  },
  {
    name: "Smita Patil",
    time: "8 months ago",
    text: "Had a wonderful experience at Praaya. The team is so kind and professional.",
    rating: 5,
    initial: "S",
    color: "bg-purple-600",
  },
  {
    name: "Manju",
    time: "8 months ago",
    text: "Reviewing specifically for hair loss treatment. Dr. Prajwal is very knowledgeable.",
    rating: 5,
    initial: "M",
    color: "bg-teal-600",
  },
  {
    name: "Anjan Reddy",
    time: "8 months ago",
    text: "Happy to share it is the best clinic to visit if u have hair problems!",
    rating: 5,
    initial: "A",
    color: "bg-orange-500",
  },
  {
    name: "Deepthi Ks",
    time: "8 months ago",
    text: "Highly recommend! The team takes time to listen and make you feel at ease.",
    rating: 5,
    initial: "D",
    color: "bg-yellow-600",
  },
];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Added isPaused state

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Approx card width + gap
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current; // Destructure these

      let newScrollLeft;

      if (direction === "left") {
        newScrollLeft = scrollLeft - scrollAmount;
      } else {
        // If we're near the end, loop back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) { // Check for end with a small buffer
          newScrollLeft = 0; // Loop back
        } else {
          newScrollLeft = scrollLeft + scrollAmount;
        }
      }

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / 320);
      setActiveIndex(index);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        scroll("right");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, scroll]); // Added isPaused and scroll to dependencies

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-heading font-semibold mb-12">
          Reviews
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start max-w-7xl mx-auto">
          {/* Summary Card (Fixed) */}
          <div className="w-full max-w-md lg:w-[350px] shrink-0">
            <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-background rounded-full p-1 shadow-sm border">
                    <GoogleIcon />
                  </div>
                  <h3 className="font-bold text-lg leading-tight">Praaya Aesthetic Internationale</h3>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400 font-bold text-xl">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Based on 72 reviews</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
                  <span>powered by</span>
                  <span className="font-bold text-foreground">Google</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Praaya+Aesthetic+Internationale/@13.9386056,75.5698573,17z/data=!4m8!3m7!1s0x46ae416d5c9f2d19:0x219439fbb2538d5b!8m2!3d13.9386056!4d75.5698573!9m1!1b1!16s%2Fg%2F11md2tfwb8?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                onClick={(e) => {
                  // e.preventDefault(); // allow link to work
                }}
              >
                review us on Google
              </a>
            </div>
          </div>

          {/* Carousel Track */}
          <div className="flex-1 w-full min-w-0">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide py-4 items-stretch"
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="min-w-[300px] md:min-w-[350px] snap-center bg-white rounded-xl p-6 shadow-sm border border-border/20 flex flex-col relative h-full"
                >
                  <div className="absolute top-6 right-6">
                    <GoogleIcon />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-sm shadow-sm", review.color)}>
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  {review.text && (
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">"{review.text}"</p>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-4">
              <button
                onClick={() => scroll("left")}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-primary transition-all shadow-sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {[...Array(reviews.length)].map((_, i) => (
                  <button
                    key={i}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all duration-300",
                      activeIndex === i ? "bg-primary w-4" : "bg-border"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => scroll("right")}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-primary transition-all shadow-sm"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
