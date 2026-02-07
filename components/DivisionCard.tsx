"use client";

import { ArrowRight, Wallet, GraduationCap, Clapperboard, FlaskConical } from "lucide-react";
import { DIVISIONS } from "@/lib/constants";

const getDivisionIcon = (id: string, color: string) => {
    const props = { size: 32, style: { color } };
    switch (id) {
        case "cfo": return <Wallet {...props} />;
        case "academy": return <GraduationCap {...props} />;
        case "studio": return <Clapperboard {...props} />;
        case "lab": return <FlaskConical {...props} />;
        default: return <Wallet {...props} />;
    }
};

export default function DivisionCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {DIVISIONS.map((division, index) => (
                <a
                    href={`https://${division.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={division.id}
                    className={`kibo-card-hover animate-fade-in-up animate-delay-${index + 1} block group`}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className="w-16 h-16 flex items-center justify-center rounded-xl border-2 flex-shrink-0"
                            style={{ borderColor: division.color }}
                        >
                            {getDivisionIcon(division.id, division.color)}
                        </div>
                        <div className="flex-1">
                            <h3
                                className="text-2xl font-bold mb-1"
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
                            <div className="flex items-center gap-2 text-sm font-mono text-foreground font-bold">
                                <span>{division.url}</span>
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
