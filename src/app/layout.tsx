import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
    title: {
        default: "Praaya Aesthetic Internationale | Best Cosmetic Clinic in Shivamogga",
        template: "%s | Praaya Aesthetic Internationale",
    },
    metadataBase: new URL("https://praayaaesthetics.com"),
    description: "Praaya Aesthetic Internationale offers world-class cosmetic and plastic surgery treatments in Shivamogga. Specializing in Rhinoplasty, Hair Transplants, Facelifts, and more. Dr. Prajwal and our expert team are dedicated to enhancing your natural beauty.",
    keywords: [
        "Cosmetic Surgery Shivamogga",
        "Plastic Surgery Shimoga",
        "Rhinoplasty",
        "Hair Transplant",
        "Facelift",
        "Liposuction",
        "Aesthetic Clinic",
        "Dr. Prajwal",
        "Skin Care Clinic",
        "Laser Treatments",
        "Praaya Aesthetic",
    ],
    authors: [{ name: "Praaya Aesthetic Internationale" }],
    creator: "Praaya Aesthetic Internationale",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://praayaaesthetics.com",
        title: "Praaya Aesthetic Internationale | Redefine Your Beauty",
        description: "Expert cosmetic and plastic surgery treatments in Shivamogga. Enhance your natural beauty with our advanced procedures.",
        siteName: "Praaya Aesthetic Internationale",
        images: [
            {
                url: "/logo.png", // Ideally a larger OG image
                width: 1200,
                height: 630,
                alt: "Praaya Aesthetic Internationale",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Praaya Aesthetic Internationale",
        description: "Expert cosmetic and plastic surgery treatments in Shivamogga.",
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/logo.png" },
            { url: "/logo.png", sizes: "32x32", type: "image/png" },
        ],
        shortcut: "/logo.png",
        apple: "/logo.png",
    },

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
