import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesSection from "@/components/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Praaya Aesthetic Internationale",
    description: "Explore our wide range of premium cosmetic and plastic surgery treatments. From Rhinoplasty to Hair Transplants, we offer advanced solutions for your beauty needs.",
    keywords: ["Cosmetic Surgery Services", "Plastic Surgery Procedures", "Rhinoplasty", "Hair Transplant", "Fillers", "Botox", "Laser Treatment"],
    alternates: {
        canonical: "https://praayaaesthetics.com/services",
    },
};

const Services = () => {
    return (
        <main className="min-h-screen bg-background">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 bg-[#FFF9F5] flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                    <p className="text-primary tracking-[0.25em] text-sm font-semibold uppercase mb-4">
                        What We Offer
                    </p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                        Our Services
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Explore our wide range of premium cosmetic and plastic surgery treatments designed to enhance your natural beauty.
                    </p>
                </div>
            </section>

            <ServicesSection />

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Services;
