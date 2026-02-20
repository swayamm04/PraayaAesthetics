import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DoctorCard from "@/components/DoctorCard";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Doctors | Expert Plastic Surgeons in Shivamogga",
    description: "Meet Dr. Prajwal and the expert team at Praaya Aesthetic Internationale. Experienced plastic surgeons dedicated to delivering natural-looking results.",
    keywords: ["Plastic Surgeon Shivamogga", "Dr. Prajwal", "Cosmetic Surgeon", "Medical Team", "Aesthetic Specialists"],
    alternates: {
        canonical: "https://praayaaesthetics.com/our-doctors",
    },
};

// Placeholder for other doctors if images are missing
const DoctorPlaceholder = ({ name }: { name: string }) => (
    <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground text-sm font-medium">
        {name}
    </div>
);

const OurDoctors = () => {
    return (
        <main className="min-h-screen bg-background">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 bg-[#FFF9F5] flex items-center justify-center text-center px-4 lg:px-20">
                <div className="max-w-3xl">
                    <p className="text-primary tracking-[0.25em] text-sm font-semibold uppercase mb-4">
                        Our Team
                    </p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                        Our Doctors
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Welcome to Praaya Aesthetics, a premium cosmetic and plastic surgery
                        clinic in Shimoga, dedicated to helping you achieve confidence
                        through world-class aesthetic treatments.
                    </p>
                </div>
            </section>



            {/* Doctors Grid */}
            <section className="py-16 px-4 lg:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col gap-16">
                    <DoctorCard
                        name="Dr. Prajwal"
                        role="Plastic Surgeon"
                        imageSrc="/doctors/dr-prajwal.jpg"
                        shortBio="Dr. Prajwal is a consultant Plastic surgeon. He has done his super-specialization (M.Ch) in Plastic surgery from the prestigious JIPMER, Pondicherry."
                        fullBio={[
                            "Dr. Prajwal is a highly skilled Maxillofacial Surgeon with extensive training in facial plastic and reconstructive surgery. His expertise spans across complex facial trauma, orthognathic surgery, temporomandibular joint (TMJ) total replacement, craniofacial surgery, and head-neck tumor management.",
                            "Having completed fellowships in Facial Plastic & Craniofacial Surgery, Ear Reconstruction, and TMJ Total Replacement, Dr. Prajwal combines surgical precision with an artistic approach to enhance both function and aesthetics. Renowned for his expertise in facial cosmetic surgery, he specializes in procedures that restore harmony and confidence to his patients."
                        ]}
                        specialties={[
                            "M.Ch in Plastic Surgery (JIPMER)",
                            "Cosmetic Surgery Specialist",
                            "Reconstructive Surgery Expert",
                            "Hand Surgery Specialist"
                        ]}
                    />

                    <DoctorCard
                        name="Dr. Praveen Kumar H. P"
                        role="Plastic Surgeon"
                        imageSrc="/doctors/dr-praveen.jpg"
                        shortBio="Dr. Praveen Kumar H. P is a consultant Plastic surgeon. He was working as Assistant Professor in the Department of Plastic Surgery at SSIMS, Davangere."
                        fullBio={[
                            "Dr. Praveen Kumar H. P is a national board-certified plastic surgeon with a deep passion for microvascular surgery and a broad spectrum of expertise in plastic and reconstructive procedures. He completed his MBBS from the prestigious JJM Medical College, Davanagere, and pursued a rigorous 6-year plastic surgery training under the National Board of Examinations at Sparsh Hospital, Bangalore.",
                            "Driven by a commitment to excellence, Dr. Praveen further honed his skills through specialized training at esteemed plastic surgery centers, expanding his expertise across various subspecialties. He has keen interest in Trauma and reconstructive surgery, Hand surgery, Onco reconstruction, congenital anomalies, burn management and cosmetic surgeries."
                        ]}
                        specialties={[
                            "M.Ch in Plastic Surgery (BJ Medical)",
                            "Reconstructive Surgery Expert",
                            "Onco Reconstruction Specialist",
                            "Burn Management Expert"
                        ]}
                        isReversed={true}
                    />

                    <DoctorCard
                        name="Dr. Aishwarya Ghattad"
                        role="Cosmetologist"
                        imageSrc="/doctors/dr-aishwarya.jpg"
                        shortBio="Dr. Aishwarya Ghattad is a highly skilled cosmetologist, specializing in advanced aesthetic treatments. With expertise in lasers, thread lifts, Botox, and dermal fillers."
                        fullBio={[
                            "Dr. Aishwarya Ghattad is a highly skilled cosmetologist, specializing in advanced aesthetic treatments that enhance natural beauty and restore youthful confidence. With expertise in lasers, thread lifts, Botox, and dermal fillers, she offers customized non-surgical solutions for facial rejuvenation and skin enhancement.",
                            "Her deep understanding of skin health and facial aesthetics allows her to deliver personalized treatments that address concerns such as aging, pigmentation, fine lines, and facial contouring. Dr. Aishwarya stays at the forefront of the latest advancements in cosmetic dermatology, ensuring her patients receive the most effective and cutting-edge treatments."
                        ]}
                        specialties={[
                            "Cosmetic Dermatology",
                            "Facial Rejuvenation",
                            "Laser Treatments",
                            "Anti-Aging Specialist"
                        ]}
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-20 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
                            Get Free Consultation
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Ready to start your journey to confidence? Book a consultation with our expert team today and discover the best version of yourself.
                        </p>
                        <Link
                            href="https://wa.me/+918107847523"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-gold-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Book Appointment Now
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default OurDoctors;
