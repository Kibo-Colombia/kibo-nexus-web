/**
 * Centralized color palette for the Kibo Campus
 * Consistent with the entire Kibo ecosystem
 */

export const KIBO_COLORS = {
    // Core Palette
    Living: "#65A1C9",  // Blue (CFO)
    Present: "#C24656", // Red (Dojo)
    Saving: "#A9D9C7",  // Mint (Studio)
    Future: "#614FBB",  // Purple (Lab)
    Nexus: "#10B981",   // Green (Nexus)

    // UI Colors
    Background: "#1E4332",
    Foreground: "#F2F2F2",
    Border: "#A9D9C7",
    Primary: "#A9D9C7",
    Secondary: "#614FBB",
} as const;

export const DIVISIONS = [
    {
        id: "cfo",
        name: "CFO mykibo",
        subtitle: "Your Financial Ally",
        description:
            "Stop just managing money; start funding your freedom. Intelligent analysis built for the Colombian reality to help you reach your goals faster.",
        url: "cfo.mykibo.site",
        color: KIBO_COLORS.Living,
    },
    {
        id: "dojo",
        name: "Dojo mykibo",
        subtitle: "Wisdom & Mastery",
        description:
            "We don't just teach skills; we build character. A space to learn, grow, and master the tools of the modern world.",
        url: "learn.mykibo.site",
        color: KIBO_COLORS.Present,
    },
    {
        id: "lab",
        name: "Lab mykibo",
        subtitle: "R&D & AI",
        description: "Our playground for the future. Experimenting with AI agents and new technologies to solve tomorrow's problems.",
        url: "lab.mykibo.site",
        color: KIBO_COLORS.Future,
    },
    {
        id: "studio",
        name: "Studio mykibo",
        subtitle: "Legacy Media",
        description: "Creating content that survives time. We produce stories that inspire, educate, and elevate the human spirit.",
        url: "studio.mykibo.site",
        color: KIBO_COLORS.Saving,
    },
] as const;

export type DivisionId = (typeof DIVISIONS)[number]["id"];
