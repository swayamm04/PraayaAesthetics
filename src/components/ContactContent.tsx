"use client";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactContent = () => {
    return (
        <main className="min-h-screen bg-background">
            <TopBar />
            <Navbar />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column: Form & Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-heading font-medium text-foreground tracking-wide mb-4">
                                    GET IN <span className="text-[#A48F73]">TOUCH</span>
                                </h1>
                                <p className="text-muted-foreground text-lg">
                                    We&apos;re here to assist you with inquiries or concerns. Your
                                    feedback is essential to our growth!
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your Place"
                                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your message"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-transparent resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-[#B89E5F] hover:bg-[#A48F73] text-white font-medium py-3 rounded-md transition-colors uppercase tracking-wide"
                                >
                                    send message
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Map & Address */}
                        <div className="space-y-8">
                            <div className="w-full h-[400px] lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden relative shadow-sm border border-border/50">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.335713569237!2d75.56728237485954!3d13.938605586473054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ae416d5c9f2d19%3A0x219439fbb2538d5b!2sPraaya%20Aesthetic%20Internationale!5e0!3m2!1sen!2sin!4v1771215105766!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                    className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-bold tracking-widest text-foreground uppercase">
                                    ADDRESS :
                                </h3>
                                <p className="text-muted-foreground text-lg">
                                    Kuvempu Rd, Near Jail Circle, Shivamogga
                                </p>

                                <h3 className="text-sm font-bold tracking-widest text-foreground uppercase mt-6">
                                    PHONE :
                                </h3>
                                <a
                                    href="tel:+918107847523"
                                    className="text-muted-foreground text-lg hover:text-primary transition-colors block"
                                >
                                    +91 81078 47523
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default ContactContent;
