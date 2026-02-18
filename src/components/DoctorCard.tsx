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
}

const DoctorCard = ({ name, role, imageSrc, shortBio, fullBio, specialties }: DoctorCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}
        >
            <div className="flex-shrink-0">
                <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-secondary/20 shadow-inner">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>
            <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                        {name}
                    </h2>
                    <p className="text-primary font-medium text-sm tracking-wide uppercase mt-1">
                        {role}
                    </p>
                </div>

                {/* Short Bio (Always visible if collapsed, or hidden via CSS logic if we want smooth transition, but simple conditional is fine for now) */}
                {!isExpanded && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                        {shortBio}
                    </p>
                )}

                {/* Expanded Content */}
                {isExpanded && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        {/* Render full bio paragraphs */}
                        {fullBio.map((paragraph, index) => (
                            <p key={index} className="text-gray-500 text-sm leading-relaxed text-justify">
                                {paragraph}
                            </p>
                        ))}

                        {/* Specialties List */}
                        {specialties && specialties.length > 0 && (
                            <div className="pt-2 grid grid-cols-1 gap-2">
                                {specialties.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center text-primary text-sm font-semibold hover:underline mt-2 focus:outline-none"
                >
                    {isExpanded ? (
                        <>
                            Read Less <ChevronUp className="ml-1 h-3 w-3" />
                        </>
                    ) : (
                        <>
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default DoctorCard;
