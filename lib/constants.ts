/**
 * Centralized color palette for the Kibo Ecosystem
 * Consistent with the Virtuous Cycle: Expose → Enable → Empower
 */

export const KIBO_COLORS = {
    // Core Palette
    Living: "var(--color-living)",  // Blue (CFO)
    Present: "var(--color-present)", // Red (Dojo)
    Saving: "var(--color-primary)",  // Mint (Studio) - Using Primary for consistency
    Future: "var(--color-future)",  // Purple (Lab)
    Nexus: "var(--color-primary)",   // Green (Nexus)

    // UI Colors
    Background: "var(--background)",
    Foreground: "var(--foreground)",
    Border: "var(--border)",
    Primary: "var(--primary)",
    Secondary: "var(--secondary)",
} as const;

export const DIVISIONS = [
    {
        id: "cfo",
        name: "CFO mykibo",
        subtitle: "Enable — Your Financial Ally",
        description:
            "We provide the financial infrastructure to take action. Intelligent analysis built for the Colombian reality to help you reach your goals faster.",
        url: "cfo.mykibo.site",
        color: KIBO_COLORS.Living,
    },
    {
        id: "dojo",
        name: "Dojo mykibo",
        subtitle: "Expose + Enable — Wisdom & Mastery",
        description:
            "We don't just teach skills; we build character. A space to learn, grow, and master the tools of the modern world.",
        url: "learn.mykibo.site",
        color: KIBO_COLORS.Present,
    },
    {
        id: "lab",
        name: "Lab mykibo",
        subtitle: "Enable + Empower — R&D & AI",
        description: "Our playground for the future. Experimenting with AI agents and new technologies to solve tomorrow's problems.",
        url: "lab.mykibo.site",
        color: KIBO_COLORS.Future,
    },
    {
        id: "studio",
        name: "Studio mykibo",
        subtitle: "Empower — Legacy Media",
        description: "Amplifying impact through content. We produce stories that inspire, educate, and elevate the human spirit.",
        url: "studio.mykibo.site",
        color: KIBO_COLORS.Saving,
    },
] as const;

export type DivisionId = (typeof DIVISIONS)[number]["id"];
