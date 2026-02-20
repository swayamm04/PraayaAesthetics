"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronUp, CheckCircle2 } from "lucide-react";

interface DoctorCardProps {
    name: string;
    role: string;
    imageSrc: string;
    shortBio: string;
    fullBio: string[];
    specialties?: string[];
    isReversed?: boolean;
}

const DoctorCard = ({ name, role, imageSrc, shortBio, fullBio, specialties, isReversed = false }: DoctorCardProps) => {

    return (
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center`}>
            <div className="flex-shrink-0 w-full md:w-[280px] lg:w-[320px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-md">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-primary mb-2">
                        {name}
                    </h2>
                    {/* <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">
                        {role}
                    </p> */}
                </div>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed text-justify">
                    <p>{shortBio}</p>
                    {fullBio.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}

                    {specialties && specialties.length > 0 && (
                        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {specialties.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
