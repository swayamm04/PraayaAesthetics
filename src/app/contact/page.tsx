import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | Praaya Aesthetic Internationale",
    description: "Get in touch with Praaya Aesthetic Internationale in Shivamogga. Schedule your appointment or consultation today. Phone: +91 81078 47523.",
    keywords: ["Contact Cosmetic Clinic", "Book Appointment", "Consultation", "Shivamogga Clinic Address", "Praaya Aesthetics Phone Number"],
    alternates: {
        canonical: "https://praayaaesthetics.com/contact",
    },
};

const Contact = () => {
    return <ContactContent />;
};

export default Contact;
