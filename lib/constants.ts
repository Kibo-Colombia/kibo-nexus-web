/**
 * Centralized color palette for the Kibo Campus
 * Consistent with the entire Kibo ecosystem
 */

export const KIBO_COLORS = {
    // Core Palette
    Living: "#65A1C9",
    Present: "#C24656",
    Saving: "#A9D9C7",
    Future: "#614FBB",

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
        name: "Kibo CFO",
        subtitle: "Your Financial Ally",
        description:
            "Stop just managing money; start funding your freedom. Intelligent analysis built for the Colombian reality to help you reach your goals faster.",
        url: "cfo.mykibo.site",
        color: KIBO_COLORS.Saving,
    },
    {
        id: "academy",
        name: "Kibo Dojo",
        subtitle: "Wisdom & Mastery",
        description:
            "We don't just teach skills; we build character. A space to learn, grow, and master the tools of the modern world.",
        url: "learn.mykibo.site",
        color: KIBO_COLORS.Future,
    },
    {
        id: "studio",
        name: "Kibo Studio",
        subtitle: "Legacy Media",
        description: "Creating content that survives time. We produce stories that inspire, educate, and elevate the human spirit.",
        url: "studio.mykibo.site",
        color: KIBO_COLORS.Living,
    },
    {
        id: "lab",
        name: "Kibo Lab",
        subtitle: "R&D & AI",
        description: "Our playground for the future. Experimenting with AI agents and new technologies to solve tomorrow's problems.",
        url: "lab.mykibo.site",
        color: KIBO_COLORS.Present,
    },
] as const;

export type DivisionId = (typeof DIVISIONS)[number]["id"];
