import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Flame, MessageCircle, Share2, MoreHorizontal, Bookmark } from "lucide-react";
import Image from "next/image";

// Placeholder data for the Spark feed
const sparks = [
    {
        id: 1,
        type: "article", // 'article' (Medium-like) or 'thought' (Twitter-like)
        author: {
            name: "Nico",
            handle: "@nico_kibo",
            avatar: "/avatars/nico.jpg", // Placeholder
        },
        title: "Forging Value",
        subtitle: "Leaving comfort behind to find out how far I can go.",
        content: `
      "Everyone told me I’d regret leaving Japan after graduation. They spoke of the safety, the stability, and the 'perfect' life I could build here. 'You don't know how many people would kill for this opportunity,' they warned. 'Why would you throw it away?'

      I’m not doing this to find a 'nicer' place. I’m doing this because I need to see how far I can go. I don't want to live comfortably if it means my full potential is never revealed; I want to live a life that forges me into a man of the highest possible value.

      My mission now is to help others unlock their own most valuable potential—to make their lives better. It is hard to make the decision when the people you love say you shouldn’t do it, but the person I love the most is me, and I don’t want to live a life where I am disappointed in myself.

      My path has to start now. And if the man I need to become cannot be found here, then I must go wherever he is. Even if it means leaving behind a place I love."
    `,
        timestamp: "2h ago",
        fuelCount: 128,
        commentCount: 14,
        tags: ["Ambition", "Growth", "Sacrifice"],
    },
    {
        id: 2,
        type: "thought",
        author: {
            name: "Kibo Ecosystem",
            handle: "@kibo_nexus",
            avatar: "/icon.png",
        },
        content: "Hope is not passive. It is a strategy. We build technology that turns 'someday' into 'today'. It is a commitment to your future self.",
        timestamp: "5h ago",
        fuelCount: 89,
        commentCount: 5,
        tags: ["Philosophy"],
    },
    {
        id: 3,
        type: "article",
        author: {
            name: "Kibo Finance",
            handle: "@kibo_cfo",
            avatar: "/icon.png",
        },
        title: "The compounding interest of habits.",
        subtitle: "Why small consistent actions beat intensity every time.",
        content: "Most people overestimate what they can do in a day and underestimate what they can do in a year...",
        timestamp: "1d ago",
        fuelCount: 245,
        commentCount: 42,
        tags: ["Finance", "Mindset"],
    },
];

export default function SparkPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6">
                <div className="max-w-2xl mx-auto">

                    {/* Header */}
                    <div className="mb-10 text-center animate-fade-in-up">
                        <h1 className="text-4xl font-black mb-2 flex items-center justify-center gap-3">
                            <Flame className="text-primary fill-primary" size={32} />
                            <span className="text-gradient">Spark</span>
                        </h1>
                        <p className="text-muted-foreground font-medium">
                            Daily fuel for your journey. Direct, deep, and relentless.
                        </p>
                    </div>

                    {/* Feed */}
                    <div className="space-y-6">
                        {sparks.map((spark, index) => (
                            <div
                                key={spark.id}
                                className={`kibo-card border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-fade-in-up animate-delay-${index + 1}`}
                            >

                                {/* Author Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                                            {/* Avatar Placeholder */}
                                            {spark.author.avatar.includes("icon") ? (
                                                <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600"></div>
                                            ) : (
                                                <span className="text-lg">{spark.author.name[0]}</span>
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-foreground">{spark.author.name}</span>
                                                <span className="text-xs text-muted-foreground">{spark.author.handle}</span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{spark.timestamp}</span>
                                        </div>
                                    </div>
                                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="pl-0 sm:pl-13">
                                    {spark.type === 'article' && (
                                        <div className="mb-4">
                                            {spark.title && <h2 className="text-xl font-bold mb-2 text-primary">{spark.title}</h2>}
                                            {spark.subtitle && <h3 className="text-md font-semibold mb-3 text-foreground/90 italic">{spark.subtitle}</h3>}
                                        </div>
                                    )}

                                    <div className={`text-foreground/90 leading-relaxed whitespace-pre-line ${spark.type === 'article' ? 'font-serif text-lg' : 'font-medium text-base'}`}>
                                        {spark.content}
                                    </div>

                                    {/* Tags */}
                                    {spark.tags && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {spark.tags.map(tag => (
                                                <span key={tag} className="text-xs font-bold text-primary px-2 py-1 rounded bg-primary/10">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-2 group text-muted-foreground hover:text-primary transition-colors">
                                                <span className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                                                    <Flame size={20} className="group-hover:fill-current" />
                                                </span>
                                                <span className="text-sm font-bold">{spark.fuelCount}</span>
                                            </button>

                                            <button className="flex items-center gap-2 group text-muted-foreground hover:text-blue-400 transition-colors">
                                                <span className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                                                    <MessageCircle size={20} />
                                                </span>
                                                <span className="text-sm font-bold">{spark.commentCount}</span>
                                            </button>

                                            <button className="flex items-center gap-2 group text-muted-foreground hover:text-green-400 transition-colors">
                                                <span className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                                                    <Share2 size={20} />
                                                </span>
                                            </button>
                                        </div>

                                        <button className="text-muted-foreground hover:text-primary transition-colors">
                                            <Bookmark size={20} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Load More / Infinite Scroll Placeholder */}
                    <div className="mt-12 text-center">
                        <div className="inline-block p-2 rounded-full bg-card border border-border animate-pulse">
                            <Flame className="text-primary" size={24} />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
