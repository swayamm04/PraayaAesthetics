import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VideosSection from "@/components/VideosSection";
import GalleryGrid from "@/components/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery & Success Stories | Praaya Aesthetic Internationale",
    description: "View our gallery of successful transformations and patient testimonials. See the results of our expert cosmetic and plastic surgery procedures.",
    keywords: ["Patient Gallery", "Before After Photos", "Cosmetic Surgery Results", "Patient Testimonials", "Success Stories"],
    alternates: {
        canonical: "https://praayaaesthetics.com/gallery",
    },
};

const Gallery = () => {
    return (
        <main className="min-h-screen bg-background">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 bg-[#FFF9F5] flex items-center justify-center text-center px-4 lg:px-20">
                <div className="max-w-3xl">
                    <p className="text-primary tracking-[0.25em] text-sm font-semibold uppercase mb-4">
                        Success Stories
                    </p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                        Gallery & Videos
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Witness the transformations and success stories of our happy patients.
                    </p>
                </div>
            </section>

            <GalleryGrid />
            <VideosSection />

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Gallery;
