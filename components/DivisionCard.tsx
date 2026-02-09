"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { DIVISIONS } from "@/lib/constants";

const getDivisionIcon = (id: string, name: string) => {
    // Determine the icon path based on the division ID
    let iconPath = "";
    switch (id) {
        case "cfo": iconPath = "/icons/cfo.png"; break;
        case "dojo": iconPath = "/icons/dojo.png"; break;
        case "studio": iconPath = "/icons/studio.png"; break;
        case "lab": iconPath = "/icons/lab.png"; break;
        case "nexus": iconPath = "/icons/nexus.png"; break;
        default: iconPath = "/icons/cfo.png"; break;
    }

    return (
        <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm">
            <Image
                src={iconPath}
                alt={`${name} icon`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};

export default function DivisionCard() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {DIVISIONS.map((division, index) => (
                <a
                    href={`https://${division.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={division.id}
                    className={`kibo-card-hover animate-fade-in-up animate-delay-${index + 1} block group transition-colors duration-300`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        borderColor: hoveredIndex === index ? division.color : ''
                    }}
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            {getDivisionIcon(division.id, division.name)}
                        </div>
                        <div className="flex-1">
                            <h3
                                className="text-2xl font-bold mb-1 transition-colors"
                                style={{ color: division.color }}
                            >
                                {division.name}
                            </h3>
                            <p
                                className="text-sm font-bold uppercase tracking-wider mb-3 opacity-80"
                                style={{ color: division.color }}
                            >
                                {division.subtitle}
                            </p>
                            <p className="text-foreground mb-4 font-medium leading-relaxed">{division.description}</p>
                            <div className="flex items-center gap-2 text-sm font-mono text-foreground font-bold group-hover:opacity-100 transition-opacity">
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: hoveredIndex === index ? division.color : '' }}>
                                    {division.url}
                                </span>
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                    style={{ color: hoveredIndex === index ? division.color : '' }}
                                />
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
