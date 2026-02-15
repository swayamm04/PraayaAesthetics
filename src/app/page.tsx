import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideosSection from "@/components/VideosSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <TopBar />
            <Navbar />
            <HeroSlider />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUs />
            <FAQSection />
            <ReviewsSection />
            <VideosSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
