import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
// import VideosSection from "@/components/VideosSection"; // Removed as per request
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
    title: "Praaya Aesthetic Internationale | Best Cosmetic & Plastic Surgery Clinic",
    description: "Transform your look with Praaya Aesthetic Internationale. We offer advanced cosmetic surgeries, hair transplants, and skin treatments in Shivamogga. Book your consultation today.",
    alternates: {
        canonical: "https://praayaaesthetics.com",
    },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Praaya Aesthetic Internationale",
        "description": "Expert cosmetic and plastic surgery treatments in Shivamogga.",
        "image": "https://praayaaesthetics.com/logo.png", // Update with actual domain
        "url": "https://praayaaesthetics.com",
        "telephone": "+918107847523",
        "email": "praayaaesthetics@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kuvempu Rd, Near Jail Circle",
            "addressLocality": "Shivamogga",
            "addressRegion": "Karnataka",
            "postalCode": "577201",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.938605,
            "longitude": 75.567282
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "19:30"
            }
        ],
        "priceRange": "$$",
        "medicalSpecialty": ["PlasticSurgery", "Dermatology", "CosmeticSurgery"]
    };

    return (
        <div className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TopBar />
            <Navbar />
            <HeroSlider />
            <AboutSection />
            <ServicesSection variant="simple" />
            <WhyChooseUs />
            <FAQSection />
            <ReviewsSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
