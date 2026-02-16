import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import doctor from "@/assets/doctor.jpeg";
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
            <section className="relative py-20 bg-[#FFF9F5] flex items-center justify-center text-center px-4">
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



            {/* Doctor Profiles */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 space-y-24">

                    {/* Dr. Prajwal */}
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-16 items-start">
                        {/* Mobile Name */}
                        <h2 className="text-3xl font-heading font-medium text-gold leading-tight md:hidden w-full text-center">Dr. Prajwal</h2>

                        {/* Image - Left */}
                        <div className="w-full md:col-span-5 lg:col-span-4">
                            <div className="relative h-[400px] w-full overflow-hidden shadow-none">
                                <Image
                                    src="/doctors/dr-prajwal.jpg"
                                    alt="Dr. Prajwal"
                                    fill
                                    className="object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>
                        {/* Content - Right */}
                        <div className="w-full md:col-span-7 lg:col-span-8 space-y-6 text-left pt-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl md:text-4xl font-heading font-medium text-gold leading-tight hidden md:block">Dr. Prajwal</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Dr. Prajwal is a highly skilled Maxillofacial Surgeon with extensive training in facial plastic and reconstructive surgery. His expertise spans across complex facial trauma, orthognathic surgery, temporomandibular joint (TMJ) total replacement, craniofacial surgery, and head-neck tumor management.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Having completed fellowships in Facial Plastic & Craniofacial Surgery, Ear Reconstruction, and TMJ Total Replacement, Dr. Prajwal combines surgical precision with an artistic approach to enhance both function and aesthetics. Renowned for his expertise in facial cosmetic surgery, he specializes in procedures that restore harmony and confidence to his patients. With a patient-centric approach, Dr. Prajwal strives to deliver exceptional outcomes in facial reconstruction and aesthetic enhancement. At Praaya Aesthetic Clinic, he is dedicated to providing cutting-edge treatments in facial aesthetics and reconstructive surgery, ensuring the highest standards of care for every patient.
                            </p>
                        </div>
                    </div>

                    {/* Dr. Praveen Kumar H. P */}
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-16 items-start">
                        {/* Mobile Name */}
                        <h2 className="text-3xl font-heading font-medium text-gold leading-tight md:hidden w-full text-center">Dr. Praveen Kumar H. P</h2>

                        {/* Image - Left */}
                        <div className="w-full md:col-span-5 lg:col-span-4">
                            <div className="relative h-[400px] w-full overflow-hidden shadow-none bg-secondary/20">
                                <Image
                                    src="/doctors/dr-praveen.jpg"
                                    alt="Dr. Praveen Kumar H. P"
                                    fill
                                    className="object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>
                        {/* Content - Right */}
                        <div className="w-full md:col-span-7 lg:col-span-8 space-y-6 text-left pt-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl md:text-4xl font-heading font-medium text-gold leading-tight hidden md:block">Dr. Praveen Kumar H. P</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Dr. Praveen Kumar H. P is a national board-certified plastic surgeon with a deep passion for microvascular surgery and a broad spectrum of expertise in plastic and reconstructive procedures. He completed his MBBS from the prestigious JJM Medical College, Davanagere, and pursued a rigorous 6-year plastic surgery training under the National Board of Examinations at Sparsh Hospital, Bangalore—a renowned center for tertiary trauma care, microvascular reconstruction, and advanced plastic surgery.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Driven by a commitment to excellence, Dr. Praveen further honed his skills through specialized training at esteemed plastic surgery centers, expanding his expertise across various subspecialties. As a lifetime member of multiple national and international academic bodies, he actively participates in conferences, ensuring he stays at the forefront of advancements in plastic and reconstructive surgery. Beyond his surgical expertise, Dr. Praveen is widely recognized for his compassionate approach toward patients. Among medical circles, he is highly regarded for his extensive experience in limb replantations and complex microvascular procedures, consistently delivering exceptional surgical outcomes.
                            </p>
                        </div>
                    </div>

                    {/* Dr. Aishwarya Ghattad */}
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-16 items-start">
                        {/* Mobile Name */}
                        <h2 className="text-3xl font-heading font-medium text-gold leading-tight md:hidden w-full text-center">Dr. Aishwarya Ghattad</h2>

                        {/* Image - Left */}
                        <div className="w-full md:col-span-5 lg:col-span-4">
                            <div className="relative h-[400px] w-full overflow-hidden shadow-none bg-secondary/20">
                                <Image
                                    src="/doctors/dr-aishwarya.jpg"
                                    alt="Dr. Aishwarya Ghattad"
                                    fill
                                    className="object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>
                        {/* Content - Right */}
                        <div className="w-full md:col-span-7 lg:col-span-8 space-y-6 text-left pt-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl md:text-4xl font-heading font-medium text-gold leading-tight hidden md:block">Dr. Aishwarya Ghattad</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Dr. Aishwarya Ghattad is a highly skilled cosmetologist, specializing in advanced aesthetic treatments that enhance natural beauty and restore youthful confidence. With expertise in lasers, thread lifts, Botox, and dermal fillers, she offers customized non-surgical solutions for facial rejuvenation and skin enhancement. Her deep understanding of skin health and facial aesthetics allows her to deliver personalized treatments that address concerns such as aging, pigmentation, fine lines, and facial contouring. Dr. Aishwarya stays at the forefront of the latest advancements in cosmetic dermatology, ensuring her patients receive the most effective and cutting-edge treatments. Known for her precision, artistry, and patient-centric approach, she has helped countless individuals achieve naturally beautiful and long-lasting results.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
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
